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
            <p v-if="loginError" class="error">{{ loginError }}</p>
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
            <p v-if="registrationError" class="error">{{ registrationError }}</p>
            <p v-if="registrationSuccess" class="success">{{ registrationSuccess }}</p>
            <p class="forms__ask">Já possui uma conta? faça login <button @click="handleChangeForm">Clicando aqui</button>
            </p>
        </div>
    </section>
</template>
  
<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';

const registrationError = ref(null);
const registrationSuccess = ref(null);
const loginError = ref(null);

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

const handleRegistration = async () => {
    // Limpe mensagens anteriores
    registrationError.value = null;
    registrationSuccess.value = null;
    try {
        // Realize a validação dos campos do formulário aqui
        if (!formData.nomeuser || !formData.emailuser || !formData.passworduser || !formData.addressuser || !formData.passworduserrepeat) {
            throw new Error('Por favor, preencha todos os campos.');
        }
        if (formData.passworduser !== formData.passworduserrepeat) {
            throw new Error('As senhas não coincidem.');
        }
        // Envie os dados do formulário para o servidor ou a API usando uma solicitação POST
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Erro ao registrar. Verifique os dados inseridos.');
        }
        // Redirecione o usuário após o registro bem-sucedido (você pode escolher a rota apropriada)
        registrationSuccess.value = "Usuário criado com sucesso!";
        setTimeout(window.location.reload(), 5000);
    } catch (error) {
        // Trate os erros de validação ou da API aqui
        registrationError.value = error.message;
    }
};
const emit = defineEmits();
const handleLogin = async () => {
    // Limpe os erros anteriores
    loginError.value = null;
    try {
        if (!formData.emailuser || !formData.passworduser) {
            throw new Error('Por favor, preencha todos os campos.');
        }
        const response = await axios.post('http://localhost:3000/login', formData);

        if (!response.data.token) {
            throw new Error('Erro ao fazer login. Verifique os dados inseridos.');
        }

        // Armazene o token JWT no localStorage
        localStorage.setItem('token', response.data.token);

        // Redirecione o usuário após o login bem-sucedido (você pode escolher a rota apropriada)
        emit('user-logged-in');
        // router.push('/');
        window.location.href = '/';
    } catch (error) {
        loginError.value = error.message;
        console.error(error);
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
}

.error {
    background-color: #ff00005c;
    color: #ff1f1f;
    text-align: center;
    padding: 5px;
    margin-top: 8px;
    border-radius: 5px;
    border: solid 2px;
}
.success{
    background-color: #00ff625c;
    color: var(--dark);
    text-align: center;
    padding: 5px;
    margin-top: 8px;
    border-radius: 5px;
    border: solid 2px;
}
</style>