<template>
  <div class="container">
    <section class="page__title">
      <h1>Usuários cadastrados</h1>
    </section>
    <hr />
    {{ console.log(userData) }}
    <section class="page__content">
      {{ console.log("teste: ", userData) }}
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="user in userData" :key="user.idusers">
          <h2 class="accordion-header" :id="user.idusers">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#id-' + user.idusers"
              aria-expanded="false"
              :aria-controls="'id-' + user.idusers"
            >
              <i class="fa-solid fa-user"></i> {{ user.nomeuser }}
            </button>
          </h2>
          <div
            :id="'id-' + user.idusers"
            class="accordion-collapse collapse"
            :aria-labelledby="user.idusers"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p>Id: {{ user.idusers }}</p>
              <label for="nomeuser">Nome:</label>
              <input
                id="nomeuser"
                :disabled="!isEdit"
                type="text"
                v-model="user.nomeuser"
                placeholder="Digite o nome do usuário"
                required
              />
              <label for="emailuser">E-mail:</label>
              <input
                id="emailuser"
                :disabled="!isEdit"
                type="text"
                v-model="user.emailuser"
                placeholder="Digite o e-mail do usuário"
                required
              />
              <label for="addressuser">Endereço:</label>
              <input
                id="addressuser"
                :disabled="!isEdit"
                type="text"
                v-model="user.addressuser"
                placeholder="Digite o endereço do usuário"
                required
              />
              <label for="cepuser">CEP:</label>
              <input
                id="cepuser"
                :disabled="!isEdit"
                type="text"
                v-model="user.cepuser"
                placeholder="Digite o CEP do usuário"
                required
              />
              <label for="residenciauser">Residência:</label>
              <select v-model="user.residenciauser">
                <option selected disabled value="">Selecione o tipo de residência</option>
                <option value="Casa">Casa</option>
                <option value="Apartamento">Apartamento</option>
              </select>
              <div class="btnContainer">
                <button @click="handleIsEdit" v-if="!isEdit" class="btn__edit">
                  <i class="fa-solid fa-pen-to-square"></i> Editar
                </button>
                <button v-else class="btn__save">
                  <i class="fa-solid fa-floppy-disk"></i> Salvar
                </button>
                <button @click="handleRemoveAccount(user.idusers)" class="btn__delete">
                  <i class="fa-solid fa-trash"></i> Excluir
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
import { ref } from "vue";
import axios from "axios";

const userData = ref(null);
const isEdit = ref(false);

function handleIsEdit() {
  isEdit.value = !isEdit.value;
}

const getUsers = async () => {
  try {
    const response = await axios.get("https://prickly-robe-eel.cyclic.cloud/users");
    userData.value = response.data;
  } catch (error) {
    console.error("Erro na solicitação Axios:", error);
  }
};

const handleRemoveAccount = async (userId) => {
  try {
    const response = await axios.delete(
      `https://prickly-robe-eel.cyclic.cloud/remover-conta:${userId}`
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

getUsers(); // Chamada inicial para buscar os dados quando o componente é montado
</script>
<style scoped lang="scss">
label {
  width: 10%;
  margin-bottom: 10px;
}
input,
select {
  width: 90%;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  border: solid 1px var(--dark);
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
      background-color: var(--primary);
      color: var(--dark);
    }

    &__delete {
      background-color: rgb(218, 86, 86);
      color: #fff;
    }
  }
}
</style>
