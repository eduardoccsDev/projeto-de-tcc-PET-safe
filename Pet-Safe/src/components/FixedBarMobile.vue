<template>
  <section :class="teamCardClasses" id="fixed-bar-mobile">
    <div class="fixed-bar-mobile__flexContent">
      <div class="fixed-bar-mobile__logo">
        <img
          v-if="userData && userData.imguser"
          :src="userData.imguser"
          id="logo"
          alt="userimg"
        />
        <img v-else src="../assets/images/logo.png" alt="pet-safe-logo" id="logo" />
      </div>
      <div class="fixed-bar-mobile__menu">
        <router-link to="/" class="buttonLink">
          <span class="icons">
            <i class="fa-solid fa-house"></i>
          </span>
          <span class="text"> Home </span>
        </router-link>
        <router-link v-if="isUserLoggedIn" to="/perfil" class="buttonLink">
          <span class="icons">
            <i class="fa-regular fa-address-card"></i>
          </span>
          <span class="text"> Perfil </span>
        </router-link>
        <router-link to="/sobre" class="buttonLink">
          <span class="icons">
            <i class="fa-solid fa-users"></i>
          </span>
          <span class="text"> Sobre </span>
        </router-link>
        <router-link to="/primeiros-socorros" class="buttonLink">
          <span class="icons">
            <i class="fa-solid fa-kit-medical"></i>
          </span>
          <span class="text"> SOS Pets </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import axios from "axios";
const isMobile = ref(false);
const userData = ref(null);
const isUserLoggedIn = localStorage.getItem("token") !== null;
const token = localStorage.getItem("token");
if (token) {
  axios
    .get("https://node-mysl-api.onrender.com/protegido", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      userData.value = response.data.user;
    })
    .catch((error) => {
      console.error("Erro ao acessar o endpoint protegido:", error);
    });
}
const getUserImageSrc = () => {
  if (userData.value) {
    return `https://node-mysl-api.onrender.com/api/public${userData.value.imguser}`;
  }
  return ""; // Retorne uma imagem padrão ou uma string vazia, dependendo do que desejar
};
const updateIsMobile = (mediaQuery) => {
  isMobile.value = mediaQuery.matches;
};
const mobileMediaQuery = window.matchMedia("(max-width: 448px)");
mobileMediaQuery.addEventListener("change", updateIsMobile);
updateIsMobile(mobileMediaQuery);

onBeforeUnmount(() => {
  mobileMediaQuery.removeEventListener("change", updateIsMobile);
});
const teamCardClasses = computed(() => {
  return {
    "fixed-bar-mobile": true,
    "mobile-fixed": isMobile.value,
  };
});
</script>
<style lang="scss" scoped>
.fixed-bar-mobile {
  background-color: var(--dark);
  padding: 10px;
  position: sticky;
  display: none;
  z-index: 99;
  bottom: 0px;
  &.mobile-fixed {
    display: block;
  }
  &__menu {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      text-decoration: none;
      color: #fff;
      transition: 0.5s;
      &:hover {
        color: var(--primary);
      }
      &.router-link-exact-active {
        color: var(--primary);
      }
    }
  }
  &__logo {
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
  }
  &__flexContent {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
</style>
