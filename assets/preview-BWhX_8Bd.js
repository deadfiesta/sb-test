const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-CMnRUl9W.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as O}from"./iframe-DzK1qstD.js";import{e as R}from"./index-BbMcCLeF.js";const{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,{global:S}=__STORYBOOK_MODULE_GLOBAL__;var u="storybook/a11y",T=`${u}/result`,w=`${u}/request`,L=`${u}/running`,V=`${u}/error`,x=`${u}/manual`,d={RESULT:T,REQUEST:w,RUNNING:L,ERROR:V,MANUAL:x},D="a11y-test",{document:E}=S,_=A.getChannel(),v={config:{},options:{}},I=["region"],y=[],m=!1,N=async()=>{if(y.length===0){m=!1;return}m=!0;let e=y.shift();e&&await e(),N()},g=async(e=v)=>{let{default:s}=await O(async()=>{const{default:n}=await import("./axe-CMnRUl9W.js").then(o=>o.a);return{default:n}},__vite__mapDeps([0,1]),import.meta.url),{element:i="body",config:r={},options:a={}}=e,l=E.querySelector(i)??E.body;if(!l)return;s.reset();let t={...r,rules:[...I.map(n=>({id:n,enabled:!1})),...(r==null?void 0:r.rules)??[]]};return s.configure(t),new Promise((n,o)=>{let f=async()=>{try{let c=await s.run(l,a);n(c)}catch(c){o(c)}};y.push(f),m||N()})};_.on(d.MANUAL,async(e,s=v)=>{try{let i=await g(s),r=JSON.parse(JSON.stringify(i));_.emit(d.RESULT,r,e)}catch(i){_.emit(d.ERROR,i)}});function h(){try{return!1}catch{return!1}}function U(){try{return!1}catch{return!1}}var p=!1,$=async({reporting:e,parameters:s,globals:i,tags:r})=>{let a=s.a11y,l=i.a11y;if((a==null?void 0:a.manual)!==!0&&(a==null?void 0:a.disable)!==!0&&(l==null?void 0:l.manual)!==!0){if(U()&&!r.includes(D))return;try{let t=await g(a);if(t){let n=((t==null?void 0:t.violations.length)??0)>0;if(e.addReport({type:"a11y",version:1,result:t,status:n?"failed":"passed"}),h()&&n){if(!p){let{toHaveNoViolations:o}=await O(async()=>{const{toHaveNoViolations:f}=await import("./matchers-57EZJSQE-oeXCqs4p.js");return{toHaveNoViolations:f}},[],import.meta.url);R.extend({toHaveNoViolations:o}),p=!0}R(t).toHaveNoViolations()}}}catch(t){if(e.addReport({type:"a11y",version:1,result:{error:t},status:"failed"}),h())throw t}}},P={a11y:{manual:!1}};export{$ as experimental_afterEach,P as initialGlobals};
