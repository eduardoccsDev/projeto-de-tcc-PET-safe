import{_ as p,r as i,l as b,m as v,o as d,c as n,a as s,e as h,t as m,d as g,n as x,p as L,j as C,F as y,q as S,s as l,f as E,u as N}from"./index-959f6847.js";const _=e=>(L("data-v-ae581c2d"),e=e(),C(),e),A={class:"member-name"},I=_(()=>s("i",{class:"fa-solid fa-user-large"},null,-1)),T=_(()=>s("hr",null,null,-1)),k={class:"member-description"},D={__name:"TeamCard",props:{memberName:{type:String,default:"{ Nome }"},memberDescription:{type:String,default:"{ Descrição }"}},setup(e){const o=i(!1),t=i(!1),r=c=>{o.value=c.matches},a=window.matchMedia("(max-width: 668px)");a.addEventListener("change",r),r(a),b(()=>{a.removeEventListener("change",r)});function u(){t.value=!t.value}const f=v(()=>({"team-card":!0,"mobile-card":o.value,"card-expanded":t.value}));return(c,M)=>(d(),n("div",{class:x(f.value)},[s("p",A,[I,h(" - "+m(e.memberName)+" ",1),o.value?(d(),n("button",{key:0,onClick:u})):g("",!0)]),T,s("p",k,m(e.memberDescription),1)],2))}},V=p(D,[["__scopeId","data-v-ae581c2d"]]);const w={class:"container"},B=E('<section class="page__title" data-v-808fb0f8><h1 data-v-808fb0f8>Sobre</h1></section><hr data-v-808fb0f8><h3 class="page__subTittle" data-v-808fb0f8>Descrição da aplicação</h3><section class="page__content" data-v-808fb0f8><p data-v-808fb0f8>O <span class="page__destaque" data-v-808fb0f8>Pet Safe</span> tem como objetivo...</p></section><h3 class="page__subTittle" data-v-808fb0f8>Criadores</h3>',5),P={class:"page__content cards"},F={__name:"AboutPage",setup(e){const o=[{id:1,name:"Eduardo Castro",description:"Lorem ipsum dolor lorem Lorem ipsum dolor lorem Lorem ipsum dolor lorem"},{id:2,name:"Eduardo Castro",description:"Lorem ipsum dolor lorem Lorem ipsum dolor lorem Lorem ipsum dolor lorem"},{id:3,name:"Eduardo Castro",description:"Lorem ipsum dolor lorem Lorem ipsum dolor lorem Lorem ipsum dolor lorem"}];return(t,r)=>(d(),n("div",w,[B,s("section",P,[(d(),n(y,null,S(o,a=>l(V,{key:a.id,"member-name":a.name,"member-description":a.description},null,8,["member-name","member-description"])),64))]),l(N,{"have-icon":!0,icon:"fa-solid fa-user-nurse","alert-tittle":"Alerta fixo de teste","alert-text":"Lorem ipsum dolor lorem, lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"})]))}},j=p(F,[["__scopeId","data-v-808fb0f8"]]);export{j as default};