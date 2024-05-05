<template>
  <div class="container">
    <section class="page__title">
      <h1>Perfil</h1>
    </section>
    <hr />
    <section class="page__content">
      <div class="sideContainer">
        <div class="sideLeft">
          <div class="userImgContainer">
            <img
              v-if="userData && userData.imguser"
              :src="userData.imguser"
              alt="foto-de-perfil"
              class="cardUser__img"
            />
            <img
              v-else
              src="../assets/images/logo.png"
              alt="foto-de-perfil"
              class="cardUser__img"
            />
          </div>
          <div class="inputContainer">
            <button @click="handleEditUserImage" class="editUserImage">
              <i class="fa-solid fa-pen-to-square"></i> Editar imagem
            </button>
            <label v-if="isEditImage" for="userimg"
              ><i class="fa-solid fa-image"></i> Buscar imagem</label
            >
            <input
              id="userimg"
              ref="fileInput"
              accept="image/png, image/jpeg"
              type="file"
              @change="handleFileChange"
            />
            <p class="msgUserImg" v-if="msgUserImg">{{ msgUserImg }}</p>
            <button class="sendUserImage" v-if="isEditImage" @click="uploadImage">
              <i class="fa-solid fa-upload"></i> Enviar Imagem
            </button>
          </div>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn removeAccount"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fa-solid fa-trash"></i> Apagar conta
          </button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Tem certeza?</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Tem certeza de que deseja apagar sua conta? Isto removerá todos os seus
                  dados.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    <i class="fa-solid fa-ban"></i> Cancelar
                  </button>
                  <button
                    @click="handleRemoveAccount"
                    type="button"
                    class="btn removeAccount simple"
                  >
                    <i class="fa-solid fa-trash"></i> Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sideRight">
          <div class="infoUserTitleContainer">
            <h3>- Informações de usuário</h3>
            <button class="editUserInfo" @click="handleIsDisabled">
              <i class="fa-solid fa-pen-to-square"></i> Editar informações
            </button>
          </div>
          <form @submit.prevent="handleUpdateUserInfo" class="infoUser">
            <div class="inputContainer half">
              <label for="nomeuser"><i class="fa-solid fa-user"></i> Nome:</label>
              <input
                id="nomeuser"
                v-model="editedUserInfo.nomeuser"
                v-if="userData"
                :disabled="isDisabled"
                type="text"
                name="nomeuser"
              />
            </div>
            <div class="inputContainer half">
              <label for="emailuser"><i class="fa-solid fa-envelope"></i> Email:</label>
              <input
                id="emailuser"
                v-model="editedUserInfo.emailuser"
                v-if="userData"
                :disabled="isDisabled"
                type="email"
                name="emailuser"
              />
            </div>
            <div class="inputContainer half half-3">
              <label for="addressuser"
                ><i class="fa-solid fa-map-location-dot"></i> Endereço:</label
              >
              <input
                id="addressuser"
                v-model="editedUserInfo.addressuser"
                v-if="userData"
                :disabled="isDisabled"
                type="text"
                name="addressuser"
              />
            </div>
            <div class="inputContainer half half-3">
              <label for="cepuser"><i class="fa-solid fa-address-card"></i> CEP:</label>
              <input
                id="cepuser"
                v-model="editedUserInfo.cepuser"
                v-if="userData"
                :disabled="isDisabled"
                type="number"
                name="cepuser"
              />
            </div>
            <div class="inputContainer half half-3">
              <label for="residenciauser"
                ><i class="fa-solid fa-house"></i> Residência:</label
              >
              <select
                :disabled="isDisabled"
                v-if="userData"
                required
                v-model="editedUserInfo.residenciauser"
                name="residenciauser"
                id="residenciauser"
              >
                <option value="" disabled>Selecione o tipo de residência</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
              </select>
            </div>
            <button v-if="!isDisabled" class="saveUserInfo" type="submit">
              <i class="fa-solid fa-floppy-disk"></i> Salvar
            </button>
          </form>
          <div class="infoUserTitleContainer">
            <h3>- Redefinir senha</h3>
            <button class="editUserInfo" @click="handleIsDisabledPassword">
              <i class="fa-solid fa-pen-to-square"></i> Editar senha
            </button>
          </div>
          <form class="infoUser" @submit.prevent="handleUpdateUserPassword">
            <div class="inputContainer half">
              <label for="passworddefault"
                ><i class="fa-solid fa-lock"></i> Senha nova:</label
              >
              <input
                :disabled="isDisablePassword"
                id="passworddefault"
                required
                minlength="8"
                v-model="editedUserInfo.passworduser"
                v-if="userData"
                type="password"
                name="passworddefault"
                placeholder="Digite a senha nova"
              />
            </div>
            <div class="inputContainer half">
              <label for="newpassword"
                ><i class="fa-solid fa-lock"></i> Repita a senha nova:</label
              >
              <input
                :disabled="isDisablePassword"
                id="newpassword"
                required
                v-model="passworddefaultagain"
                v-if="userData"
                type="password"
                name="newpassword"
                placeholder="Repita a senha nova"
              />
            </div>
            <button v-if="!isDisablePassword" class="saveUserInfo" type="submit">
              <i class="fa-solid fa-floppy-disk"></i> Salvar
            </button>
          </form>
          <p v-if="msgUserInfo" class="msgUserInfo">{{ msgUserInfo }}</p>
          <p v-if="msgUserInfoError" class="msgUserInfo error">{{ msgUserInfoError }}</p>
          <div class="infoUserTitleContainer">
            <h3>- Informações de pet</h3>
            <button class="editUserInfo" @click="handleIsAddPet">
              <i class="fa-solid fa-plus"></i> Adicionar pet
            </button>
          </div>
          <form v-if="isAddPet" @submit.prevent="handleAddPet" class="infoUser">
            <div class="inputContainer">
              <label for="nomepet"
                ><i class="fa-solid fa-signature"></i> Nome do pet:</label
              >
              <input
                id="nomepet"
                required
                placeholder="Digite o nome do pet"
                v-model="petData.nomepet"
                type="text"
                name="nomepet"
              />
            </div>
            <div class="inputContainer half">
              <label for="nomepet"><i class="fa-solid fa-paw"></i> Espécie do pet:</label>
              <select
                name="especiepet"
                required
                id="especiepet"
                v-model="petData.especiepet"
              >
                <option value="" disabled>Selecione a espécie:</option>
                <option value="Cão">Cão</option>
                <option value="Gato">Gato</option>
              </select>
            </div>
            <div class="inputContainer half">
              <label for="nomepet"
                ><i class="fa-solid fa-venus-mars"></i> Sexo do pet:</label
              >
              <select name="sexopet" required id="sexopet" v-model="petData.sexopet">
                <option value="" disabled>Selecione o sexo:</option>
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </div>
            <div class="inputContainer">
              <label for="nascimentopet"
                ><i class="fa-solid fa-cake-candles"></i> Data de nascimento:
              </label>
              <input
                id="nascimentopet"
                v-model="petData.nascimentopet"
                type="date"
                name="nascimentopet"
              />
            </div>
            <button class="saveUserInfo" type="submit">
              <i class="fa-solid fa-plus"></i> Adicionar
            </button>
          </form>
          <p v-if="msgPetInfo" class="msgUserInfo">{{ msgPetInfo }}</p>
          <p v-if="msgPetInfoError" class="msgUserInfo error">{{ msgPetInfoError }}</p>
          <div class="petCardsContainer" v-if="userPets != null">
            <div v-for="pet in userPets" :key="pet.idpets" class="petCard">
              <div class="petPrimaryInfo">
                <div class="petInfoContainer">
                  <i
                    v-if="pet.especiepet === 'Cão' && !pet.isEditPet"
                    class="fa-solid fa-dog"
                  ></i>
                  <i
                    v-else-if="pet.especiepet === 'Gato' && !pet.isEditPet"
                    class="fa-solid fa-cat"
                  ></i>
                  <p v-if="!pet.isEditPet">{{ pet.nomepet }}</p>
                </div>
                <div class="rmvContainer">
                  <button @click="handleEditPet(pet)" class="removePet">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button @click="handleRemovePet(pet)" class="removePet">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <form @submit.prevent="editPetInfo(pet)">
                <input
                  v-if="pet.isEditPet"
                  required
                  class="petInputs"
                  type="text"
                  name="namepet"
                  placeholder="Nome do pet"
                  v-model="pet.nomepet"
                />
                <select
                  v-if="pet.isEditPet"
                  name="especiepet"
                  required
                  v-model="pet.especiepet"
                  id="especiepet"
                >
                  <option value="" disabled>Selecionar a espécie</option>
                  <option value="Cão">Cão</option>
                  <option value="Gato">Gato</option>
                </select>
                <p v-if="!pet.isEditPet">
                  <i v-if="pet.sexopet === 'Macho'" class="fa-solid fa-mars"></i>
                  <i v-else class="fa-solid fa-venus"></i>
                  {{ pet.sexopet }}
                </p>
                <select
                  v-if="pet.isEditPet"
                  name="sexopet"
                  required
                  v-model="pet.sexopet"
                  id="sexopet"
                >
                  <option value="" disabled>Selecionar sexo</option>
                  <option value="Macho">Macho</option>
                  <option value="Fêmea">Fêmea</option>
                </select>
                <p v-if="pet.nascimentopet && !pet.isEditPet">
                  <i class="fa-solid fa-cake-candles"></i>
                  {{ formatDate(pet.nascimentopet) }} -
                  {{ calculateAge(pet.nascimentopet) }}
                  anos
                </p>
                <input
                  v-if="pet.isEditPet"
                  type="date"
                  v-model="pet.nascimentopet"
                  @input="formatDate(pet.nascimentopet)"
                  name="nascimentopet"
                  required
                />
                <button type="submit" class="editPet" v-if="pet.isEditPet">Salvar</button>
              </form>
              <div class="btnContainerPet">
                <button
                  class="cancelEditPet"
                  v-if="pet.isEditPet"
                  @click="cancelPetEdit(pet)"
                >
                  Cancelar
                </button>
              </div>
              <label for="atividade"
                ><i class="fa-solid fa-message"></i> Anotações:
              </label>
              <p class="dica">Cada linha separada por vírgula.</p>
              <div class="lembretesContainer" v-if="pet.atividade">
                <p class="atividade" v-for="part in pet.atividade.split(',')" :key="part">
                  {{ part.trim() }}
                </p>
              </div>
              <div class="lembretesContainer" v-else>
                <p class="atividade">Adicione anotações e atividades.</p>
              </div>
              <textarea
                v-if="pet.isLembreteEdit"
                v-model="editedPetLembrete.atividade"
                :disabled="!pet.isLembreteEdit"
                id="atividade"
                name="atividade"
                placeholder="Anotações, atividades, etc..."
              ></textarea>
              <div class="btnLembreteContainer">
                <button
                  class="salvarAtividade"
                  v-if="pet.isLembreteEdit"
                  @click="handleEditLembrete(pet.idpets)"
                >
                  <i class="fa-solid fa-pen-to-square"></i> Salvar
                </button>
                <button
                  v-if="pet.atividade"
                  class="editAtividade"
                  :id="pet.notShow"
                  @click="toggleEditLembrete(pet)"
                >
                  <i class="fa-solid fa-pen-to-square"></i> Editar
                </button>
                <button v-else class="editAtividade" @click="toggleEditLembrete(pet)">
                  <i class="fa-solid fa-pen-to-square"></i> Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import moment from "moment";

const userData = ref(null);
const userPets = ref(null);
const isLembreteEdit = ref(true);
const msgUserImg = ref(null);
const msgUserInfo = ref(null);
const msgUserInfoError = ref(null);
const msgPetInfoError = ref(null);
const msgPetInfo = ref(null);
const isEditImage = ref(false);
const isAddPet = ref(false);
const isEditPet = ref(false);
const isDisabled = ref(true);
const isDisablePassword = ref(true);
const passworddefaultagain = ref("");
const notShow = ref("none");
let editedUserInfo = {
  nomeuser: "",
  emailuser: "",
  addressuser: "",
  residenciauser: "",
  cepuser: "",
  passworduser: "",
};
// Recupere o token do localStorage
const token = localStorage.getItem("token");

function handleIsDisabled() {
  isDisabled.value = !isDisabled.value;
}
function handleIsDisabledPassword() {
  isDisablePassword.value = !isDisablePassword.value;
}
function handleIsAddPet() {
  isAddPet.value = !isAddPet.value;
}

function formatDate(date) {
  return moment(date).format("DD/MM/YYYY");
}

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Verifique se o aniversário deste ano já ocorreu
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const toggleEditLembrete = (pet) => {
  pet.notShow = notShow.value;
  pet.isLembreteEdit = !pet.isLembreteEdit;
  editedPetLembrete.atividade = pet.atividade;
};

function handleEditPet(pet) {
  pet.isEditPet = !isEditPet.value;
}

function cancelPetEdit(pet) {
  pet.isEditPet = isEditPet.value;
}

function handleEditUserImage() {
  isEditImage.value = !isEditImage.value;
  msgUserImg.value = null;
}

const updateUserProfileData = () => {
  if (token) {
    axios
      .get("http://localhost:3000/protegido", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        userData.value = response.data.user;
        editedUserInfo.nomeuser = response.data.user.nomeuser;
        editedUserInfo.emailuser = response.data.user.emailuser;
        editedUserInfo.addressuser = response.data.user.addressuser;
        editedUserInfo.residenciauser = response.data.user.residenciauser;
        editedUserInfo.cepuser = response.data.user.cepuser;
      })
      .catch((error) => {
        console.error("Erro ao acessar o endpoint protegido:", error);
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
    const file = selectedFile.value;

    // Verifique se o arquivo é uma imagem
    if (file.type.startsWith("image/")) {
      const formData = new FormData();
      formData.append("image", file);

      // Enviar a imagem para a rota de upload no servidor
      axios
        .post("http://localhost:3000/upload-image", formData)
        .then((response) => {
          const imagePath = response.data.imagePath;
          userData.value.imguser = imagePath;
          const newToken = response.data.token;
          localStorage.setItem("token", newToken);
          msgUserImg.value = null;
          window.location.reload();
        })
        .catch((error) => {
          console.error("Erro ao fazer upload da imagem:", error);
        });
    } else {
      console.error("O arquivo selecionado não é uma imagem.");
      msgUserImg.value = "Selecione um arquivo de imagem válido.";
    }
  } else {
    console.error("Nenhum arquivo selecionado para upload.");
    msgUserImg.value = "Selecione um arquivo.";
  }
};

const handleUpdateUserInfo = () => {
  // Verifique se os campos de edição não estão desabilitados
  if (!isDisabled.value) {
    // Crie um objeto com as informações atualizadas do usuário
    const updatedUserInfo = {
      nomeuser: editedUserInfo.nomeuser,
      emailuser: editedUserInfo.emailuser,
      addressuser: editedUserInfo.addressuser,
      residenciauser: editedUserInfo.residenciauser,
      cepuser: editedUserInfo.cepuser,
    };
    axios
      .post("http://localhost:3000/atualizar-usuario", updatedUserInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Atualize os dados do usuário com os novos dados recebidos do servidor
        userData.value = response.data.user; // Suponha que o objeto retornado contenha as informações atualizadas

        // Atualize o token JWT no localStorage com o novo token
        const newToken = response.data.token;
        localStorage.setItem("token", newToken);

        // Desabilite a edição dos campos
        isDisabled.value = true;

        // Exiba uma mensagem de sucesso
        msgUserInfo.value = "Informações do usuário atualizadas com sucesso!";
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        // Limpe a mensagem de sucesso após alguns segundos (opcional)
        setTimeout(() => {
          msgUserInfo.value = null;
        }, 3000);
      })
      .catch((error) => {
        console.error("Erro ao atualizar informações do usuário:", error);
        // Exiba uma mensagem de erro
        msgUserInfo.value = "Erro ao atualizar informações do usuário.";
      });
  } else {
    // Campos de edição estão desabilitados, não há nada para enviar
  }
};

const handleUpdateUserPassword = () => {
  // Certifique-se de que a nova senha seja uma string válida
  if (typeof editedUserInfo.passworduser !== "string") {
    console.error("A nova senha não é uma string válida.");
    // Exiba uma mensagem de erro
    msgUserInfo.value = "Erro ao atualizar a senha.";
    return;
  }
  // Crie um objeto com a nova senha
  const newPasswordData = {
    newPassword: editedUserInfo.passworduser,
  };
  if (newPasswordData.newPassword !== passworddefaultagain.value) {
    msgUserInfoError.value = "As senhas não coincidem";
    setTimeout(() => {
      msgUserInfoError.value = null;
    }, 3000);
  } else {
    axios
      .post("http://localhost:3000/atualizar-senha", newPasswordData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        // Exiba uma mensagem de sucesso
        msgUserInfo.value = "Senha atualizada com sucesso!";
        setTimeout(() => {
          msgUserInfo.value = null;
        }, 3000);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a senha:", error);
        // Exiba uma mensagem de erro
        msgUserInfoError.value = "Erro ao atualizar a senha.";
        setTimeout(() => {
          msgUserInfoError.value = null;
        }, 3000);
      });
  }
};

const petData = {
  nomepet: "",
  especiepet: "",
  sexopet: "",
  nascimentopet: "",
  racapet: "",
};

const handleAddPet = () => {
  // Certifique-se de que todos os campos obrigatórios foram preenchidos
  if (!petData.nomepet || !petData.especiepet || !petData.sexopet) {
    console.error("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const selectedDate = new Date(petData.nascimentopet);
  const currentYear = new Date().getFullYear();
  if (selectedDate.getFullYear() > currentYear) {
    msgPetInfoError.value = "A data de nascimento não pode ser maior que o ano atual.";
    setTimeout(() => {
      msgPetInfoError.value = null;
    }, 3000);
    return;
  }

  // Atualize os dados do usuário antes de adicionar o pet
  updateUserProfileData();
  // Aguarde até que os dados do usuário estejam disponíveis
  if (!userData.value) {
    console.error("Dados do usuário não disponíveis.");
    return;
  }
  if (!petData.nascimentopet) {
    petData.nascimentopet = null;
  }
  // Agora você pode acessar userData e petData com segurança
  petData.idtutor = userData.value.userId; // Defina o idtutor como o ID do usuário logado
  axios
    .post("http://localhost:3000/adicionar-pet", petData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      petData.nomepet = "";
      petData.especiepet = "";
      petData.sexopet = "";
      petData.nascimentopet = "";
      // Exiba uma mensagem de sucesso
      window.location.reload();
      msgPetInfo.value = "Pet adicionado com sucesso!";
      setTimeout(() => {
        msgPetInfo.value = null;
      }, 3000);
    })
    .catch((error) => {
      console.error("Erro ao adicionar pet:", error);
      // Exiba uma mensagem de erro
      msgUserInfo.value = "Erro ao adicionar pet.";
    });
};

const fetchUserPets = () => {
  if (token) {
    axios
      .get("http://localhost:3000/pets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        userPets.value = response.data;
      })
      .catch((error) => {
        console.error("Erro ao buscar os pets:", error);
      });
  }
};

const handleRemovePet = (petToRemove) => {
  axios
    .delete(`http://localhost:3000/remover-pet/${petToRemove.idpets}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      // Verifique se a remoção foi bem-sucedida no servidor antes de atualizar a lista localmente
      if (response.status === 200) {
        // Remova o pet da lista local userPets
        userPets.value = userPets.value.filter(
          (pet) => pet.idpets !== petToRemove.idpets
        );
        // Exiba uma mensagem de sucesso (opcional)
        msgPetInfo.value = "Pet removido com sucesso!";
        setTimeout(() => {
          msgPetInfo.value = null;
        }, 3000);
      } else {
        // Exiba uma mensagem de erro se a remoção falhar (opcional)
        msgPetInfoError.value = "Erro ao remover o pet.";
        setTimeout(() => {
          msgPetInfoError.value = null;
        }, 3000);
      }
    })
    .catch((error) => {
      console.error("Erro ao remover pet:", error);
      // Exiba uma mensagem de erro
      msgPetInfoError.value = "Erro ao remover o pet.";
    });
};

const editPetInfo = (pet) => {
  try {
    const editPetData = {
      idpets: pet.idpets,
      nascimentopet: pet.nascimentopet,
      nomepet: pet.nomepet,
      sexopet: pet.sexopet,
      especiepet: pet.especiepet,
    };

    const selectedDate = new Date(editPetData.nascimentopet);
    const currentYear = new Date().getFullYear();
    if (selectedDate.getFullYear() > currentYear) {
      msgPetInfoError.value = "A data de nascimento não pode ser maior que o ano atual.";
      setTimeout(() => {
        msgPetInfoError.value = null;
      }, 3000);
      return;
    }

    // Faça uma solicitação HTTP para atualizar o lembrete do pet
    axios
      .post(
        `http://localhost:3000/pets/${editPetData.idpets}/update-petinfo`,
        editPetData
      )
      .then(() => {
        // Exiba uma mensagem de sucesso ou faça qualquer ação necessária após a atualização
        isEditPet.value = false;
        msgPetInfo.value = "Informações do pet atualizadas!!";
        setTimeout(() => {
          msgPetInfo.value = null;
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error("Erro ao atualizar o pet:", error);
        // Exiba uma mensagem de erro ou trate-o conforme necessário
      });
  } catch (error) {
    console.error("Erro ao atualizar o pet:", error);
  }
};

const editedPetLembrete = {
  atividade: "",
};

function handleEditLembrete(petId) {
  try {
    // Construa um objeto contendo os dados de atualização do lembrete
    const updatedLembreteData = {
      atividade: editedPetLembrete.atividade,
    };

    // Faça uma solicitação HTTP para atualizar o lembrete do pet
    axios
      .post(
        `http://localhost:3000/pets/${petId}/update-lembrete`,
        updatedLembreteData
      )
      .then(() => {
        // Exiba uma mensagem de sucesso ou faça qualquer ação necessária após a atualização
        isLembreteEdit.value = true;
        msgPetInfo.value = "Lembrete atualizado com sucesso!";
        setTimeout(() => {
          msgPetInfo.value = null;
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.error("Erro ao atualizar lembrete do pet:", error);
        // Exiba uma mensagem de erro ou trate-o conforme necessário
      });
  } catch (error) {
    console.error("Erro ao atualizar lembrete do pet:", error);
  }
}

const handleRemoveAccount = async () => {
  try {
    const response = await axios.delete(
      "http://localhost:3000/remover-conta"
    );
    if (response.status === 200) {
      localStorage.removeItem("token");
      window.location.reload();
    } else {
      console.error("Erro ao remover a conta do usuário");
    }
  } catch (error) {
    console.error("Erro ao remover a conta do usuário:", error);
  }
};

import { onMounted } from "vue";
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
  border-bottom: solid 2px #0000000d;
  margin-bottom: 20px;

  @media (max-width: 668px) {
    flex-direction: column;
    gap: 0px;
  }
}

.removeAccount {
  background-color: rgb(255, 106, 106);
  color: var(--dark);
  padding: 5px 10px;
  border-radius: 5px;
  width: 100%;
  transition: 0.5s;

  &.simple {
    width: inherit;
  }

  &:hover {
    transform: scale(1.05);
  }
}

.userImgContainer {
  margin-bottom: 10px;
}

.msgUserInfo {
  background-color: var(--primary-opacity);
  padding: 5px 10px;
  border-radius: 5px;
  border: solid 2px var(--primary);
  color: var(--primary);
  text-align: center;

  &.error {
    background-color: rgb(255, 106, 106);
    color: rgb(144, 15, 15);
    border: solid 2px rgb(144, 15, 15);
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
  }
}

.sideContainer {
  display: flex;
  gap: 30px;

  @media (max-width: 668px) {
    flex-direction: column;
  }

  h3 {
    margin-bottom: 10px;
    @media (max-width: 668px) {
      font-size: 18px;
    }
  }

  .sideLeft {
    flex-basis: calc(15% - 15px);
    width: 100%;
    text-align: center;

    img {
      width: 150px;
      height: 150px;
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
        transition: 0.5s;

        &:hover {
          transform: scale(1.05);
        }
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
        transition: 0.5s;
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

      input,
      select {
        background-color: #f1f1f1;
        padding: 5px;
        border-radius: 5px;
        border: solid 2px #fff;
        width: 100%;
        margin-bottom: 10px;
      }

      .editPet {
        background-color: #fff;
        color: var(--primary);
        width: 100%;
        border-radius: 5px;
        padding: 5px 10px;
        transition: 0.5s;

        &:hover {
          transform: scale(1.05);
        }
      }

      .btnContainerPet {
        display: flex;
        gap: 10px;
        margin-block: 5px;

        button {
          width: 100%;
          border-radius: 5px;
          padding: 5px 10px;
          transition: 0.5s;

          &:hover {
            transform: scale(1.05);
          }
        }

        .editPet {
          background-color: #fff;
          color: var(--primary);
        }

        .cancelEditPet {
          background-color: rgb(253, 93, 93);
          color: var(--dark);
        }
      }

      .dica {
        font-size: 12px;
        font-style: italic;
        margin-top: 5px;
      }

      .petCard {
        background-color: var(--primary);
        padding: 10px;
        border-radius: 5px;
        width: 330px;

        @media (max-width: 668px) {
          width: 100%;
        }

        .btnLembreteContainer {
          display: flex;
          gap: 10px;
        }

        .lembretesContainer {
          max-height: 114px;
          overflow-y: scroll;
          margin-bottom: 10px;
          border-radius: 5px;
          margin-top: 10px;
        }

        .salvarAtividade {
          background-color: #fff;
          color: var(--primary);
          padding: 5px 10px;
          border-radius: 5px;
          transition: 0.5s;

          &:hover {
            transform: scale(1.05);
          }

          i {
            background-color: transparent;
            padding: 0;
          }
        }

        #none {
          display: none;
        }

        .editAtividade {
          background-color: var(--dark);
          color: var(--primary);
          padding: 5px 10px;
          border-radius: 5px;
          transition: 0.5s;

          &:hover {
            transform: scale(1.05);
          }

          i {
            background-color: transparent;
            padding: 0;
          }
        }

        .atividade {
          margin-bottom: 10px;
          background-color: #fff;
          padding: 5px;
          border-radius: 5px;
          font-size: 14px;
        }

        textarea {
          background-color: #f1f1f1;
          padding: 5px;
          border-radius: 5px;
          border: solid 2px #fff;
          width: 100%;
          margin-bottom: 10px;
          max-height: 150px;
          height: 150px;
          font-size: 14px;

          &::placeholder {
            color: #1a1a1a8f;
          }

          &:focus-visible {
            outline: 2px solid var(--primary);
          }
        }

        .removePet {
          width: 100%;
          background-color: #fff;
          color: var(--dark);
          padding: 5px 8px;
          border-radius: 100%;
          transition: 0.5s;
          cursor: pointer;

          &:hover {
            transform: scale(1.05);
          }

          i {
            background-color: transparent;
            padding: 0px;
          }
        }

        .petImg {
          width: 80px;
          border-radius: 100%;
          border: solid 2px var(--dark);
        }

        p {
          margin-bottom: 10px !important;
          text-align: left;

          &:last-child {
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
          margin-bottom: 5px;
          justify-content: space-between;

          .rmvContainer {
            display: flex;
            gap: 5px;
          }

          .petInfoContainer {
            display: flex;
            gap: 5px;
          }

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
      transition: 0.5s;
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
      transition: 0.5s;

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

      @media (max-width: 668px) {
        flex-basis: 100%;
        text-align: initial;
      }

      &.half {
        flex-basis: calc(50% - 5px);

        &.half-3 {
          flex-basis: calc(33% - 5px);

          @media (max-width: 668px) {
            flex-basis: 100%;
            text-align: initial;
          }
        }

        @media (max-width: 668px) {
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
}
</style>
