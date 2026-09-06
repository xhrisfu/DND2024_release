import{l2 as b}from"./main-Z_btXa0X.js";const v=[{tag:"intent",label:"玩家意图解析",prompt:`玩家说的动作是：
玩家的意图是否模糊，如果比较模糊综合上下文，分析他真正的意图可能是：
判断玩家的口吻是否是命令式口吻，命令式口吻（"守卫放我进去了"）一律降格为"尝试"：`,sensitivity:"visible",resident:!0},{tag:"stop_check",label:"剧情分析",prompt:`概括最近20轮的剧情发生了什么（依据【近期剧情梗概】与上文对话历史，没有的别编）：
                 玩家角色（PC）的行为是否需要检定：
                 需要检定→检定前的正文要演到哪个悬念点停笔（说辞刚出口/手刚伸向锁孔/剑刚出鞘——只演出手，不写结果）：`,sensitivity:"visible",resident:!0},{tag:"canon_beat",label:"模组承接",prompt:`照切片「本地点其它幕」念一遍：本地点共几幕、当前第几幕、后面还有哪几幕（切片没给这一节就写"无"）：
                 当前这幕的硬事实是否已经全部落地、玩家是否已经历过：
                 若已演完，点名下一幕的场景 id，并在 tool_plan 里用 move_party 切幕；若未演完，写明本段还要落实哪条硬事实。
                 跨地点切幕时引擎会判一次途中遭遇：抽中会进待发遭遇，下一轮盘面就有——那是路上撞见的，先把路上这一场演完再落地，别直接跳到目的地。
                 绝不用自编内容顶替模组尚未演出的幕；标注"条件未满足"的幕不推进。
                 亲密/nsfw场景进行中不切幕、不引入模组事件打断——本步写"暂缓"，待场景自然收束后的下一发言再推进。`,sensitivity:"folded",resident:!0,materials:["sceneSlice"]},{tag:"persona_anchor",label:"角色一致",prompt:`照【主角设定】一句话复述主角是谁（身份基线行；块没注入就写"无"）：
                 本段会开口或有动作的其它角色，各自的设定要点是（队友看盘面的队友档，场景人物看场景切片的人物全档——性格/身份/声线/种族年龄口径）：
                 本段正文如何体现这些设定——主角与每个出场角色的措辞、动作习惯、他人对其身份的反应，至少各落实一处；外貌锚点/背景钩子/年龄段口径可选用：
                 有没有与设定冲突的写法（把长寿种族写老、让角色说不符合身份教养的话、性格无故漂移、遗忘既有关系或背景钩子），有则先改再落笔：`,sensitivity:"folded",resident:!0,materials:["characterBaseline"]},{tag:"tool_plan",label:"工具规划",prompt:`目前有哪些可用的工具：
                 本段是否需要动用引擎工具，逐个点名要用哪个、为什么用它：`,sensitivity:"visible",resident:!0,commitment:!0},{tag:"consequence",label:"剧情规划",prompt:`战役下一个里程碑节点是：
                 目前的中短期剧情走向是：
                 若本段为亲密/nsfw场景且玩家没有表达收尾意愿：本步只写"暂缓推进"并跳过下面两问——不安排新冲突、诱饵或里程碑引导去打断场景，让它自然延续到玩家收尾。
                 为了自然地将玩家引向下一个里程碑，当前回合我需要落实：
                 中短期内我应当如何利用PC的动机，设计合理的剧情冲突或诱饵，从而引导他们前往下一个里程碑节点：
                `,sensitivity:"folded",resident:!0},{tag:"scene_gear",label:"场景档位",prompt:`本段剧情属于什么类型：（日常／探索／社交／nsfw／大战／余波）。
                 这个类型的剧情适合采用怎样的叙事节奏：`,sensitivity:"folded",resident:!0},{tag:"npc_wants",label:"NPC 动机",prompt:`在场的其它角色有哪些（队友也算）：
                 这些角色各自想要什么、此刻心里有什么打算：
                 其中谁会在这一轮主动做点什么（推进自己的事、提出主张、插话、反对、离开、表态），具体是什么——主动不等于抢戏，一两人有动作即可，无事可做的不硬安排；绝不替玩家决定或代玩家行动：
                 谁已久未开口（看「在场发言」，没有这一行就写"无账可查"）：若久未发声者此刻有立场或情绪可表达，让 TA 这轮自然冒泡；无话可说的不硬塞台词。`,sensitivity:"folded",resident:!1,trigger:{signal:"namedNpcPresent",slot:"scene"},materials:["panel"]},{tag:"companion_bond",label:"队友好感",prompt:`这一段玩家的言行，在队里谁会真的往心里去（对照盘面队友档的看重/厌恶、既定关系与当前档位）：
                 触动的是好感还是反感、缘由一句话——只是寒暄、或与谁都无关，写"无"，不硬凑：
                 确有触动就在 tool_plan 点名好感工具并给 memberId（用队友档那个 id，别用名字）与 delta（限 ±2）：
                 关系档位（疏离/熟识/朋友/信赖/亲密）与既定关系（伙伴/挚友/恋人…）是两码事，都由引擎维护——你只落好感数值，绝不在正文里替玩家宣布关系升级：`,sensitivity:"folded",resident:!1,trigger:{signal:"companionPresent",slot:"scene"},materials:["panel"],commitment:!0},{tag:"secrecy",label:"剧情铺垫",prompt:`本场景你知道而玩家未揭示的、以及 NPC 不会说出口的，逐件点名：
                 本段对它们只可铺垫的分寸是：
                 若先前铺垫与已锁定的事实不符，让叙事自然转弯，绝不更换事实本身。`,sensitivity:"folded",resident:!1,trigger:{signal:"unrevealedEntities",slot:"scene",cooldown:2},materials:["sceneSlice"]},{tag:"orphan_recap",label:"补叙",prompt:`上次已生效但没来得及叙述的结果是：
                 先把它自然织进正文，若它与玩家本轮的打算相抵，让它先说话，再接玩家的输入。`,sensitivity:"visible",resident:!1,trigger:{signal:"orphanPending",slot:"exempt"},materials:["reminders"]},{tag:"fact_check",label:"事实承接",prompt:`玩家话里夹带的既成事实逐条溯源，事实是：
                 玩家可见的历史或公开盘面里的出处是（DM 侧档案不是出处，涉密只写"无公开出处"）：
                 无出处的不落为事实——角色可以搭话，世界不改账；玩家说的若是自己角色的过去，先当真、再记档。`,sensitivity:"visible",resident:!1,trigger:{signal:"inputAssertion",slot:"counted",priority:1},materials:["panel"]},{tag:"register",label:"登记",prompt:`上段正文新出现的名字、关系或事实是：
                玩家若已对它表现出兴趣，宁转正勿贬为龙套；
                要留就登记在案，不留则保持一次性龙套的分量。`,sensitivity:"folded",resident:!1,trigger:{signal:"registerNudge",slot:"counted",priority:2},materials:["reminders"]},{tag:"pace_and_world",label:"节奏推进",prompt:`场面在推进还是在打转：
                 如果在打转我该如何规划叙事推动剧情发展（如果是nsfw场景允许暂停剧情推动）：`,sensitivity:"folded",resident:!1,trigger:{signal:"paceNudge",slot:"counted",cooldown:2,priority:4},materials:["panel"]},{tag:"behind_the_world",label:"幕后世界",prompt:`幕后正在推进的计划有哪些（看【幕后密件】）：
                 最近的幕后变化在玩家可感知的世界面上留下什么痕迹（一道拖痕/一声远响/一条传言/某人不在原处）：
                 本段把哪个痕迹自然织进正文——只铺垫痕迹，不点破计划本身；玩家已亲眼撞上的部分才可明写。`,sensitivity:"folded",resident:!1,trigger:{signal:"agendaNews",slot:"counted",cooldown:2,priority:5},materials:["covertBrief"]},{tag:"retro",label:"纠错承接",prompt:`引擎在上一段记下的问题是：
                这段如何避免再犯：`,sensitivity:"visible",resident:!1,trigger:{signal:"retroFindings",slot:"counted",priority:3},materials:["reminders"]},{tag:"nsfw_scene",label:"nsfw",prompt:`本轮是否为亲密/性爱剧情（与场景定档一致）？若不是，写"不适用"并跳过本步其余全部内容。
若是，先逐条规划再落笔：
【定档】本段是温和档（感情主导/初次/试探，默认）还是狂野档；
【进度】当前进行到哪个阶段（前戏铺垫→爱抚升级→进入→节奏变化→高潮边缘→高潮→余韵），本段只推进一小步、不跳步：
        插入后已过几次发言；少于三次严禁高潮/射精，高潮必须由持续刺激累积达成，先铺垫呼吸/心率/肌肉收缩的渐进变化，严禁瞬间高潮与夸张敏感度：
【防重复】上一段用过的动作、体位、身体部位重点、台词句式各是什么；本段至少换新一样（动作组合/体位/速度频率/地点/主导权），亲吻/舔舐/吸吮/爱抚/揉捏与插入交替结合，不复读上一段写法：
【细节】点名本段三处具体细节，三桶各取至少一处——感官桶（视/听/嗅/触/温度）、生理桶（交合处/性征/体液/肌肉反应）、心理桶（羞耻/渴望/依恋/占有欲）：
【角色声线】台词露骨度必须与角色的性经验匹配，角色性经验如果不明确可以参考年龄推测。列出在场角色的年龄：
        分别列出在场角色的性经验是什么档次：
        无经验/生涩者：话少、断续、羞于启齿，不掌握粗俗词汇，至多笨拙学舌或被引导着说，靠生理反应与神态表达而非熟练淫语；绝不让处女/新手熟练说出骚穴一类的老手词。
        有经验/主动者：按其性格放开，淫语是欲望的直白表达而非谩骂（粗言辱骂仅限狂野档且玩家要求）。
        NPC 按自己的性格主动做点什么，不只被动承受；亲密中角色仍是他们自己，绝不 OOC：
【呼应】玩家上一条输入做了/说了什么，本段开头如何直接回应它：
【收尾】玩家是否表达收尾意愿：
       高潮完成后写余韵（喘息平复/清理/依偎/枕边对话），不立刻切回主线：
【硬约束】严禁角色无故变粗暴/发狂/夸张化，不刻意夸大负面情绪；任何档绝不出现身体反弓成虾米/表情狰狞/穿云裂石的尖叫；温和档保持温和与感情交流，绝不出现撕裂感/尖叫/痉挛/脱力/晕倒等狂野描写；除非玩家要求不品尝体液。

【其它】  衣物合理穿脱不撕毁，目前角色衣着是什么：
         角色无生育打算则做好避孕，目前是否有生育打算：

【文风与用词】叙述层性器官与性行为直写：乳房/小穴/阴道/乳头/阴蒂/阴茎/奶子/奶尖/浓精/鸡巴/肉穴/肉棒/屌等，严禁肉刃/甬道/密林/泥泞不堪等含糊代称，严禁研磨/画圈/搔刮/数盘扣/充满惩罚性与占有欲等八股动作与套话；
【八股审计】点名的句式与词一律换新表达——但角色台词的用词只能从该角色声线取（叙述者可直白，角色只说他会说的话）；重点笔墨放在交合处与性征，动作完整且色情地写出；淫语的量随档位与角色浮动，温和档以感官与感情为主、直白词点缀，狂野档才全量放开。`,sensitivity:"folded",resident:!1,trigger:{signal:"nsfwEnabled",slot:"scene"}},{tag:"preference",label:"桌面偏好",prompt:`玩家之前明说过想要什么：
                这段哪里可以满足它：`,sensitivity:"folded",resident:!1,trigger:{signal:"tableConsensus",slot:"counted",cooldown:5,priority:5},materials:["panel"],pending:!0},{tag:"closing",label:"确认收束",prompt:`核对 tool_plan：点名的工具都真实调用了吗？
        按下列分流收束——
        有检定/豁免：闭合思考，**先写正文**——把演出推到动作发生那一刻（游说的说辞要真的写出来、撬锁的手要真的伸过去），在悬念顶点停笔，再发起检定调用；严禁一个字正文都没写就直接扔出检定，玩家不该在读到任何铺垫之前先看见骰盘。
        无工具：闭合思考，直接落笔正文。
        有其它工具（查询/记账/揭示/推进场景/开战等）：闭合思考后先不写正文，立即发起这些调用；等回执到了，在下一段思考里消化结果、补完规划，再落笔正文。
        其它工具与检定并存：先调其它工具（不写正文），回执消化后按检定分流——先演出到停笔点、再发起检定。
（对白独立成行写成 名字：「台词」，心声写 名字（心声）：「…」；不要把台词嵌进散文段。）`,sensitivity:"visible",resident:!0}],m=3;function y(t,i){return(t.materials??[]).every(n=>{var s;return((s=i.availableMaterials)==null?void 0:s[n])===!0})}function h(t,i){var s,e;const r=((s=t.trigger)==null?void 0:s.cooldown)??0;if(r<=0)return!0;const n=(e=i.utterancesSinceLast)==null?void 0:e[t.tag];return n===void 0||n>=r}function S(t={}){const r=(t.registry??v).filter(e=>{var l;return e.pending||!y(e,t)?!1:e.resident?!0:!e.trigger||((l=t.signals)==null?void 0:l[e.trigger.signal])!==!0?!1:h(e,t)}),n=r.filter(e=>{var l;return!e.resident&&((l=e.trigger)==null?void 0:l.slot)==="counted"});if(n.length<=m)return r;const s=new Set([...n].sort((e,l)=>{var a,c;return(((a=e.trigger)==null?void 0:a.priority)??Number.MAX_SAFE_INTEGER)-(((c=l.trigger)==null?void 0:c.priority)??Number.MAX_SAFE_INTEGER)}).slice(0,m).map(e=>e.tag));return r.filter(e=>{var l;return e.resident||((l=e.trigger)==null?void 0:l.slot)!=="counted"||s.has(e.tag)})}function N(t){return t.map(i=>`<${i.tag}>${i.prompt}</${i.tag}>`).join("")}const _=[{tag:"digest",label:"回执消化",prompt:"逐条写下刚才每个工具回执的结果（成败／关键数字），以回执为准不凭印象：",sensitivity:"visible"},{tag:"check_outcome",label:"检定承接",prompt:`本次检定的结果是：
成功会造成什么影响：`,sensitivity:"visible",when:"check_success"},{tag:"check_outcome",label:"检定承接",prompt:`本次检定的结果是：
失败会造成什么影响：`,sensitivity:"visible",when:"check_failure"},{tag:"replan",label:"续写校正",prompt:`这些结果是否改变了原定的剧情走向或停点，改在哪：
还有点名了但未调用、或需要补调的工具吗（没有写"无"，有就现在调用）：`,sensitivity:"folded"}];function R(t){return _.filter(i=>i.when===void 0?!0:i.when==="check_success"?t.checkOutcome==="success":t.checkOutcome==="failure").map(i=>({tag:i.tag,...i.label!==void 0?{label:i.label}:{},prompt:i.prompt,sensitivity:i.sensitivity,resident:!0}))}function k(t,i,r,n){const s=i.filter(a=>a.commitment).map(a=>a.tag);if(s.length===0)return[];const e=[];for(const a of s){const c=new RegExp(`<${a}>([\\s\\S]*?)</${a}>`,"g");let o;for(;(o=c.exec(t))!==null;)e.push(o[1])}if(e.length===0)return[];const l=e.join(`
`);return r.filter(a=>!n.has(a)&&new RegExp(`\\b${a}\\b`).test(l))}const d={first:300,resume:150},w=50,E=500;function C(t,i){const r=Number.isFinite(t)&&t>0?t:d.first,n=i.filter(s=>!s.resident).length;return Math.min(r+w*n,E)}function x(t,i,r,n,s){const e=r.filter(o=>o.trim().length>0),l=i.map(o=>{const g=new RegExp(`<${o.tag}>([\\s\\S]*?)</${o.tag}>`).exec(t);if(!g)return{tag:o.tag,sensitivity:o.sensitivity,missing:!0,text:"",hollow:!1};const p=g[1].trim(),u=e.length>0&&!e.some(f=>p.includes(f));return{tag:o.tag,sensitivity:o.sensitivity,missing:!1,text:p,hollow:u}}),a=b(t),c=s!==void 0&&Number.isFinite(s)&&s>0?s:d[n];return{steps:l,missingCount:l.filter(o=>o.missing).length,hollowCount:l.filter(o=>o.hollow).length,tokenEstimate:a,overTokenLimit:a>c}}function I(t,i){if(!t)return[];const r=new Map(i.map(n=>[n.tag,n.label??n.tag]));return[...new Set(t.steps.filter(n=>n.missing).map(n=>r.get(n.tag)??n.tag))]}function P(t,i){const r=[];let n=t;for(const e of i){const l=new RegExp(`<${e.tag}>([\\s\\S]*?)</${e.tag}>`),a=l.exec(n);a&&(r.push({tag:e.tag,sensitivity:e.sensitivity,text:a[1].trim()}),n=n.replace(l,""))}const s=n.replace(/<[^>]+>/g,"").trim();return s.length>0&&r.push({tag:null,sensitivity:"visible",text:s}),r}export{v as C,_ as R,R as a,N as b,C as c,x as d,k as f,I as m,S as p,P as t};
