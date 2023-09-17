<template>
    <section class="forms">
        <div v-if="!isRegister" class="forms__login">
            <p>LOGIN</p>
            <form @submit-prevent="" class="login">
                <input type="email" name="emailuser" class="emailuser" placeholder="Insira seu e-mail">
                <input type="password" name="passworduser" class="passworduser" placeholder="Insira sua senha">
                <button type="submit" class="submitform">Entrar</button>
            </form>
            <p>Não possui uma conta? Crie uma clicando <button @click="handleChangeForm">aqui</button></p>
        </div>
        <div v-else class="forms__register">
            <div class="forms__header">
                <img src="../assets/images/logo.png" alt="logo-pet-safe" class="forms__headerImg">
                <p class="forms__headerTittle"><i class="fa-solid fa-user-plus"></i> REGISTRO</p>
                <p class="forms__headerDescription">Lorem ipsum dolor, lorem ipsum dolor lorem ipsim dolor.</p>
            </div>
            <form @submit.prevent="handleRegistration" class="register">
                <input v-model="formData.nomeuser" required type="text" name="nomeuser" class="nomeuser"
                    placeholder="Insira seu nome">
                <input v-model="formData.emailuser" required type="email" name="emailuser" class="emailuser"
                    placeholder="Insira seu e-mail">
                <input v-model="formData.passworduser" required type="password" name="passworduser" class="passworduser"
                    placeholder="Insira sua senha">
                <input v-model="formData.passworduserrepeat" required type="password" name="passworduserrepeat"
                    class="passworduser" placeholder="Repita sua senha">
                <button type="submit" class="submitform">Registrar</button>
            </form>
            <p class="forms__ask">Já possui uma conta? faça login <button @click="handleChangeForm">Clicando aqui</button>
            </p>
        </div>
    </section>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const isRegister = ref(false);
const formData = {
    nomeuser: '',
    emailuser: '',
    passworduser: '',
    passworduserrepeat: '',
};

function handleChangeForm() {
    isRegister.value = !isRegister.value
}

async function handleRegistration() {
    if (formData.passworduser !== formData.passworduserrepeat) {
        alert('As senhas não coincidem');
        return;
    }
    console.log(formData);
    try {
        const response = await axios.post('http://localhost:3000/register', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Usuário registrado:', response.data);
        // Limpar o formulário ou redirecionar para a página de login
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        // Lidar com erros, por exemplo, exibindo uma mensagem de erro para o usuário
    }
}

</script>
<style scoped lang="scss">
.forms {
    width: 450px;
    margin: auto;

    &__ask {
        margin-top: 5px;
        font-size: 14px;
        text-align: center;

        button {
            color: var(--primary);
            text-decoration: underline;
            cursor: pointer;
            transition: .5s;

            &:hover {
                color: var(--dark);
            }
        }
    }

    &__headerTittle {
        margin-bottom: 5px;
        font-size: 22px;

    }

    &__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-bottom: 15px;
    }

    &__headerImg {
        width: 20%;
        border-radius: 100%;
    }

    &__headerDescription{
        font-size: 14px;
    }

    input {
        padding: 5px;
        border-radius: 5px;
        border: solid 2px #fff;

        &::placeholder {
            color: #1a1a1a8f;
        }

        &:focus-visible {
            outline: 2px solid var(--primary);
        }
    }

    .register {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .nomeuser {
            flex-basis: calc(50% - 4px);
            order: 1;
            width: 100%;
        }

        .emailuser {
            flex-basis: calc(50% - 4px);
            order: 2;
            width: 100%;
        }

        .passworduser {
            order: 3;
            flex-basis: calc(50% - 4px);
            width: 100%;
        }

        .submitform {
            order: 4;
            width: 100%;
            background-color: var(--primary);
            color: var(--dark);
            transition: .5s;
            padding: 5px;
            border-radius: 5px;

            &:hover {
                transform: scale(1.05);
            }
        }
    }
}</style>