<template>
    <div class="btnsContainer">
        <button v-if="isUserLoggedIn" @click="handleLogout" class="logout"><i class="fa-solid fa-arrow-right-to-bracket fa-rotate-180"></i> Sair</button>
        <router-link v-else to="/login-registro" class="buttonLink">
            <span class="icons">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </span>
            <span class="text">
                Login/Registro
            </span>
        </router-link>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const emit = defineEmits();
const isUserLoggedIn = computed(() => {
  return localStorage.getItem('token') !== null;
});

const router = useRouter();
const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};
</script>
<style scoped lang="scss">
.btnsContainer {
    display: flex;
    .logout{
        background-color: rgb(253, 89, 89);
        color: var(--dark);
        padding: 5px 10px;
        border-radius: 5px;
        transition: .5s;
        font-size: 16px;
        cursor: pointer;
        &:hover{
            transform: scale(1.05);
        }
    }

    a {
        background-color: var(--primary);
        color: var(--dark);
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 10px;
        transition: .5s;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 0px 10px 0px #00000052;
        }
    }
}
</style>