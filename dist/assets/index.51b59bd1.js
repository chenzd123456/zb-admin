import{a as A}from"./exprotExcel.f0aa21de.js";import{g as B,h,r as a,o as t,c as o,a as b,b as n,w as u,e as C,F as i,D as x,j as p,_ as V}from"./index.0f539a17.js";import"./exceljs.min.566fd9a5.js";const N={class:"app-container"},z={class:"header"},j={class:"footer"},H=B({__name:"index",setup(I){const d=[];for(let l=0;l<10;l++)d.push({date:"2016-05-02",name:"\u738B\u4E94"+l,price:1+l,province:"\u4E0A\u6D77",admin:"admin",sex:l%2?1:0,checked:!0,id:l+1,age:0,city:"\u666E\u9640\u533A",address:"\u4E0A\u6D77\u5E02\u666E\u4E0A\u6D77",zip:200333});const _=[{name:"id",width:60,label:"\u5E8F\u53F7"},{name:"date",label:"\u65E5\u671F"},{name:"address",label:"\u5730\u5740"},{label:"\u914D\u9001\u4FE1\u606F",children:[{name:"province",label:"\u7701\u4EFD",width:130},{name:"city",label:"\u57CE\u5E02"},{name:"zip",label:"\u90AE\u7F16"}]}],c=h(""),E=h(d),w=()=>{A({column:_,data:d,filename:c.value||"\u5BFC\u51FA excel",autoWidth:!0})};return(l,m)=>{const f=a("el-input"),F=a("Download"),v=a("el-icon"),y=a("el-button"),s=a("el-table-column"),k=a("el-table");return t(),o("div",N,[b("div",z,[n(f,{modelValue:c.value,"onUpdate:modelValue":m[0]||(m[0]=e=>c.value=e),placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D",style:{width:"200px","margin-right":"10px"}},null,8,["modelValue"]),n(y,{onClick:w,type:"primary"},{default:u(()=>[n(v,{style:{"margin-right":"6px"}},{default:u(()=>[n(F)]),_:1}),C("\u5BFC\u51FA Excel ")]),_:1})]),b("div",j,[n(k,{data:E.value,style:{width:"100%"},border:""},{default:u(()=>[(t(),o(i,null,x(_,(e,D)=>(t(),o(i,{key:D},[e.children?(t(),p(s,{key:0,prop:e.name,label:e.label,width:e.width},{default:u(()=>[(t(!0),o(i,null,x(e.children,(r,g)=>(t(),p(s,{key:g,prop:r.name,label:r.label,width:r.width},null,8,["prop","label","width"]))),128))]),_:2},1032,["prop","label","width"])):(t(),p(s,{key:1,prop:e.name,label:e.label,width:e.width},null,8,["prop","label","width"]))],64))),64))]),_:1},8,["data"])])])}}});const U=V(H,[["__scopeId","data-v-ed38f37e"]]);export{U as default};
