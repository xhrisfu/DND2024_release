import{C as g,R as m}from"./cotSteps-DFyI0z0Q.js";import{_}from"./vendor-core-C6wgnFnY.js";const s="dnd-reasoning-reveal-folded";function E(){try{return typeof localStorage<"u"&&localStorage.getItem(s)==="1"}catch{return!1}}const d=_(E());function u(e){d.value=e;try{e?localStorage.setItem(s,"1"):localStorage.removeItem(s)}catch{}}const a=Object.fromEntries([...g,...m].filter(e=>e.label).map(e=>[e.tag,e.label])),f=Object.fromEntries([...g,...m].map(e=>[e.tag,e.sensitivity])),R="〔内幕推演已折叠——避免剧透〕";function T(e){let t=String(e||"");const c=d.value;t=t.replace(/<([A-Za-z0-9_一-鿿]+)\s*>([\s\S]*?)<\/\1\s*>/g,(l,r,o)=>{const i=a[r]?`
【${a[r]}】`:`
`;return!c&&f[r]==="folded"?`${i}${R}
`:`${i}${o}
`});const n=/<([A-Za-z0-9_一-鿿]+)\s*>/.exec(t);if(!c&&n&&f[n[1]]==="folded"){const l=a[n[1]]?`
【${a[n[1]]}】`:`
`;t=t.slice(0,n.index)+`${l}〔推演中…〕`}return t.replace(/<(\/?)([A-Za-z0-9_一-鿿]+)\s*>/g,(l,r,o)=>r?`
`:a[o]?`
【${a[o]}】`:`
`).replace(/思考结束[，,]\s*闭合思维链。?/g,"").replace(/[ \t]*\n[ \t]*/g,`
`).replace(/\n{2,}/g,`
`).trim()}export{T as f,d as r,u as s};
