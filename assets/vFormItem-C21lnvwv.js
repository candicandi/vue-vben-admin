var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(e,r,o)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&a(e,o,r[o]);if(s)for(var o of s(r))h.call(r,o)&&a(e,o,r[o]);return e};import{_ as l}from"./FormItem.vue_vue_type_script_lang-CO_BSU02.js";import{d as _,c as p,u as n,a7 as $,Z as P,a8 as g,ad as j,aa as C,a9 as F,ae as I,aj as b,ak as k}from"./vue-COhTiP8A.js";import{c as y}from"./entry/index-DYss8nJl-1712909741453.js";import"./componentMap-B-jlHwoS.js";import"./useFormItem-CieOCyoi.js";import"./antd-5AEjVWAR.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-D6oHkgFe.js";import"./index-Cq3LgCzk.js";import"./useWindowSizeFn-Bt34gp9L.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BHhMFFph.js";import"./download-BnvLMGlU.js";import"./base64Conver-bBv-IO2K.js";import"./index-4hy907AO.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-C2F9ykZY.js";import"./copyTextToClipboard-D-nRS8bn.js";import"./index-BP3eS7ju.js";import"./index-BX-4oRtE.js";import"./helper-BfbXSzOR.js";const O=_({name:"VFormItem",components:{FormItem:l},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(e){const r=p(()=>t({},n(e.schema))),o=p(()=>t({},n(e.formConfig)));return{schemaNew:r,getProps:o}}});function v(e,r,o,c,w,q){const i=$("FormItem");return P(),g(i,{schema:e.schemaNew,formProps:e.getProps},j({_:2},[C(Object.keys(e.$slots),m=>({name:m,fn:F(f=>[I(e.$slots,m,b(k(f||{})))])}))]),1032,["schema","formProps"])}const W=y(O,[["render",v]]);export{W as default};
