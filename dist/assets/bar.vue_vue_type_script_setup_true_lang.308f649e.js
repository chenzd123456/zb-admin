import{i as s}from"./index.df40fc31.js";import{g as o,x as r,o as c,c as d,y as l,z as h}from"./index.0f539a17.js";const m=["id"],g=o({__name:"bar",props:{className:{type:String,default:"chart"},config:{type:Object,default:()=>{}},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup(t){const a=t,n={grid:{top:10,left:"2%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{type:"category",data:["\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D","\u661F\u671F\u65E5"]},yAxis:{type:"value"},series:[{data:[150,230,150,80,70,110,130],type:"bar"}]};let e;const u=()=>{let i=s(document.getElementById(a.id));return i.setOption(n),i};return r(()=>{e=u(),window.addEventListener("resize",function(){e&&e.resize()})}),(i,p)=>(c(),d("div",{id:t.id,class:l(t.className),style:h({height:t.height,width:t.width})},null,14,m))}});export{g as _};
