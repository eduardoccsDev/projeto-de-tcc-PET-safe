import{_ as k,r as h,o as l,c as r,a as e,F as x,q as U,h as m,e as _,t as v,w as c,v as p,i as V,d as C,p as w,j as I}from"./index-aa35d99a.js";const o=u=>(w("data-v-e9987867"),u=u(),I(),u),A={class:"container"},D=o(()=>e("section",{class:"page__title"},[e("h1",null,"Usuários cadastrados")],-1)),S=o(()=>e("hr",null,null,-1)),q={class:"page__content"},P={class:"accordion",id:"accordionExample"},N=["id"],$=["data-bs-target","aria-controls"],z=o(()=>e("i",{class:"fa-solid fa-user"},null,-1)),B=["id","aria-labelledby"],F={class:"accordion-body"},M=o(()=>e("label",{for:"nomeuser"},"Nome:",-1)),R=["disabled","onUpdate:modelValue"],T=o(()=>e("label",{for:"emailuser"},"E-mail:",-1)),j=["disabled","onUpdate:modelValue"],L=o(()=>e("label",{for:"addressuser"},"Endereço:",-1)),G=["disabled","onUpdate:modelValue"],H=o(()=>e("label",{for:"cepuser"},"CEP:",-1)),J=["disabled","onUpdate:modelValue"],K=o(()=>e("label",{for:"residenciauser"},"Residência:",-1)),O=["disabled","onUpdate:modelValue"],Q=o(()=>e("option",{selected:"",disabled:"",value:""},"Selecione o tipo de residência",-1)),W=o(()=>e("option",{value:"Casa"},"Casa",-1)),X=o(()=>e("option",{value:"Apartamento"},"Apartamento",-1)),Y=[Q,W,X],Z={class:"btnContainer"},ee=o(()=>e("i",{class:"fa-solid fa-pen-to-square"},null,-1)),se=["onClick"],oe=o(()=>e("i",{class:"fa-solid fa-floppy-disk"},null,-1)),ae=["onClick"],te=o(()=>e("i",{class:"fa-solid fa-trash"},null,-1)),de={__name:"AdminPage",setup(u){const b=h({}),n=h(null),d=h(!1),f=async()=>{try{const a=await m.get("https://prickly-robe-eel.cyclic.cloud/users");n.value=a.data,n.value.forEach(i=>{b.value[i.idusers]={...i}})}catch(a){console.error("Erro na solicitação Axios:",a)}};function y(){d.value=!d.value}const g=async a=>{try{(await m.delete(`https://prickly-robe-eel.cyclic.cloud/remover-user/${a.idusers}`)).status===200?window.location.reload():console.error("Erro ao remover a conta do usuário")}catch(i){console.error("Erro ao remover a conta do usuário:",i)}},E=async a=>{if(d.value){const i={nomeuser:a.nomeuser,emailuser:a.emailuser,addressuser:a.addressuser,residenciauser:a.residenciauser,cepuser:a.cepuser};try{(await m.post(`https://prickly-robe-eel.cyclic.cloud/atualizar-usuario/${a.idusers}`,i)).status===200?d.value=!1:console.error("Erro ao atualizar as informações do usuário")}catch(s){console.error("Erro ao atualizar as informações do usuário:",s)}}};return f(),(a,i)=>(l(),r("div",A,[D,S,e("section",q,[e("div",P,[(l(!0),r(x,null,U(n.value,s=>(l(),r("div",{class:"accordion-item",key:s.idusers},[e("h2",{class:"accordion-header",id:s.idusers},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#id-"+s.idusers,"aria-expanded":"false","aria-controls":"id-"+s.idusers},[z,_(" "+v(s.nomeuser),1)],8,$)],8,N),e("div",{id:"id-"+s.idusers,class:"accordion-collapse collapse","aria-labelledby":s.idusers,"data-bs-parent":"#accordionExample"},[e("div",F,[e("p",null,"Id: "+v(s.idusers),1),M,c(e("input",{id:"nomeuser",disabled:!d.value,type:"text","onUpdate:modelValue":t=>s.nomeuser=t,placeholder:"Digite o nome do usuário",required:""},null,8,R),[[p,s.nomeuser]]),T,c(e("input",{id:"emailuser",disabled:!d.value,type:"email","onUpdate:modelValue":t=>s.emailuser=t,placeholder:"Digite o e-mail do usuário",required:""},null,8,j),[[p,s.emailuser]]),L,c(e("input",{id:"addressuser",disabled:!d.value,type:"text","onUpdate:modelValue":t=>s.addressuser=t,placeholder:"Digite o endereço do usuário",required:""},null,8,G),[[p,s.addressuser]]),H,c(e("input",{id:"cepuser",disabled:!d.value,type:"number","onUpdate:modelValue":t=>s.cepuser=t,placeholder:"Digite o CEP do usuário",required:""},null,8,J),[[p,s.cepuser]]),K,c(e("select",{disabled:!d.value,"onUpdate:modelValue":t=>s.residenciauser=t},Y,8,O),[[V,s.residenciauser]]),e("div",Z,[d.value?(l(),r("button",{key:1,onClick:t=>E(s),class:"btn__save"},[oe,_(" Salvar ")],8,se)):(l(),r("button",{key:0,onClick:y,class:"btn__edit"},[ee,_(" Editar ")])),n.value&&n.value.emailuser!=="admin@petsafe.com"?(l(),r("button",{key:2,onClick:t=>g(s),class:"btn__delete"},[te,_(" Excluir ")],8,ae)):C("",!0)])])],8,B)]))),128))])])]))}},le=k(de,[["__scopeId","data-v-e9987867"]]);export{le as default};