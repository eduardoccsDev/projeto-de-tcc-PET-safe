<template>
  <section class="topbar">
    <div class="btns">
      <!-- <router-link to="/clinicas" class="buttonLink">
        <span class="icons">
          <i class="fa-solid fa-hospital"></i>
        </span>
        <span class="text"> Clínicas próximas </span>
      </router-link> -->
      <LoginLogoutBtns />
    </div>
  </section>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import LoginLogoutBtns from "./LoginLogoutBtns.vue";
const userData = ref(null);

// Recupere o token do localStorage
const token = localStorage.getItem("token");

if (!token) {
  console.log("SEM TOKEN");
} else {
  axios
    .get("https://prickly-robe-eel.cyclic.cloud/protegido", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      userData.value = response.data.user;
      // console.log('Dados do usuário:', response.data.user);
    })
    .catch((error) => {
      console.error("Erro ao acessar o endpoint protegido:", error);
    });
}
</script>
<style scoped lang="scss">
.topbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #F2EEEB;
  padding: 10px;

  @media (max-width: 668px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btns {
    display: flex;
    gap: 8px;
  }

  .info {
    p {
      color: #aaa7a2;
    }
  }

  a {
    text-decoration: none;
    background-color: var(--primary);
    color: var(--dark);
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
