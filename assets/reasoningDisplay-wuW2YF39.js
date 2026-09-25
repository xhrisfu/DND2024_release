import{r as s}from"./runtimeStorage-DhtagKFa.js";import{C as d,R as E}from"./cotSteps-1DT1MFob.js";import{a0 as g}from"./vendor-core-D-WDeQ4E.js";const i="dnd-reasoning-reveal-folded";function R(){try{return typeof s<"u"&&s.getItem(i)==="1"}catch{return!1}}const _=g(R());function v(e){_.value=e;try{e?s.setItem(i,"1"):s.removeItem(i)}catch{}}const n=Object.fromEntries([...d,...E].filter(e=>e.label).map(e=>[e.tag,e.label])),m=Object.fromEntries([...d,...E].map(e=>[e.tag,e.sensitivity])),p="〔内幕推演已折叠——避免剧透〕";function A(e){let t=String(e||"");const c=_.value;t=t.replace(/<([A-Za-z0-9_一-鿿]+)\s*>([\s\S]*?)<\/\1\s*>/g,(l,a,o)=>{const f=n[a]?`
【${n[a]}】`:`
`;return!c&&m[a]==="folded"?`${f}${p}
`:`${f}${o}
`});const r=/<([A-Za-z0-9_一-鿿]+)\s*>/.exec(t);if(!c&&r&&m[r[1]]==="folded"){const l=n[r[1]]?`
【${n[r[1]]}】`:`
`;t=t.slice(0,r.index)+`${l}〔推演中…〕`}return t.replace(/<(\/?)([A-Za-z0-9_一-鿿]+)\s*>/g,(l,a,o)=>a?`
`:n[o]?`
【${n[o]}】`:`
`).replace(/思考结束[，,]\s*闭合思维链。?/g,"").replace(/[ \t]*\n[ \t]*/g,`
`).replace(/\n{2,}/g,`
`).trim()}export{A as f,_ as r,v as s};
