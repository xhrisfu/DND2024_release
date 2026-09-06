/* eslint-disable */
/*
 * D&D 2024 剑湾历险记 — Service Worker（在线缓存）
 *
 * 目标：把 ~95MB 静态素材（图片/音频/图标）与构建产物（JS/CSS/HTML）
 * 持久化到浏览器 Cache Storage，用户再次打开页面时直接从本地磁盘读取，
 * 不再每次都走网络；同时保留可离线运行能力。
 *
 * 缓存策略（按请求类型分流）：
 *  - 导航请求 (HTML)：network-first，离线时回退到缓存的 index.html（保证拿到新版 app shell）
 *  - 静态素材 (/images/ /audio/ /icons/ /demo-battlefield/ 及图片/音频/字体扩展名)：
 *      cache-first + 后台再校验（命中即返回，后台拉新版写回）
 *  - 构建产物 (/assets/*.js|*.css 及 js/css/wasm 扩展名)：
 *      stale-while-revalidate（先返回缓存，后台更新；首次无缓存走网络）
 *  - /api/ 与跨域请求：直接透传，不缓存（动态数据/生图代理）
 *
 * 版本控制：CACHE_VERSION 改动后，activate 会清掉所有旧版本缓存。
 * 发版时若替换了同名静态素材（如 spell 图标），请递增 CACHE_VERSION 以失效旧缓存。
 */
const CACHE_VERSION = 'v1'
const STATIC_CACHE = `dnd2024-static-${CACHE_VERSION}`
const ASSETS_CACHE = `dnd2024-assets-${CACHE_VERSION}`
const HTML_CACHE = `dnd2024-html-${CACHE_VERSION}`
const CACHE_PREFIX = 'dnd2024-'
const CACHE_NAMES = [STATIC_CACHE, ASSETS_CACHE, HTML_CACHE]

// 静态素材路径前缀（public/ 目录下保持原名的资源）
const STATIC_PATH_PREFIXES = ['/images/', '/audio/', '/icons/', '/demo-battlefield/']
const STATIC_EXT = /\.(?:png|jpe?g|webp|gif|svg|avif|mp3|ogg|wav|m4a|flac|woff2?|ttf|otf|eot)$/i
const ASSET_EXT = /\.(?:js|css|wasm)$/i

self.addEventListener('install', () => {
    // 不做重型预缓存（90MB 一次性拉取体验差）；改为运行期按需缓存。
    // 保持 waiting，避免旧页面在运行中被新版本 worker 与新构建产物接管。
})

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        // 清理不属于当前版本的所有旧缓存
        const keys = await caches.keys()
        await Promise.all(
            keys
                .filter((key) => key.startsWith(CACHE_PREFIX) && !CACHE_NAMES.includes(key))
                .map((key) => caches.delete(key))
        )
    })())
})

// 判断是否为静态素材请求
function isStaticAsset(url) {
    const { pathname } = url
    return STATIC_PATH_PREFIXES.some((p) => pathname.startsWith(p)) || STATIC_EXT.test(pathname)
}

function isBuildAsset(url) {
    const { pathname } = url
    return pathname.startsWith('/assets/') || ASSET_EXT.test(pathname)
}

// 把响应写回指定缓存（仅缓存 ok 的完整 GET 响应；206 Partial Content 不能写入 Cache Storage）
async function putInCache(request, response, cache) {
    if (response && response.ok && response.type === 'basic' && response.status !== 206) {
        await cache.put(request, response.clone())
    }
}

// cache-first：命中即返回，后台拉取新版写回缓存
async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName)
    const cached = await cache.match(request)
    if (cached) {
        // 后台再校验，命中失败也不影响当前响应
        fetch(request)
            .then((response) => putInCache(request, response, cache))
            .catch(() => {})
        return cached
    }
    const response = await fetch(request)
    await putInCache(request, response, cache)
    return response
}

// stale-while-revalidate：有缓存先返回，同时后台更新；无缓存走网络
async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName)
    const cached = await cache.match(request)
    const networkPromise = fetch(request)
        .then((response) => {
            void putInCache(request, response, cache)
            return response
        })
        .catch(() => null)
    if (cached) {
        // 当前用缓存，后台静默更新
        networkPromise.catch(() => {})
        return cached
    }
    const fresh = await networkPromise
    if (fresh) return fresh
    throw new Error(`[ServiceWorker] 离线且无缓存: ${request.url}`)
}

// 导航请求：network-first，离线回退到缓存的 index.html（SPA shell）
async function handleNavigation(request) {
    const cache = await caches.open(HTML_CACHE)
    try {
        const response = await fetch(request)
        if (response && response.ok) {
            await cache.put(request, response.clone())
        }
        return response
    } catch (err) {
        // 1) 精确命中当前导航 URL
        const exact = await cache.match(request)
        if (exact) return exact
        // 2) 回退到任意缓存的 HTML（SPA shell）
        const keys = await cache.keys()
        for (const key of keys) {
            const r = await cache.match(key)
            const type = r && r.headers.get('content-type')
            if (r && type && type.includes('text/html')) return r
        }
        throw err
    }
}

self.addEventListener('fetch', (event) => {
    const request = event.request
    if (request.method !== 'GET') return

    let url
    try {
        url = new URL(request.url)
    } catch {
        return
    }

    // 仅缓存同源请求；/api/ 与跨域资源透传
    if (url.origin !== self.location.origin) return
    if (url.pathname.startsWith('/api/')) return

    // 音频/视频等媒体会使用 Range 请求；这类请求应交给浏览器原生处理。
    // 否则 206 Partial Content 写入 Cache Storage 会导致 respondWith promise reject。
    if (request.headers.has('range')) return

    // 导航请求
    if (request.mode === 'navigate') {
        event.respondWith(handleNavigation(request))
        return
    }

    // 静态素材：cache-first + 后台再校验
    if (isStaticAsset(url)) {
        event.respondWith(cacheFirst(request, STATIC_CACHE))
        return
    }

    // 构建产物：stale-while-revalidate
    if (isBuildAsset(url)) {
        event.respondWith(staleWhileRevalidate(request, ASSETS_CACHE))
        return
    }

    // 其余同源 GET 不拦截，交给浏览器默认处理
})
