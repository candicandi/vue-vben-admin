var z=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var D=Math.pow,T=(t,e,n)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,P=(t,e)=>{for(var n in e||(e={}))N.call(e,n)&&T(t,n,e[n]);if(R)for(var n of R(e))_.call(e,n)&&T(t,n,e[n]);return t},E=(t,e)=>J(t,Q(e));var F=(t,e)=>{var n={};for(var s in t)N.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&R)for(var s of R(t))e.indexOf(s)<0&&_.call(t,s)&&(n[s]=t[s]);return n};var S=(t,e,n)=>(T(t,typeof e!="symbol"?e+"":e,n),n);var U=(t,e,n)=>new Promise((s,r)=>{var o=c=>{try{i(n.next(c))}catch(f){r(f)}},u=c=>{try{i(n.throw(c))}catch(f){r(f)}},i=c=>c.done?s(c.value):Promise.resolve(c.value).then(o,u);i((n=n.apply(t,e)).next())});import{f as v,w as x,u as w,h as B,b as y,c as X,r as Y,o as Z,I as G}from"./vue-COhTiP8A.js";import{ab as W,bf as k}from"./antd-5AEjVWAR.js";const V=(t,{manual:e,ready:n=!0,defaultParams:s=[],refreshDeps:r=[],refreshDepsAction:o})=>{const u=v(!1);return x(()=>w(n),i=>{!w(e)&&i&&(u.value=!0,t.run(...s))}),r.length&&x(r,()=>{u.value||e||(o?o():t.refresh())}),{onBefore:()=>{if(!w(n))return{stopNow:!0}}}};V.onInit=({ready:t=!0,manual:e})=>({loading:!w(e)&&w(t)});const K=V,b=new Map,I=(t,e,n)=>{const s=b.get(t);s!=null&&s.timer&&clearTimeout(s.timer);let r;e>-1&&(r=setTimeout(()=>{b.delete(t)},e)),b.set(t,E(P({},n),{timer:r}))},ee=t=>b.get(t),Te=t=>{t?(Array.isArray(t)?t:[t]).forEach(n=>b.delete(n)):b.clear()},$=new Map,te=t=>$.get(t),ne=(t,e)=>{$.set(t,e),e.then(n=>($.delete(t),n)).catch(()=>{$.delete(t)})},h={},se=(t,e)=>{h[t]&&h[t].forEach(n=>n(e))},H=(t,e)=>(h[t]||(h[t]=[]),h[t].push(e),function(){const s=h[t].indexOf(e);h[t].splice(s,1)}),ie=(t,{cacheKey:e,cacheTime:n=5*60*1e3,staleTime:s=0,setCache:r,getCache:o})=>{const u=v(),i=v(),c=(a,l)=>{r?r(l):I(a,n,l),se(a,l.data)},f=(a,l=[])=>o?o(l):ee(a);return B(()=>{if(!e)return;const a=f(e);a&&Object.hasOwnProperty.call(a,"data")&&(t.state.data=a.data,t.state.params=a.params,(s===-1||new Date().getTime()-a.time<=s)&&(t.state.loading=!1)),u.value=H(e,l=>{t.setState({data:l})})}),y(()=>{var a;(a=u.value)==null||a.call(u)}),e?{onBefore:a=>{const l=f(e,a);return!l||!Object.hasOwnProperty.call(l,"data")?{}:s===-1||new Date().getTime()-l.time<=s?{loading:!1,data:l==null?void 0:l.data,error:void 0,returnNow:!0}:{data:l==null?void 0:l.data,error:void 0}},onRequest:(a,l)=>{let d=te(e);return d&&d!==i.value?{servicePromise:d}:(d=a(...l),i.value=d,ne(e,d),{servicePromise:d})},onSuccess:(a,l)=>{var d;e&&((d=u.value)==null||d.call(u),c(e,{data:a,params:l,time:new Date().getTime()}),u.value=H(e,O=>{t.setState({data:O})}))},onMutate:a=>{var l;e&&((l=u.value)==null||l.call(u),c(e,{data:a,params:t.state.params,time:new Date().getTime()}),u.value=H(e,d=>{t.setState({data:d})}))}}:{}},re=ie,oe=(t,{debounceWait:e,debounceLeading:n,debounceTrailing:s,debounceMaxWait:r})=>{const o=v(),u=X(()=>{const i={};return n!==void 0&&(i.leading=n),s!==void 0&&(i.trailing=s),r!==void 0&&(i.maxWait=r),i});return B(()=>{if(e){const i=t.runAsync.bind(t);return o.value=W(c=>{c()},e,u.value),t.runAsync=(...c)=>new Promise((f,a)=>{var l;(l=o.value)==null||l.call(o,()=>{i(...c).then(f).catch(a)})}),()=>{var c;(c=o.value)==null||c.cancel(),t.runAsync=i}}}),e?{onCancel:()=>{var i;(i=o.value)==null||i.cancel()}}:{}},ue=oe,ae=(t,{loadingDelay:e,ready:n})=>{const s=v();if(!e)return{};const r=()=>{s.value&&clearTimeout(s.value)};return{onBefore:()=>(r(),w(n)!==!1&&(s.value=setTimeout(()=>{t.setState({loading:!0})},e)),{loading:!1}),onFinally:()=>{r()},onCancel:()=>{r()}}},le=ae,C=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function j(){return C?document.visibilityState!=="hidden":!0}const p=[];if(C){const t=()=>{if(j())for(let e=0;e<p.length;e++){const n=p[e];n()}};window.addEventListener("visibilitychange",t,!1)}function ce(t){return p.push(t),function(){const n=p.indexOf(t);p.splice(n,1)}}const fe=(t,{pollingInterval:e,pollingWhenHidden:n=!0,pollingErrorRetryCount:s=-1})=>{const r=v(),o=v(),u=v(0),i=()=>{var c;r.value&&clearTimeout(r.value),(c=o.value)==null||c.call(o)};return x(()=>e,()=>{e||i()}),e?{onBefore:()=>{i()},onError:()=>{u.value+=1},onSuccess:()=>{u.value=0},onFinally:()=>{s===-1||s!==-1&&u.value<=s?r.value=setTimeout(()=>{!n&&!j()?o.value=ce(()=>{t.refresh()}):t.refresh()},e):u.value=0},onCancel:()=>{i()}}:{}},de=fe;function ve(t,e){let n=!1;return(...s)=>{n||(n=!0,t(...s),setTimeout(()=>{n=!1},e))}}function ge(){return C&&typeof navigator.onLine!="undefined"?navigator.onLine:!0}const A=[];if(C){const t=()=>{if(!(!j()||!ge()))for(let e=0;e<A.length;e++){const n=A[e];n()}};window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1)}function he(t){return A.push(t),function(){const n=A.indexOf(t);n>-1&&A.splice(n,1)}}const me=(t,{refreshOnWindowFocus:e,focusTimespan:n=5e3})=>{const s=v(),r=()=>{var o;(o=s.value)==null||o.call(s)};return B(()=>{if(e){const o=ve(t.refresh.bind(t),n);s.value=he(()=>{o()})}return()=>{r()}}),y(()=>{r()}),{}},Pe=me,we=(t,{retryInterval:e,retryCount:n})=>{const s=v(),r=v(0),o=v(!1);return n?{onBefore:()=>{o.value||(r.value=0),o.value=!1,s.value&&clearTimeout(s.value)},onSuccess:()=>{r.value=0},onError:()=>{if(r.value+=1,n===-1||r.value<=n){const u=e!=null?e:Math.min(1e3*D(2,r.value),3e4);s.value=setTimeout(()=>{o.value=!0,t.refresh()},u)}else r.value=0},onCancel:()=>{r.value=0,s.value&&clearTimeout(s.value)}}:{}},be=we,pe=(t,{throttleWait:e,throttleLeading:n,throttleTrailing:s})=>{const r=v(),o={};return n!==void 0&&(o.leading=n),s!==void 0&&(o.trailing=s),B(()=>{if(e){const u=t.runAsync.bind(t);return r.value=k(i=>{i()},e,o),t.runAsync=(...i)=>new Promise((c,f)=>{var a;(a=r.value)==null||a.call(r,()=>{u(...i).then(c).catch(f)})}),()=>{var i;t.runAsync=u,(i=r.value)==null||i.cancel()}}}),e?{onCancel:()=>{var u;(u=r.value)==null||u.cancel()}}:{}},Ae=pe,Oe=t=>typeof t=="function";class Re{constructor(e,n,s,r={}){S(this,"pluginImpls",[]);S(this,"count",0);S(this,"state",Y({loading:!1,params:void 0,data:void 0,error:void 0}));this.serviceRef=e,this.options=n,this.subscribe=s,this.initState=r,this.setState(P({loading:!n.manual},r))}setState(e={}){Object.assign(this.state,e),this.subscribe()}runPluginHandler(e,...n){const s=this.pluginImpls.map(r=>{var o;return(o=r[e])==null?void 0:o.call(r,...n)}).filter(Boolean);return Object.assign({},...s)}runAsync(...e){return U(this,null,function*(){var i,c,f,a,l,d,O,L,M,q;this.count+=1;const n=this.count,u=this.runPluginHandler("onBefore",e),{stopNow:s=!1,returnNow:r=!1}=u,o=F(u,["stopNow","returnNow"]);if(s)return new Promise(()=>{});if(this.setState(P({loading:!0,params:e},o)),r)return Promise.resolve(o.data);(c=(i=this.options).onBefore)==null||c.call(i,e);try{let{servicePromise:g}=this.runPluginHandler("onRequest",this.serviceRef,e);g||(g=this.serviceRef(...e));const m=yield g;return n!==this.count?new Promise(()=>{}):(this.setState({data:m,error:void 0,loading:!1}),(a=(f=this.options).onSuccess)==null||a.call(f,m,e),this.runPluginHandler("onSuccess",m,e),(d=(l=this.options).onFinally)==null||d.call(l,e,m,void 0),n===this.count&&this.runPluginHandler("onFinally",e,m,void 0),m)}catch(g){if(n!==this.count)return new Promise(()=>{});throw this.setState({error:g,loading:!1}),(L=(O=this.options).onError)==null||L.call(O,g,e),this.runPluginHandler("onError",g,e),(q=(M=this.options).onFinally)==null||q.call(M,e,void 0,g),n===this.count&&this.runPluginHandler("onFinally",e,void 0,g),g}})}run(...e){this.runAsync(...e).catch(n=>{this.options.onError})}cancel(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")}refresh(){this.run(...this.state.params||[])}refreshAsync(){return this.runAsync(...this.state.params||[])}mutate(e){const n=Oe(e)?e(this.state.data):e;this.runPluginHandler("onMutate",n),this.setState({data:n})}}function Se(t,e={},n=[]){const c=e,{manual:s=!1}=c,r=F(c,["manual"]),o=P({manual:s},r),u=n.map(f=>{var a;return(a=f==null?void 0:f.onInit)==null?void 0:a.call(f,o)}).filter(Boolean),i=new Re(t,o,()=>{},Object.assign({},...u));return i.options=o,i.pluginImpls=n.map(f=>f(i,o)),Z(()=>{if(!s){const f=i.state.params||e.defaultParams||[];i.run(...f)}}),y(()=>{i.cancel()}),E(P({},G(i.state)),{cancel:i.cancel.bind(i),mutate:i.mutate.bind(i),refresh:i.refresh.bind(i),refreshAsync:i.refreshAsync.bind(i),run:i.run.bind(i),runAsync:i.runAsync.bind(i)})}function Ee(t,e,n){return Se(t,e,[...n||[],ue,le,de,Pe,Ae,K,re,be])}export{Te as c,Ee as u};
