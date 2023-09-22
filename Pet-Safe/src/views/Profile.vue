<template>
    <div class="container">
        <section class="page__title">
            <h1>Perfil</h1>
        </section>
        <hr>
        <section class="page__content">
            <div class="sideContainer">
                <div class="sideLeft">
                    <div class="userImgContainer">
                        <img v-if="userData" :src="getUserImageSrc()" alt="foto-de-perfil" class="cardUser__img">
                        <img v-else src="../assets/images/logo.png" alt="foto-de-perfil" class="cardUser__img">
                    </div>
                    <div class="inputContainer">
                        <button @click="handleEditUserImage" class="editUserImage"><i class="fa-solid fa-pen-to-square"></i> Editar imagem</button>
                        <label v-if="isEditImage" for="userimg"><i class="fa-solid fa-image"></i> Selecionar imagem</label>
                        <input id="userimg" ref="fileInput" type="file" @change="handleFileChange">
                        <p class="msgUserImg" v-if="msgUserImg">{{msgUserImg}}</p>
                        <button class="sendUserImage" v-if="isEditImage" @click="uploadImage"><i class="fa-solid fa-upload"></i> Enviar Imagem</button>
                    </div>
                </div>
                <div class="sideRight">
                    <h3>- Informações de usuário</h3>
                    <form class="infoUser">
                        <div class="inputContainer half">
                            <label for="nomeuser">Nome:</label>
                            <input id="nomeuser" v-if="userData" :disabled="isDisabled" type="text" :value="userData.nomeuser"
                                name="nomeuser">
                        </div>
                        <div class="inputContainer half">
                            <label for="emailuser">Email:</label>
                            <input id="emailuser" v-if="userData" :disabled="isDisabled" type="email" :value="userData.emailuser"
                                name="emailuser">
                        </div>
                        <div class="inputContainer">
                            <label for="addressuser">Endereço:</label>
                            <input id="addressuser" v-if="userData" :disabled="isDisabled" type="text" :value="userData.addressuser"
                                name="addressuser">
                        </div>
                        <button :disabled="isDisabled" class="saveUserInfo" type="submit"><i class="fa-solid fa-floppy-disk"></i> Salvar</button>
                    </form>
                    <button class="editUserInfo" @click="handleIsDisabled"><i class="fa-solid fa-pen-to-square"></i> Editar informações</button>
                    <h3>- Informações do pet</h3>
                    <p v-if="userData" class="cardUser__name">
                        <i class="fa-solid fa-dog"></i>
                        Pitoco - Macho
                        <i class="fa-solid fa-mars"></i>
                    </p>
                    <p v-if="userData" class="cardUser__email">
                        <i class="fa-solid fa-cake-candles"></i>
                        12/09/2020 - 3 anos
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';

const userData = ref(null);
const msgUserImg = ref(null);
const isEditImage = ref(false);
const isDisabled = ref(true);
const userImageSrc = ref('');
// Recupere o token do localStorage
const token = localStorage.getItem('token');

function handleIsDisabled() {
    isDisabled.value = !isDisabled.value;
}
function handleEditUserImage() {
    isEditImage.value = !isEditImage.value;
    msgUserImg.value = null;
}

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

const selectedFile = ref(null);

const hasSelectedFiles = computed(() => selectedFile.value !== null);

const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadImage = () => {
  if (hasSelectedFiles.value) {
    const formData = new FormData();
    formData.append('image', selectedFile.value);

    // Enviar a imagem para a rota de upload no servidor
    axios
      .post('http://localhost:3000/upload-image', formData)
      .then((response) => {
        const imagePath = response.data.imagePath;

        // Atualize a imagem de perfil imediatamente após o upload
        userData.value.imguser = imagePath;

        // Atualize o token JWT armazenado no local storage com o novo token
        const newToken = response.data.token;
        localStorage.setItem('token', newToken);
        
        // Faça algo com o imagePath, se necessário
        // Você pode até mesmo exibir uma mensagem de sucesso
        msgUserImg.value = null;
      })
      .catch((error) => {
        console.error('Erro ao fazer upload da imagem:', error);
      });
  } else {
    console.error('Nenhum arquivo selecionado para upload.');
    msgUserImg.value = "Selecione um arquivo."
  }
};

const getUserImageSrc = () => {
  if (userData.value) {
    return `http://localhost:3000/api/public${userData.value.imguser}`;
  }
  return ''; // Retorne uma imagem padrão ou uma string vazia, dependendo do que desejar
};
</script>

<style scoped lang="scss">
.sideContainer {
    display: flex;
    gap: 30px;
    h3{
        margin-bottom: 10px;
    }
    .sideLeft {
        flex-basis: calc(15% - 15px);
        width: 100%;
        text-align: center;

        img {
            width: 150px;
            border-radius: 100%;
        }
        .msgUserImg{
            background-color: rgb(255, 106, 106);
            color: rgb(144, 15, 15);
            margin-top: 10px;
            margin-bottom: 0px !important;
            padding: 5px 10px;
            border-radius: 5px;
            border: solid 2px;
            font-size: 16px;
        }
        .inputContainer{
            label{
                background-color: var(--dark);
                color: var(--primary);
                font-size: 14px;
                padding:5px 10px;
                border-radius: 5px;
                cursor: pointer;
                width: 100%;

            }
            input{
                display:none;
            }
            .sendUserImage{
                margin-top: 10px;
            }
            .editUserImage, .sendUserImage{
                background-color: var(--primary);
                color: var(--dark);
                padding: 5px 10px;
                transition: .5s;
                border-radius: 5px;
                margin-bottom: 10px;
                width: 100%;
                &:hover{
                    transform: scale(1.05);
                }
            }
        }
    }
    .sideRight{
        background-color: #fff;
        flex-basis: calc(85% - 10px);
        padding: 20px;
        border-radius: 10px;
        .infoUser{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .editUserInfo{
            background-color: var(--primary);
            margin-top: 10px;
            color: var(--dark);
            padding: 5px 10px;
            border-radius: 5px;
            transition: .5s;
            margin-bottom: 20px;
            &:hover{
                transform: scale(1.05);
            }
        }
        .saveUserInfo{
            background-color: var(--primary);
            color: var(--dark);
            padding: 5px 10px;
            border-radius: 5px;
            transition: .5s;
            &:hover{
                transform: scale(1.05);
            }
            &:disabled {
                background-color: #f1f1f1;
                cursor: initial;
                &:hover{
                    transform: scale(1);
                }
            }
        }
        .inputContainer{
            flex-basis: 100%;
            &.half{
                flex-basis: calc(50% - 5px);
            }
            input {
            background-color: #f1f1f1;
            padding: 5px;
            border-radius: 5px;
            border: solid 2px #fff;
            width: 100%;
    
            &::placeholder {
                color: #1a1a1a8f;
            }
    
            &:focus-visible {
                outline: 2px solid var(--primary);
            }
        }
    }
}
}</style>