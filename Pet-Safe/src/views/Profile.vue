<template>
    <div class="container">
        <section class="page__title">
            <h1>Perfil</h1>
        </section>
        <hr>
        <section class="page__content">
            <div class="cardUser">
                <img src="../assets/images/logo.png" alt="foto-de-perfil" class="cardUser__img">
                <div class="cardUser__infoContainer">
                    <p v-if="userData" class="cardUser__name">
                        <i class="fa-solid fa-user"></i>
                        {{ userData.nomeuser }}
                    </p>
                    <p v-if="userData" class="cardUser__email">
                        <i class="fa-solid fa-envelope"></i>
                        {{ userData.emailuser }}
                    </p>
                    <p v-if="userData" class="cardUser__address">
                        <i class="fa-solid fa-map-location-dot"></i>
                        {{ userData.addressuser }}
                    </p>
                </div>
                <div class="cardUser__infoPetContainer">
                    <p v-if="userData" class="cardUser__name">
                        <i class="fa-solid fa-dog"></i>
                        Pitoco - Macho
                        <i class="fa-solid fa-mars"></i>
                    </p>
                    <p v-if="userData" class="cardUser__email">
                        <i class="fa-solid fa-cake-candles"></i>
                        12/09/2020 - 3 anos
                    </p>
                    <p v-if="userData" class="cardUser__address">
                        <i class="fa-solid fa-map-location-dot"></i>
                        {{ userData.addressuser }}
                    </p>
                </div>
            </div>
            <br>
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
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const userData = ref(null);

// Recupere o token do localStorage
const token = localStorage.getItem('token');

if (!token) {
    console.log("SEM TOKEN");
} else {
    axios.get('http://localhost:3000/protegido', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            userData.value = response.data.user;
            // console.log('Dados do usuário:', response.data.user);
        })
        .catch((error) => {
            console.error('Erro ao acessar o endpoint protegido:', error);
        });
}
</script>
<style scoped lang="scss">
.cardUser {
    background-color: var(--primary);
    padding: 15px;
    border-radius: 15px;
    border: solid 2px #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;

    &__img {
        border: solid 2px #fff;
        border-radius: 100%;
        width: 100px;
        height: auto;
        flex-basis: calc(10% - 20px);
    }

    &__infoContainer,
    &__infoPetContainer {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        flex-basis: calc(45% - 20px);
        border: solid 2px #ffffff55;
        padding: 10px;
        border-radius: 10px;
    }

    p {
        margin: 0px !important;

        i {
            margin-right: 5px;
            color: var(--dark);
            font-size: 18px;
        }
    }
}</style>