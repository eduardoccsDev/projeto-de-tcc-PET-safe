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
                        <button @click="handleEditUserImage" class="editUserImage"><i class="fa-solid fa-pen-to-square"></i>
                            Editar imagem</button>
                        <label v-if="isEditImage" for="userimg"><i class="fa-solid fa-image"></i> Selecionar imagem</label>
                        <input id="userimg" ref="fileInput" type="file" @change="handleFileChange">
                        <p class="msgUserImg" v-if="msgUserImg">{{ msgUserImg }}</p>
                        <button class="sendUserImage" v-if="isEditImage" @click="uploadImage"><i
                                class="fa-solid fa-upload"></i> Enviar Imagem</button>
                    </div>
                </div>
                <div class="sideRight">
                    <div class="infoUserTitleContainer">
                        <h3>- Informações de usuário</h3>
                        <button class="editUserInfo" @click="handleIsDisabled"><i class="fa-solid fa-pen-to-square"></i>
                            Editar informações</button>
                    </div>
                    <form @submit.prevent="handleUpdateUserInfo" class="infoUser">
                        <div class="inputContainer half">
                            <label for="nomeuser"><i class="fa-solid fa-user"></i> Nome:</label>
                            <input id="nomeuser" v-model="editedUserInfo.nomeuser" v-if="userData" :disabled="isDisabled"
                                type="text" name="nomeuser">
                        </div>
                        <div class="inputContainer half">
                            <label for="emailuser"><i class="fa-solid fa-envelope"></i> Email:</label>
                            <input id="emailuser" v-model="editedUserInfo.emailuser" v-if="userData" :disabled="isDisabled"
                                type="email" name="emailuser">
                        </div>
                        <div class="inputContainer half">
                            <label for="addressuser"><i class="fa-solid fa-map-location-dot"></i> Endereço:</label>
                            <input id="addressuser" v-model="editedUserInfo.addressuser" v-if="userData"
                                :disabled="isDisabled" type="text" name="addressuser">
                        </div>
                        <div class="inputContainer half">
                            <label for="residenciauser"><i class="fa-solid fa-house"></i> Residência:</label>
                            <select :disabled="isDisabled" v-if="userData" required v-model="editedUserInfo.residenciauser"
                                name="residenciauser" id="residenciauser">
                                <option value="" disabled>Selecione o tipo de residência</option>
                                <option value="Casa">Casa</option>
                                <option value="Apartamento">Apartamento</option>
                            </select>
                        </div>
                        <button :disabled="isDisabled" class="saveUserInfo" type="submit"><i
                                class="fa-solid fa-floppy-disk"></i> Salvar</button>
                    </form>
                    <p v-if="msgUserInfo" class="msgUserInfo">{{ msgUserInfo }}</p>
                    <div class="infoUserTitleContainer">
                        <h3>- Informações de pet</h3>
                        <button class="editUserInfo" @click="handleIsAddPet"><i class="fa-solid fa-plus"></i>
                            Adicionar pet</button>
                    </div>
                    <form v-if="isAddPet" @submit.prevent="handleAddPet" class="infoUser">
                        <div class="inputContainer half">
                            <label for="nomepet"><i class="fa-solid fa-signature"></i> Nome do pet:</label>
                            <input id="nomepet" placeholder="Digite o nome do pet" v-model="petData.nomepet" type="text"
                                name="nomepet">
                        </div>
                        <div class="inputContainer half">
                            <label for="nomepet"><i class="fa-solid fa-paw"></i> Espécie do pet:</label>
                            <select name="especiepet" id="especiepet" v-model="petData.especiepet">
                                <option value="" disabled>Selecione a espécie:</option>
                                <option value="Cão">Cão</option>
                                <option value="Gato">Gato</option>
                            </select>
                        </div>
                        <div class="inputContainer half">
                            <label for="nomepet"><i class="fa-solid fa-venus-mars"></i> Sexo do pet:</label>
                            <select name="sexopet" id="sexopet" v-model="petData.sexopet">
                                <option value="" disabled>Selecione o sexo:</option>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                            </select>
                        </div>
                        <div class="inputContainer half">
                            <label for="nomepet"><i class="fa-solid fa-paw"></i> Raça do pet:</label>
                            <select name="racapet" id="racapet" v-model="petData.racapet">
                                <option value="" disabled>Selecione a raça:</option>
                                <option value="raca1">Raça 1</option>
                                <option value="raca2">Raça 2</option>
                            </select>
                        </div>
                        <div class="inputContainer half">
                            <label for="nascimentopet"><i class="fa-solid fa-cake-candles"></i> Data de nascimento: </label>
                            <input id="nascimentopet" v-model="petData.nascimentopet" type="date" name="nascimentopet">
                        </div>
                        <div class="inputContainer half">
                            <label for="idadepet"><i class="fa-solid fa-arrow-up-1-9"></i> Idade: </label>
                            <input id="idadepet" placeholder="Digite a idade do pet" v-model="petData.idadepet"
                                type="number" name="idadepet">
                        </div>
                        <button class="saveUserInfo" type="submit"><i class="fa-solid fa-plus"></i> Adicionar</button>
                    </form>
                    <p v-if="msgUserInfo" class="msgUserInfo">{{ msgUserInfo }}</p>
                    <div class="petCardsContainer">
                        <div v-if="userPets" v-for="pet in userPets" :key="pet.idpets" class="petCard">
                            <img class="petImg" src="../assets/images/logo.png" alt="petImg">
                            <div class="petPrimaryInfo">
                                <i v-if="pet.especiepet === 'Cão'" class="fa-solid fa-dog"></i>
                                <i v-else class="fa-solid fa-cat"></i>
                                <p>{{ pet.nomepet }} - {{ pet.racapet }}</p>
                            </div>
                            <p>
                                <i v-if="pet.sexopet === 'Macho'" class="fa-solid fa-mars"></i>
                                <i v-else class="fa-solid fa-venus"></i>
                                {{ pet.sexopet }}
                            </p>
                            <p><i class="fa-solid fa-cake-candles"></i> {{ pet.idadepet }} anos</p>
                            <button class="removePet"><i class="fa-solid fa-xmark"></i> Remover</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    {{ console.log(userPets) }}
</template>

<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';

const userData = ref(null);
const userPets = ref(null);
const msgUserImg = ref(null);
const msgUserInfo = ref(null);
const msgPetInfo = ref(null);
const isEditImage = ref(false);
const isAddPet = ref(false);
const isDisabled = ref(true);
const userImageSrc = ref('');
let editedUserInfo = {
    nomeuser: '',
    emailuser: '',
    addressuser: '',
    residenciauser: ''
};
// Recupere o token do localStorage
const token = localStorage.getItem('token');

function handleIsDisabled() {
    isDisabled.value = !isDisabled.value;
}
function handleIsAddPet() {
    isAddPet.value = !isAddPet.value;
}
function handleEditUserImage() {
    isEditImage.value = !isEditImage.value;
    msgUserImg.value = null;
}

const updateUserProfileData = () => {
    if (token) {
        axios.get('http://localhost:3000/protegido', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                userData.value = response.data.user;
                // Atualize os campos de edição com os novos dados do usuário
                editedUserInfo.nomeuser = response.data.user.nomeuser;
                editedUserInfo.emailuser = response.data.user.emailuser;
                editedUserInfo.addressuser = response.data.user.addressuser;
                editedUserInfo.residenciauser = response.data.user.residenciauser;
            })
            .catch((error) => {
                console.error('Erro ao acessar o endpoint protegido:', error);
            });
    }
};

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

const handleUpdateUserInfo = () => {
    // Verifique se os campos de edição não estão desabilitados
    if (!isDisabled.value) {
        // Crie um objeto com as informações atualizadas do usuário
        const updatedUserInfo = {
            nomeuser: editedUserInfo.nomeuser,
            emailuser: editedUserInfo.emailuser,
            addressuser: editedUserInfo.addressuser,
            residenciauser: editedUserInfo.residenciauser
        };
        axios
            .post('http://localhost:3000/atualizar-usuario', updatedUserInfo, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                // Atualize os dados do usuário com os novos dados recebidos do servidor
                userData.value = response.data.user; // Suponha que o objeto retornado contenha as informações atualizadas

                // Atualize o token JWT no localStorage com o novo token
                const newToken = response.data.token;
                localStorage.setItem('token', newToken);

                // Desabilite a edição dos campos
                isDisabled.value = true;

                // Exiba uma mensagem de sucesso
                msgUserInfo.value = 'Informações do usuário atualizadas com sucesso!';
                localStorage.setItem('userData', JSON.stringify(response.data.user));
                // Limpe a mensagem de sucesso após alguns segundos (opcional)
                setTimeout(() => {
                    msgUserInfo.value = null;
                }, 3000);
            })
            .catch((error) => {
                console.error('Erro ao atualizar informações do usuário:', error);
                // Exiba uma mensagem de erro
                msgUserImg.value = 'Erro ao atualizar informações do usuário.';
            });
    } else {
        // Campos de edição estão desabilitados, não há nada para enviar
    }
};


const petData = {
    nomepet: '',
    especiepet: '',
    sexopet: '',
    idadepet: '',
    nascimentopet: '',
    racapet: ''
}

const handleAddPet = () => {
    // Certifique-se de que todos os campos obrigatórios foram preenchidos
    if (!petData.nomepet || !petData.especiepet || !petData.sexopet || !petData.idadepet || !petData.nascimentopet || !petData.racapet) {
        console.error('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    // Atualize os dados do usuário antes de adicionar o pet
    updateUserProfileData();
    // Aguarde até que os dados do usuário estejam disponíveis
    if (!userData.value) {
        console.error('Dados do usuário não disponíveis.');
        return;
    }
    // Agora você pode acessar userData e petData com segurança
    petData.idtutor = userData.value.userId; // Defina o idtutor como o ID do usuário logado
    axios
        .post('http://localhost:3000/adicionar-pet', petData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            petData.nomepet = '';
            petData.especiepet = '';
            petData.sexopet = '';
            petData.idadepet = '';
            petData.nascimentopet = '';
            petData.racapet = '';
            // Exiba uma mensagem de sucesso
            window.location.reload();
            msgPetInfo.value = 'Pet adicionado com sucesso!';
            setTimeout(() => {
                msgUserInfo.value = null;
            }, 3000);
        })
        .catch((error) => {
            console.error('Erro ao adicionar pet:', error);
            // Exiba uma mensagem de erro
            msgUserInfo.value = 'Erro ao adicionar pet.';
        });
};

const fetchUserPets = () => {
    if (token) {
        axios.get('http://localhost:3000/pets', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                userPets.value = response.data;
                // console.log(userPets);
            })
            .catch((error) => {
                console.error('Erro ao buscar os pets:', error);
            });
    }
};

import { onMounted } from 'vue';
onMounted(() => {
    updateUserProfileData();
    fetchUserPets();
});
</script>

<style scoped lang="scss">
.infoUserTitleContainer {
    display: flex;
    align-items: center;
    gap: 10px;

    @media(max-width:668px) {
        flex-direction: column;
        gap: 0px;
    }
}

.msgUserInfo {
    background-color: var(--primary-opacity);
    padding: 5px 10px;
    border-radius: 5px;
    border: solid 2px var(--primary);
    color: var(--primary);
    text-align: center;
}

.sideContainer {
    display: flex;
    gap: 30px;

    @media(max-width:668px) {
        flex-direction: column;
    }

    h3 {
        margin-bottom: 10px;
    }

    .sideLeft {
        flex-basis: calc(15% - 15px);
        width: 100%;
        text-align: center;

        img {
            width: 150px;
            border-radius: 100%;
            border: solid 2px var(--primary);
        }

        .msgUserImg {
            background-color: rgb(255, 106, 106);
            color: rgb(144, 15, 15);
            margin-top: 10px;
            margin-bottom: 0px !important;
            padding: 5px 10px;
            border-radius: 5px;
            border: solid 2px;
            font-size: 16px;
        }

        .inputContainer {
            label {
                background-color: var(--dark);
                color: var(--primary);
                font-size: 14px;
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
                width: 100%;
                display: block;

            }

            input {
                display: none;
            }

            .sendUserImage {
                margin-top: 10px;
            }

            .editUserImage,
            .sendUserImage {
                background-color: var(--primary);
                color: var(--dark);
                padding: 5px 10px;
                transition: .5s;
                border-radius: 5px;
                margin-bottom: 10px;
                width: 100%;

                &:hover {
                    transform: scale(1.05);
                }
            }
        }
    }

    .sideRight {
        background-color: #fff;
        flex-basis: calc(85% - 10px);
        padding: 20px;
        border-radius: 10px;

        .petCardsContainer {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

            .petCard {
                background-color: var(--primary);
                padding: 10px;
                border-radius: 5px;
                width: 200px;
                text-align: center;
                @media(max-width:668px){
                    width: 100%;
                }
                .removePet{
                    width: 100%;
                    background-color: #FFF;
                    color:var(--dark);
                    padding: 5px 10px;
                    border-radius: 5px;
                    transition: .5s;
                    cursor: pointer;
                    &:hover{
                        transform: scale(1.05);
                    }
                    i{
                        background-color: transparent;
                        padding: 0px;
                    }
                }
                .petImg{
                    width: 80px;
                    border-radius: 100%;
                    border: solid 2px var(--dark);
                }

                p {
                    margin-bottom: 10px !important;
                    text-align: left;
                    &:last-child{
                        margin-bottom: 0px !important;
                    }
                }

                i {
                    background-color: #fff;
                    padding: 5px 6px;
                    border-radius: 100%;
                }

                .petPrimaryInfo {
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    margin-bottom: 10px;

                    p {
                        margin: 0 !important;
                    }

                    i {
                        background-color: #fff;
                        padding: 5px 4px;
                        border-radius: 100%;
                    }
                }
            }
        }


        .infoUser {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }

        .editUserInfo {
            background-color: var(--primary);
            margin-top: 10px;
            color: var(--dark);
            padding: 5px 10px;
            border-radius: 5px;
            transition: .5s;
            margin-bottom: 20px;

            &:hover {
                transform: scale(1.05);
            }
        }

        .saveUserInfo {
            background-color: var(--primary);
            color: var(--dark);
            padding: 5px 10px;
            border-radius: 5px;
            transition: .5s;

            &:hover {
                transform: scale(1.05);
            }

            &:disabled {
                background-color: #f1f1f1;
                cursor: initial;

                &:hover {
                    transform: scale(1);
                }
            }
        }

        .inputContainer {
            flex-basis: 100%;

            @media(max-width:668px) {
                flex-basis: 100%;
                text-align: initial;
            }

            &.half {
                flex-basis: calc(50% - 5px);

                @media(max-width:668px) {
                    flex-basis: 100%;
                    text-align: initial;
                }
            }

            input,
            select {
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