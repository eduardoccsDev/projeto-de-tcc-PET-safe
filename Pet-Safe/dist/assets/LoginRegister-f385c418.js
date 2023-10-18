import{_ as q,r as _,u as I,o as n,c as d,a as r,w as t,b,t as h,d as g,e as y,f as k,g as S,h as R,v as i,i as x,p as C,j as U,k as D}from"./index-077e0b24.js";const p=u=>(C("data-v-b16bee24"),u=u(),U(),u),L={class:"forms"},T={key:0,class:"forms__login"},N=k('<div class="forms__header" data-v-b16bee24><img src="'+S+'" alt="logo-pet-safe" class="forms__headerImg" data-v-b16bee24><p class="forms__headerTittle" data-v-b16bee24><i class="fa-solid fa-right-to-bracket" data-v-b16bee24></i> LOGIN </p><p class="forms__headerDescription" data-v-b16bee24> Lorem ipsum dolor, lorem ipsum dolor lorem ipsim dolor. </p></div>',1),j=["onSubmit"],B=p(()=>r("button",{type:"submit",class:"submitform"},"Entrar",-1)),F={key:0,class:"error"},O={key:1,class:"forms__register"},A=k('<div class="forms__header" data-v-b16bee24><img src="'+S+'" alt="logo-pet-safe" class="forms__headerImg" data-v-b16bee24><p class="forms__headerTittle" data-v-b16bee24><i class="fa-solid fa-user-plus" data-v-b16bee24></i> REGISTRO</p><p class="forms__headerDescription" data-v-b16bee24> Lorem ipsum dolor, lorem ipsum dolor lorem ipsim dolor. </p></div>',1),M=["onSubmit"],P=p(()=>r("option",{value:"",disabled:""},"Selecione o tipo de residência",-1)),G=p(()=>r("option",{value:"Casa"},"Casa",-1)),J=p(()=>r("option",{value:"Apartamento"},"Apartamento",-1)),z=[P,G,J],$=p(()=>r("button",{type:"submit",class:"submitform"},"Registrar",-1)),H={key:0,class:"error"},K={key:1,class:"success"},Q={__name:"LoginRegisterForm",setup(u,{emit:v}){const l=_(null),m=_(null),c=_(null);I();const f=_(!1),e={nomeuser:"",emailuser:"",passworduser:"",passworduserrepeat:"",addressuser:"",residenciauser:"",cepuser:""};function w(){f.value=!f.value}const V=async()=>{l.value=null,m.value=null;try{if(!e.nomeuser||!e.emailuser||!e.passworduser||!e.addressuser||!e.passworduserrepeat||!e.residenciauser||!e.cepuser)throw new Error("Por favor, preencha todos os campos.");if(e.passworduser!==e.passworduserrepeat)throw new Error("As senhas não coincidem.");const a=await fetch("https://node-mysl-api.onrender.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(a.ok)m.value="Usuário criado com sucesso!",setTimeout(window.location.reload(),5e3);else if(a.status===400){const s=await a.json();if(s.error==="Email já cadastrado")l.value=s.error;else throw new Error("Erro ao registrar. Verifique os dados inseridos.")}else throw new Error("Erro ao registrar. Verifique os dados inseridos.")}catch(a){console.log(a.message),l.value=a.message}},E=async()=>{c.value=null;try{if(!e.emailuser||!e.passworduser)throw new Error("Por favor, preencha todos os campos.");const a=await R.post("https://node-mysl-api.onrender.com/login",e);if(!a.data.token)throw new Error("Erro ao fazer login. Verifique os dados inseridos.");localStorage.setItem("token",a.data.token),v("user-logged-in"),window.location.href="/"}catch(a){c.value=a.response.data.error}};return(a,s)=>(n(),d("section",L,[f.value?(n(),d("div",O,[A,r("form",{onSubmit:b(V,["prevent"]),class:"register"},[t(r("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>e.nomeuser=o),required:"",type:"text",name:"nomeuser",class:"nomeuser",placeholder:"Insira seu nome"},null,512),[[i,e.nomeuser]]),t(r("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>e.emailuser=o),required:"",type:"email",name:"emailuser",class:"emailuser",placeholder:"Insira seu e-mail"},null,512),[[i,e.emailuser]]),t(r("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>e.passworduser=o),minlength:"8",required:"",type:"password",name:"passworduser",class:"passworduser",placeholder:"Insira sua senha"},null,512),[[i,e.passworduser]]),t(r("input",{"onUpdate:modelValue":s[5]||(s[5]=o=>e.passworduserrepeat=o),minlength:"8",required:"",type:"password",name:"passworduserrepeat",class:"passworduser",placeholder:"Repita sua senha"},null,512),[[i,e.passworduserrepeat]]),t(r("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>e.addressuser=o),required:"",type:"text",name:"addressuser",class:"addressuser",placeholder:"Digite seu endereço"},null,512),[[i,e.addressuser]]),t(r("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>e.cepuser=o),required:"",type:"number",name:"cepuser",class:"cepuser",placeholder:"Digite seu cep"},null,512),[[i,e.cepuser]]),t(r("select",{required:"","onUpdate:modelValue":s[8]||(s[8]=o=>e.residenciauser=o),name:"residenciauser",id:"residenciauser"},z,512),[[x,e.residenciauser]]),$],40,M),l.value?(n(),d("p",H,h(l.value),1)):g("",!0),m.value?(n(),d("p",K,h(m.value),1)):g("",!0),r("p",{class:"forms__ask"},[y(" Já possui uma conta? faça login "),r("button",{onClick:w},"Clicando aqui")])])):(n(),d("div",T,[N,r("form",{onSubmit:b(E,["prevent"]),class:"login"},[t(r("input",{required:"","onUpdate:modelValue":s[0]||(s[0]=o=>e.emailuser=o),type:"email",name:"emailuser",class:"emailuser",placeholder:"Insira seu e-mail"},null,512),[[i,e.emailuser]]),t(r("input",{required:"","onUpdate:modelValue":s[1]||(s[1]=o=>e.passworduser=o),type:"password",name:"passworduser",class:"passworduser",placeholder:"Insira sua senha"},null,512),[[i,e.passworduser]]),B],40,j),c.value?(n(),d("p",F,h(c.value),1)):g("",!0),r("p",{class:"forms__ask"},[y(" Não possui uma conta? Crie uma "),r("button",{onClick:w},"Clicando aqui")])]))]))}},W=q(Q,[["__scopeId","data-v-b16bee24"]]),Y={__name:"LoginRegister",setup(u){return(v,l)=>(n(),D(W))}};export{Y as default};
