import{C as c}from"./index.f52972fd.js";import{g as v,h as E,i as I,r as i,o as B,c as g,a as s,b as a,s as u,e as n,w as o,p as D,f as y,_ as A}from"./index.0f539a17.js";const U=r=>(D("data-v-d0f116c6"),r=r(),y(),r),w={class:"app-container"},k={class:"app-container-inner"},N={style:{"margin-top":"40px","margin-bottom":"30px"}},S={class:"label"},R={class:"label"},T={class:"label"},h=U(()=>s("br",null,null,-1)),j={class:"label"},q={class:"label"},z={class:"label"},G={class:"label"},H=v({__name:"index",setup(r){const f=E();let l=I({startValInput:0,endValInput:9888,durationInput:2e3,decimals:1,prefix:"\u4EF7\u94B1\uFF1A",suffix:"\u5143",separator:","});const d=(b,e)=>{},C=()=>{f.value.start()},V=()=>{f.value.pauseResume()};return(b,e)=>{const m=i("el-input-number"),_=i("el-input"),F=i("el-button"),p=i("el-descriptions-item"),x=i("el-descriptions");return B(),g("div",w,[s("div",k,[a(c,{ref_key:"example",ref:f,class:"count-to","start-val":u(l).startValInput,"end-val":u(l).endValInput,duration:u(l).durationInput,decimals:u(l).decimals,prefix:u(l).prefix,suffix:u(l).suffix,autoplay:!0,separator:u(l).separator},null,8,["start-val","end-val","duration","decimals","prefix","suffix","separator"]),s("div",N,[s("label",S,[n("\u8D77\u59CB\u503C: "),a(m,{modelValue:u(l).startValInput,"onUpdate:modelValue":e[0]||(e[0]=t=>u(l).startValInput=t),onChange:e[1]||(e[1]=t=>d()),min:0,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),s("label",R,[n("\u6700\u7EC8\u503C: "),a(m,{modelValue:u(l).endValInput,"onUpdate:modelValue":e[2]||(e[2]=t=>u(l).endValInput=t),onChange:e[3]||(e[3]=t=>d()),min:1,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),s("label",T,[n("\u6301\u7EED\u65F6\u95F4: "),a(m,{modelValue:u(l).durationInput,"onUpdate:modelValue":e[4]||(e[4]=t=>u(l).durationInput=t),onChange:e[5]||(e[5]=t=>d()),min:1,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),h,s("label",j,[n("\u5C0F\u6570\u4F4D\u6570: "),a(m,{modelValue:u(l).decimals,"onUpdate:modelValue":e[6]||(e[6]=t=>u(l).decimals=t),onChange:e[7]||(e[7]=t=>d()),min:0,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),s("label",q,[n(" \u5206\u9694\u7B26:"),a(_,{modelValue:u(l).separator,"onUpdate:modelValue":e[8]||(e[8]=t=>u(l).separator=t),onChange:e[9]||(e[9]=t=>d()),style:{width:"100px","margin-left":"10px"}},null,8,["modelValue"])]),s("label",z,[n(" \u524D\u7F00:"),a(_,{modelValue:u(l).prefix,"onUpdate:modelValue":e[10]||(e[10]=t=>u(l).prefix=t),onChange:e[11]||(e[11]=t=>d()),style:{width:"100px","margin-left":"10px"}},null,8,["modelValue"])]),s("label",G,[n("\u540E\u7F00: "),a(_,{modelValue:u(l).suffix,"onUpdate:modelValue":e[12]||(e[12]=t=>u(l).suffix=t),onChange:e[13]||(e[13]=t=>d()),style:{width:"100px","margin-left":"10px"}},null,8,["modelValue"])]),a(F,{type:"primary",onClick:C},{default:o(()=>[n("\u5F00\u59CB")]),_:1}),a(F,{type:"danger",onClick:V},{default:o(()=>[n("\u6682\u505C/\u6062\u590D")]),_:1})]),a(x,{title:"\u914D\u7F6E\u9879 ",column:1,border:"",class:"descriptions"},{default:o(()=>[a(p,{label:"startValInput"},{default:o(()=>[n(" \u8D77\u59CB\u503C\uFF0C\u9ED8\u8BA4\u4E3A0 ")]),_:1}),a(p,{label:"endValInput"},{default:o(()=>[n(" \u6700\u7EC8\u503C\uFF0C\u9ED8\u8BA4\u4E3A2017 ")]),_:1}),a(p,{label:"durationInput"},{default:o(()=>[n(" \u6301\u7EED\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A3000 ")]),_:1}),a(p,{label:"decimals"},{default:o(()=>[n(" \u5C0F\u6570\u4F4D\u6570 ")]),_:1}),a(p,{label:"separator"},{default:o(()=>[n(" \u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A ',' ")]),_:1}),a(p,{label:"prefix"},{default:o(()=>[n(" \u524D\u7F00 ")]),_:1}),a(p,{label:"suffix"},{default:o(()=>[n(" \u540E\u7F00 ")]),_:1})]),_:1})])])}}});const L=A(H,[["__scopeId","data-v-d0f116c6"]]);export{L as default};
