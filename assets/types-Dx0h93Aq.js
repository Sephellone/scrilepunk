import{d as r,_ as a,o as t,a as o,e as s,s as i,n as c,c as u,t as h}from"./index-CfGYFt7J.js";const $=r({name:"BaseDescription",props:{showLine:{type:Boolean}}}),f={class:"description"},m={class:"description__subtitle"};function B(e,n,d,l,_,p){return t(),o("div",f,[s("div",m,[i(e.$slots,"subtitle",{},void 0,!0)]),s("div",{class:c(["description__default",{__line:e.showLine}])},[i(e.$slots,"default",{},void 0,!0)],2)])}const A=a($,[["render",B],["__scopeId","data-v-a19e65d3"]]),v=r({name:"BaseTitle",props:{title:{type:String,required:!0},icon:{type:String,required:!0},red:{type:Boolean},green:{type:Boolean},blue:{type:Boolean}},setup(e){return{iconSrc:u(()=>`/img/icons/icon-${e.icon}.svg#icon`)}}}),S={class:"title__icon",width:"36px",height:"36px"},g=["href"],E={class:"title__text"};function L(e,n,d,l,_,p){return t(),o("div",{class:c(["title",{__red:e.red,__green:e.green,__blue:e.blue}])},[(t(),o("svg",S,[s("use",{href:e.iconSrc},null,8,g)])),s("h1",E,h(e.title),1)],2)}const C=a(v,[["render",L],["__scopeId","data-v-526d2297"]]);var N=(e=>(e.DRONE="drone",e.HEAD="head",e.MACHINE_LINES="machine-lines",e.PHONE="phone",e.SCHEMA="schema",e.SCULL="scull",e.TRANSLATE="translate",e))(N||{});export{C as B,N as I,A as a};