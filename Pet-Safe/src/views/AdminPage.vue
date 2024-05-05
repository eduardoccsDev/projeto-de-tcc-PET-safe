<template>
  <div class="container">
    <section class="page__title">
      <h1>Usuários cadastrados</h1>
    </section>
    <hr />
    <section class="page__content">
      <div class="accordion" id="accordionExample">
        <div
          :class="'accordion-item id-' + user.idusers"
          v-for="user in userData"
          :key="user.idusers"
        >
          <h2 class="accordion-header" :id="user.idusers">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#id-' + user.idusers"
              aria-expanded="false"
              :aria-controls="'id-' + user.idusers"
            >
              <img v-if="user && user.imguser" class="accordion-user-img" :alt="user.nomeuser" :src="user.imguser" width="45" height="45">
              <img v-else src="../assets/images/logo.png" class="accordion-user-img" alt="pet-safe-logo" id="logo" />
               {{ user.nomeuser }} <span class="accordion-user-id">ID: {{ user.idusers }}</span>
            </button>
          </h2>
          <div
            :id="'id-' + user.idusers"
            class="accordion-collapse collapse"
            :aria-labelledby="user.idusers"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <form @submit.prevent="handleEditInfos(user)">
                <label for="nomeuser"><i class="fa-solid fa-user"></i> Nome:</label>
                <input
                  id="nomeuser"
                  :disabled="!isEdit"
                  type="text"
                  v-model="user.nomeuser"
                  placeholder="Digite o nome do usuário"
                  required
                />
                <label for="emailuser"><i class="fa-solid fa-envelope"></i> E-mail:</label>
                <input
                  id="emailuser"
                  :disabled="!isEdit"
                  type="email"
                  v-model="user.emailuser"
                  placeholder="Digite o e-mail do usuário"
                  required
                />
                <label for="addressuser"><i class="fa-solid fa-map-location"></i> Endereço:</label>
                <input
                  id="addressuser"
                  :disabled="!isEdit"
                  type="text"
                  v-model="user.addressuser"
                  placeholder="Digite o endereço do usuário"
                  required
                />
                <label for="cepuser"><i class="fa-solid fa-address-card"></i> CEP:</label>
                <input
                  id="cepuser"
                  :disabled="!isEdit"
                  type="number"
                  v-model="user.cepuser"
                  placeholder="Digite o CEP do usuário"
                  required
                />
                <label for="residenciauser"><i class="fa-solid fa-house"></i> Residência:</label>
                <select :disabled="!isEdit" v-model="user.residenciauser">
                  <option selected disabled value="">
                    Selecione o tipo de residência
                  </option>
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                </select>
                <div class="btnContainer">
                  <button @click="handleIsEdit" v-if="!isEdit" class="btn__edit">
                    <i class="fa-solid fa-pen-to-square"></i> Editar
                  </button>
                  <button type="submit" v-else class="btn__save">
                    <i class="fa-solid fa-floppy-disk"></i> Salvar
                  </button>
                  <button @click="handleRemoveAccount(user)" class="btn__delete">
                    <i class="fa-solid fa-trash"></i> Excluir
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const editedUsers = ref({});
const userData = ref(null);
const isEdit = ref(false);

const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    userData.value = response.data;

    // Inicializar editedUsers e isEditing para cada usuário
    userData.value.forEach((user) => {
      editedUsers.value[user.idusers] = { ...user };
    });
  } catch (error) {
    console.error("Erro na solicitação Axios:", error);
  }
};

function handleIsEdit() {
  isEdit.value = !isEdit.value;
}

const handleRemoveAccount = async (user) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/remover-user/${user.idusers}`
    );
    if (response.status === 200) {
      window.location.reload();
    } else {
      console.error("Erro ao remover a conta do usuário");
    }
  } catch (error) {
    console.error("Erro ao remover a conta do usuário:", error);
  }
};

const handleEditInfos = async (user) => {
  // Verifique se os campos de edição estão habilitados
  if (isEdit.value) {
    // Crie um objeto com as informações atualizadas do usuário
    const updatedUserInfo = {
      nomeuser: user.nomeuser,
      emailuser: user.emailuser,
      addressuser: user.addressuser,
      residenciauser: user.residenciauser,
      cepuser: user.cepuser,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/atualizar-usuario/${user.idusers}`,
        updatedUserInfo
      );
      if (response.status === 200) {
        isEdit.value = false; // Desativar o modo de edição após uma atualização bem-sucedida
      } else {
        console.error("Erro ao atualizar as informações do usuário");
      }
    } catch (error) {
      console.error("Erro ao atualizar as informações do usuário:", error);
    }
  }
};

getUsers(); // Chamada inicial para buscar os dados quando o componente é montado
</script>

<style scoped lang="scss">
.id-36 {
  display: none;
}

label {
  width: 10%;
  margin-bottom: 10px;
  color:#484C4B;
}

input,
select {
  width: 90%;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: solid 2px var(--secondary);
  background: #fff;
}
input:disabled, select:disabled {
  color: #acacac;
  border-color: #acacac;
}

.btnContainer {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;

  button {
    transition: 0.5s;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      transform: scale(1.05);
    }
  }

  .btn {
    &__edit,
    &__save {
      background-color: var(--secondary);
      color: var(--secondary-dark);
    }

    &__delete {
      background-color: rgb(218, 86, 86);
      color: #fff;
    }
  }
}
.accordion-header{
  .accordion-user-img{
    border-radius: 100%;
    border: solid 2px var(--secondary-dark);
    margin-right: 5px;
  }
}
.accordion-button::after{
  background-color: var(--secondary);
  border-radius: 100%;
  background-position: center;
  width: 1.50rem;
  height: 1.50rem;
}
.accordion-user-id{
  margin-left: 10px;
  background-color: var(--secondary);
  color: #484C4B;
  padding: 5px;
  border-radius: 5px;
}
.accordion-item{
  border-radius: 10px;
  border: none;
  &::after {
  content: "";
  border-bottom: solid 2px #e5e4e1;
  width: 100%;
  padding: 1px;
  display: block;
} 
}
</style>
