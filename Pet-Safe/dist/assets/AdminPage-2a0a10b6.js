import{_ as x,r as h,o as l,c as r,a as e,F as k,q as U,h as m,e as u,t as v,w as n,v as _,i as V,p as C,j as w}from"./index-56c35e7b.js";const o=c=>(C("data-v-f6140fa1"),c=c(),w(),c),I={class:"container"},A=o(()=>e("section",{class:"page__title"},[e("h1",null,"Usuários cadastrados")],-1)),D=o(()=>e("hr",null,null,-1)),S={class:"page__content"},q={class:"accordion",id:"accordionExample"},P=["id"],$=["data-bs-target","aria-controls"],z=o(()=>e("i",{class:"fa-solid fa-user"},null,-1)),B=["id","aria-labelledby"],N={class:"accordion-body"},F=o(()=>e("label",{for:"nomeuser"},"Nome:",-1)),M=["disabled","onUpdate:modelValue"],R=o(()=>e("label",{for:"emailuser"},"E-mail:",-1)),T=["disabled","onUpdate:modelValue"],j=o(()=>e("label",{for:"addressuser"},"Endereço:",-1)),L=["disabled","onUpdate:modelValue"],G=o(()=>e("label",{for:"cepuser"},"CEP:",-1)),H=["disabled","onUpdate:modelValue"],J=o(()=>e("label",{for:"residenciauser"},"Residência:",-1)),K=["disabled","onUpdate:modelValue"],O=o(()=>e("option",{selected:"",disabled:"",value:""},"Selecione o tipo de residência",-1)),Q=o(()=>e("option",{value:"Casa"},"Casa",-1)),W=o(()=>e("option",{value:"Apartamento"},"Apartamento",-1)),X=[O,Q,W],Y={class:"btnContainer"},Z=o(()=>e("i",{class:"fa-solid fa-pen-to-square"},null,-1)),ee=["onClick"],se=o(()=>e("i",{class:"fa-solid fa-floppy-disk"},null,-1)),oe=["onClick"],ae=o(()=>e("i",{class:"fa-solid fa-trash"},null,-1)),te={__name:"AdminPage",setup(c){const b=h({}),p=h(null),d=h(!1),f=async()=>{try{const a=await m.get("https://prickly-robe-eel.cyclic.cloud/users");p.value=a.data,p.value.forEach(i=>{b.value[i.idusers]={...i}})}catch(a){console.error("Erro na solicitação Axios:",a)}};function y(){d.value=!d.value}const g=async a=>{try{(await m.delete(`https://prickly-robe-eel.cyclic.cloud/remover-user/${a.idusers}`)).status===200?window.location.reload():console.error("Erro ao remover a conta do usuário")}catch(i){console.error("Erro ao remover a conta do usuário:",i)}},E=async a=>{if(d.value){const i={nomeuser:a.nomeuser,emailuser:a.emailuser,addressuser:a.addressuser,residenciauser:a.residenciauser,cepuser:a.cepuser};try{(await m.post(`https://prickly-robe-eel.cyclic.cloud/atualizar-usuario/${a.idusers}`,i)).status===200?d.value=!1:console.error("Erro ao atualizar as informações do usuário")}catch(s){console.error("Erro ao atualizar as informações do usuário:",s)}}};return f(),(a,i)=>(l(),r("div",I,[A,D,e("section",S,[e("div",q,[(l(!0),r(k,null,U(p.value,s=>(l(),r("div",{class:"accordion-item",key:s.idusers},[e("h2",{class:"accordion-header",id:s.idusers},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#id-"+s.idusers,"aria-expanded":"false","aria-controls":"id-"+s.idusers},[z,u(" "+v(s.nomeuser),1)],8,$)],8,P),e("div",{id:"id-"+s.idusers,class:"accordion-collapse collapse","aria-labelledby":s.idusers,"data-bs-parent":"#accordionExample"},[e("div",N,[e("p",null,"Id: "+v(s.idusers),1),F,n(e("input",{id:"nomeuser",disabled:!d.value,type:"text","onUpdate:modelValue":t=>s.nomeuser=t,placeholder:"Digite o nome do usuário",required:""},null,8,M),[[_,s.nomeuser]]),R,n(e("input",{id:"emailuser",disabled:!d.value,type:"text","onUpdate:modelValue":t=>s.emailuser=t,placeholder:"Digite o e-mail do usuário",required:""},null,8,T),[[_,s.emailuser]]),j,n(e("input",{id:"addressuser",disabled:!d.value,type:"text","onUpdate:modelValue":t=>s.addressuser=t,placeholder:"Digite o endereço do usuário",required:""},null,8,L),[[_,s.addressuser]]),G,n(e("input",{id:"cepuser",disabled:!d.value,type:"text","onUpdate:modelValue":t=>s.cepuser=t,placeholder:"Digite o CEP do usuário",required:""},null,8,H),[[_,s.cepuser]]),J,n(e("select",{disabled:!d.value,"onUpdate:modelValue":t=>s.residenciauser=t},X,8,K),[[V,s.residenciauser]]),e("div",Y,[d.value?(l(),r("button",{key:1,onClick:t=>E(s),class:"btn__save"},[se,u(" Salvar ")],8,ee)):(l(),r("button",{key:0,onClick:y,class:"btn__edit"},[Z,u(" Editar ")])),e("button",{onClick:t=>g(s),class:"btn__delete"},[ae,u(" Excluir ")],8,oe)])])],8,B)]))),128))])])]))}},ie=x(te,[["__scopeId","data-v-f6140fa1"]]);export{ie as default};
