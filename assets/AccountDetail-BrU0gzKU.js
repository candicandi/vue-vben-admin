import{d as A,ao as C,f as m,a7 as K,Z as n,a8 as N,a9 as e,k as t,G as p,u as r,$ as c,_ as f,F as y,aa as v,a0 as _,ab as k}from"./vue-COhTiP8A.js";import{P as V}from"./index-BeiblPQR.js";import{aO as D,aP as w}from"./entry/index-DYss8nJl-1712909741453.js";import{a0 as b}from"./antd-5AEjVWAR.js";import"./useContentViewHeight-6oIm5cdW.js";import"./useWindowSizeFn-Bt34gp9L.js";import"./onMountedOrActivated-GpUdBAv_.js";const F={class:"pt-4 m-4 desc-wrap"},W=A({name:"AccountDetail",__name:"AccountDetail",setup(G){var i;const g=b,u=b.TabPane,T=C(),B=D(),o=m((i=T.params)==null?void 0:i.id),s=m("detail"),{setTitle:x}=w();x("详情：用户"+o.value);function P(){B("/system/account")}return(h,l)=>{const d=K("a-button");return n(),N(r(V),{title:"用户"+o.value+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:P},{extra:e(()=>[t(d,{type:"primary",danger:""},{default:e(()=>[p(" 禁用账号 ")]),_:1}),t(d,{type:"primary"},{default:e(()=>[p(" 修改密码 ")]),_:1})]),footer:e(()=>[t(r(g),{"default-active-key":"detail",activeKey:s.value,"onUpdate:activeKey":l[0]||(l[0]=a=>s.value=a)},{default:e(()=>[t(r(u),{key:"detail",tab:"用户资料"}),t(r(u),{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:e(()=>[c("div",F,[s.value=="detail"?(n(),f(y,{key:0},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"资料Tab",1)),64)):k("",!0),s.value=="logs"?(n(),f(y,{key:1},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"操作日志Tab",1)),64)):k("",!0)])]),_:1},8,["title"])}}});export{W as default};
