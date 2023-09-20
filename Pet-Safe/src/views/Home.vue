<template>
    <div class="container">
        <section class="page__title">
            <h1>Home</h1>
        </section>
        <hr>
        <HeroSection hero-tittle="Bem vindos ao Pet Safe" hero-description="Lorem ipsum dolor, lorem ipsum dolor"
            hero-btn-text="Saiba mais" hero-btn-link="/sobre" hero-img="src/assets/images/caes-e-gatos.jpg" />
        <div v-if="userData">
            {{console.log("TESTE: ", userData)}}
            <p>Bem-vindo, {{ userData.nomeuser }}</p> <!-- Isso é apenas um exemplo, ajuste aos seus dados reais -->
        </div>
        <section class="page__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.</p>
        </section>
        <FixedAlert :have-icon="true" icon="fa-solid fa-user-nurse" alert-tittle="Alerta fixo de teste"
            alert-text="Lorem ipsum dolor lorem, lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor" />
    </div>
</template>

<script setup>
import FixedAlert from '../components/FixedAlert.vue';
import HeroSection from '../components/HeroSection.vue';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import axios from 'axios';

const store = useStore();

// Função para buscar o valor de um cookie específico
const getCookie = (name) => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
};

// Recupere o token dos cookies
const token = getCookie('token');
console.log("TOKEN DA HOME NA FUNÇÃO GETCOOKIE ", token);

// Função para fazer uma solicitação autenticada
const fetchUserData = async (token) => { // Adicione o parâmetro 'token' aqui
  if (token) {
    console.log('TOKEN ANVIADO DA HOME: ',token);
    axios.defaults.withCredentials = true;
    try {
      const response = await axios.get('http://localhost:3002/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const userDataFromServer = response.data;
        userData.value = userDataFromServer; // Atualize o valor de userData com os dados do usuário
        store.dispatch('setUser', userDataFromServer);
      } else {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  }
};

const userData = computed(() => store.state.user);
// Chame a função de busca de dados quando o componente for montado
onMounted(async () => {
  await fetchUserData(token); // Passe o token como argumento
  console.log('Dados do usuário:', userData.value);
});
</script>