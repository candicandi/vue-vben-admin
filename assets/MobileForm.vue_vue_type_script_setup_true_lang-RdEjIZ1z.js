var g=(p,l,s)=>new Promise((c,i)=>{var d=a=>{try{n(s.next(a))}catch(r){i(r)}},m=a=>{try{n(s.throw(a))}catch(r){i(r)}},n=a=>a.done?c(a.value):Promise.resolve(a.value).then(d,m);n((s=s.apply(p,l)).next())});import{C as B}from"./index-BP3eS7ju.js";import{u as F,a as I,b as L,L as S,_ as w}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-CXcK2OFL.js";import{h as z}from"./entry/index-DYss8nJl-1712909741453.js";import{a2 as _,E,B as k}from"./antd-5AEjVWAR.js";import{d as R,f as b,r as V,c as N,u as e,Z as D,_ as M,k as o,a9 as t,G as v,a0 as x,ab as U}from"./vue-COhTiP8A.js";const G={key:0},A=R({__name:"MobileForm",setup(p){const l=_.Item,{t:s}=z(),{handleBackLogin:c,getLoginState:i}=F(),{getFormRules:d}=I(),m=b(),n=b(!1),a=V({mobile:"",sms:""}),{validForm:r}=L(m),y=N(()=>e(i)===S.MOBILE);function C(){return g(this,null,function*(){yield r()})}return(h,u)=>y.value?(D(),M("div",G,[o(w,{class:"enter-x"}),o(e(_),{class:"p-4 enter-x",model:a,rules:e(d),ref_key:"formRef",ref:m},{default:t(()=>[o(e(l),{name:"mobile",class:"enter-x"},{default:t(()=>[o(e(E),{size:"large",value:a.mobile,"onUpdate:value":u[0]||(u[0]=f=>a.mobile=f),placeholder:e(s)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(e(l),{name:"sms",class:"enter-x"},{default:t(()=>[o(e(B),{size:"large",class:"fix-auto-fill",value:a.sms,"onUpdate:value":u[1]||(u[1]=f=>a.sms=f),placeholder:e(s)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),o(e(l),{class:"enter-x"},{default:t(()=>[o(e(k),{type:"primary",size:"large",block:"",onClick:C,loading:n.value},{default:t(()=>[v(x(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"]),o(e(k),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:t(()=>[v(x(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])):U("",!0)}});export{A as _};
