import{_ as u,r,l as v,m as b,o as c,c as i,a as s,e as h,t as m,d as f,n as g,p as x,j as E,F as S,q as y,f as C,s as N}from"./index-aa35d99a.js";const _=e=>(x("data-v-df722376"),e=e(),E(),e),I={class:"member-name"},T=_(()=>s("i",{class:"fa-solid fa-user-large"},null,-1)),k=_(()=>s("hr",null,null,-1)),D={class:"member-informations"},V={class:"member-description"},w={__name:"TeamCard",props:{memberName:{type:String,default:"{ Nome }"},memberDescription:{type:String,default:"{ Descrição }"}},setup(e){const t=r(!1),o=r(!1),n=d=>{t.value=d.matches},a=window.matchMedia("(max-width: 668px)");a.addEventListener("change",n),n(a),v(()=>{a.removeEventListener("change",n)});function l(){o.value=!o.value}const p=b(()=>({"team-card":!0,"mobile-card":t.value,"card-expanded":o.value}));return(d,U)=>(c(),i("div",{class:g(p.value)},[s("p",I,[T,h(" - "+m(e.memberName)+" ",1),t.value?(c(),i("button",{key:0,onClick:l})):f("",!0)]),k,s("div",D,[s("p",V,m(e.memberDescription),1)])],2))}},A=u(w,[["__scopeId","data-v-df722376"]]);const B={class:"container"},F=C('<section class="page__title" data-v-2600c2a5><h1 data-v-2600c2a5>Sobre</h1></section><hr data-v-2600c2a5><h3 class="page__subTittle" data-v-2600c2a5>Descrição da aplicação</h3><section class="page__content" data-v-2600c2a5><p data-v-2600c2a5> O <span class="page__destaque" data-v-2600c2a5>Pet Safe</span> tem como objetivo auxiliar os tutores a entenderem e administrarem os primeiros socorros básicos em casos de intoxicação, envenenamento, desmaios, vômitos, febres, dores e traumas, até que o atendimento veterinário profissional possa ser obtido. O sistema não substitui a importância de buscar ajuda de um veterinário, mas atua como uma ferramenta para instruir os responsáveis sobre como agir em situações básicas. </p></section><h3 class="page__subTittle" data-v-2600c2a5>Criadores</h3>',5),M={class:"page__content cards"},P={__name:"AboutPage",setup(e){const t=[{id:1,name:"Eduardo Castro",description:"Estudante do curso de graduação ciência da computação na Universidade Estácio de Sá."},{id:2,name:"Felipe Fiusa",description:"Estudante do curso de graduação ciência da computação na Universidade Estácio de Sá."},{id:3,name:"Matheus Nelson",description:"Estudante do curso de graduação ciência da computação na Universidade Estácio de Sá."}];return(o,n)=>(c(),i("div",B,[F,s("section",M,[(c(),i(S,null,y(t,a=>N(A,{key:a.id,"member-name":a.name,"member-description":a.description},null,8,["member-name","member-description"])),64))])]))}},q=u(P,[["__scopeId","data-v-2600c2a5"]]);export{q as default};