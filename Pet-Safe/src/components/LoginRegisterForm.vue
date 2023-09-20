<template>
    <section class="forms">
        <!-- FORMULÁRIO DE LOGIN -->
        <div v-if="!isRegister" class="forms__login">
            <div class="forms__header">
                <img src="../assets/images/logo.png" alt="logo-pet-safe" class="forms__headerImg">
                <p class="forms__headerTittle"><i class="fa-solid fa-right-to-bracket"></i> LOGIN</p>
                <p class="forms__headerDescription">Lorem ipsum dolor, lorem ipsum dolor lorem ipsim dolor.</p>
            </div>
            <form @submit.prevent="handleLogin" class="login">
                <input v-model="formData.emailuser" type="email" name="emailuser" class="emailuser"
                    placeholder="Insira seu e-mail">
                <input v-model="formData.passworduser" type="password" name="passworduser" class="passworduser"
                    placeholder="Insira sua senha">
                <button type="submit" class="submitform">Entrar</button>
            </form>
            <p v-if="error" class="error">{{ error }}</p>
            <p class="forms__ask">Não possui uma conta? Crie uma <button @click="handleChangeForm">Clicando aqui</button>
            </p>
        </div>
        <!-- FORMULÁRIO DE REGISTRO -->
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
                <input v-model="formData.addressuser" required type="text" name="addressuser" class="addressuser"
                    placeholder="Digite seu endereço (inclua o CEP)">
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
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Cookies from 'js-cookie';

const store = useStore(); // Crie uma instância do Vuex store
const router = useRouter();
const isRegister = ref(false);
const formData = {
    nomeuser: '',
    emailuser: '',
    passworduser: '',
    passworduserrepeat: '',
    addressuser: '',
};

function handleChangeForm() {
    isRegister.value = !isRegister.value
}


async function handleRegistration() {
    if (formData.passworduser !== formData.passworduserrepeat) {
        alert('As senhas não coincidem');
        return;
    }
    try {
        const response = await axios.post('http://localhost:3002/register', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Usuário registrado:', response.data);
        window.location.reload();
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        // Lidar com erros, por exemplo, exibindo uma mensagem de erro para o usuário
    }
}

let error = '';

const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:3002/login', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.data && response.data.token) {
            // Login bem-sucedido, você recebeu os dados do usuário
            const userData = response.data.user; // Suponhamos que o objeto contenha o nome do usuário e outras informações
            // Depois de salvar os dados do usuário, você pode redirecionar para a página de home
            store.dispatch('setUser', userData); // Isso é um exemplo, você precisa ajustá-lo à sua estrutura de estado
            console.log(response.data.token);
            const token = response.data.token;
            // Armazene o token em um cookie com uma data de expiração
            Cookies.set('token', token, { expires: 1 }); // O cookie expirará em 1 dia, você pode ajustar o valor conforme necessário
            router.push('/');
        }
    } catch (err) {
        error = 'Credenciais inválidas. Verifique seu email e senha.';
        console.error('Erro ao efetuar login:', err);
    }
};
</script>
<style scoped lang="scss">
.forms {
    width: 450px;
    margin: auto;

    @media(max-width:668px) {
        width: 100%;
    }

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

    &__headerDescription {
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

    .login {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        @media(max-width:668px) {
            input {
                flex-basis: 100% !important;
            }
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
            order: 5;
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

    .register {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        @media(max-width:668px) {
            input {
                flex-basis: 100% !important;
            }
        }

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

        .addressuser {
            order: 4;
            flex-basis: 100%;
            width: 100%;
        }

        .submitform {
            order: 5;
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