import{createSignal as c,splitProps as m,sharedConfig as a,onMount as s,createMemo as p,untrack as d}from"solid-js";import{isServer as k}from"solid-js/web";function C(l){if(k)return t=>t.fallback;const[n,u]=c();return l().then(t=>u(()=>t.default)),t=>{let e,r;const[,o]=m(t,["fallback"]);if((e=n())&&!a.context)return e(o);const[f,i]=c(!a.context);return s(()=>i(!0)),p(()=>(e=n(),r=f(),d(()=>e&&r?e(o):t.fallback)))}}export{C as c};