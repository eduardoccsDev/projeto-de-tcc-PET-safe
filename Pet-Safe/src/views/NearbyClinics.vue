<template>
  <div class="container">
    <section class="page__title">
      <h1>Clínicas veterinárias próximas de você</h1>
    </section>
    <hr />
    <div class="user-address">
      <label for="userAddress"
        ><i class="fa-solid fa-location-dot"></i> Seu endereço:</label
      >
      <input
        v-model="userAddress"
        @input="userAddress = $event.target.value"
        placeholder="Digite seu endereço"
      />
      <button @click="searchVeterinariesNearby">
        <i class="fa-solid fa-magnifying-glass"></i> Buscar Clínicas
      </button>
      <button @click="getUserLocation">
        <i class="fa-solid fa-globe"></i> Geolocalização
      </button>
    </div>
    <!-- Exibir resultados das clínicas -->
    <div class="clinics-list">
      <div class="clinicsContainer" v-if="clinics.length > 0">
        <div class="clinicsCard" v-for="clinic in clinics" :key="clinic.place_id">
          <!-- Exibir fotos da clínica -->
          <div v-if="clinic.photos && clinic.photos.length > 0">
            <div v-for="(photo, index) in clinic.photos" :key="index">
              <img
                class="clinicImg"
                :src="getPhotoUrl(photo)"
                :alt="`Photo ${index + 1}`"
              />
            </div>
          </div>
          <div class="clinicInfo">
            <h3>{{ clinic.name }}</h3>
            <p
              class="clinicStatus"
              v-if="clinic.opening_hours && clinic.opening_hours.open_now === true"
            >
              <i class="fa-solid fa-door-open"></i> ABERTO
            </p>
            <p
              class="clinicStatus"
              v-else-if="clinic.opening_hours && clinic.opening_hours.open_now === false"
            >
              <i class="fa-solid fa-door-closed"></i> FECHADO
            </p>
            <p class="clinicRating">
              <i class="fa-solid fa-star"></i>Avaliação Média: {{ clinic.rating }} - de
              {{ clinic.user_ratings_total }} avaliações
            </p>
            <p class="clinicAddress">
              <i class="fa-solid fa-map-location-dot"></i> Enereço:
              <a :href="getGoogleMapsLink(clinic.formatted_address)" target="_blank">
                {{ clinic.formatted_address }}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p v-else>Nenhum resultado encontrado.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const userData = ref(null);
const userAddress = ref("");
const userCep = ref("");
const token = localStorage.getItem("token");

if (token) {
  axios
    .get("http://localhost:3000/protegido", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      userData.value = response.data.user;
      userCep.value = userData.value.cepuser;
      userAddress.value = userData.value.addressuser + "-" + userCep.value;
    })
    .catch((error) => {
      console.error("Erro ao acessar o endpoint protegido:", error);
    });
}

// Método para obter a localização do usuário
const getUserLocation = () => {
  userAddress.value = "";
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Use a API de geocodificação para obter o endereço a partir das coordenadas
      const address = await getAddressFromCoordinates(lat, lng);
      userAddress.value = address;
    });
  } else {
    alert("A geolocalização não é suportada pelo seu navegador.");
  }
};

// Método para obter o endereço a partir das coordenadas
const getAddressFromCoordinates = async (lat, lng) => {
  // Faça uma chamada para a API de geocodificação do Google Maps
  const apiKey = "AIzaSyCcR7yUn_K1EmYVI7PMBeXN_tOxSde2tHw";
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const results = response.data.results;
    if (results && results.length > 0) {
      return results[0].formatted_address;
    } else {
      return "Endereço não encontrado";
    }
  } catch (error) {
    console.error("Erro ao obter endereço:", error);
    return "Erro ao obter endereço";
  }
};

if (userData && userData.addressuser) {
  userAddress.value = userData.addressuser;
  searchVeterinariesNearby();
}

const clinics = ref([]);

// Método para pesquisar clínicas veterinárias próximas
const searchVeterinariesNearby = async () => {
  if (!userAddress.value) {
    alert("Por favor, insira seu endereço ou use a geolocalização para continuar.");
    return;
  }

  // Use a rota de proxy no seu servidor para acessar a API do Google Maps
  const proxyUrl = "http://localhost:3000/google-maps-proxy";
  const query = `veterinary+clinic+near+${userAddress.value}`;

  try {
    const response = await axios.get(proxyUrl, {
      params: {
        query: query,
      },
    });
    const results = response.data.results;
    if (results && results.length > 0) {
      // Armazene os resultados em clinics
      clinics.value = results;
    } else {
      // Se não houver resultados, limpe a lista
      clinics.value = [];
      console.log("Nenhuma clínica veterinária encontrada nas proximidades.");
    }
  } catch (error) {
    console.error("Erro na pesquisa de clínicas veterinárias:", error);
  }
};

const getPhotoUrl = (photo) => {
  const maxWidth = 400; // Defina a largura máxima da imagem conforme necessário
  const photoReference = photo.photo_reference;
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photoreference=${photoReference}&key=AIzaSyCcR7yUn_K1EmYVI7PMBeXN_tOxSde2tHw`;
};

// Função para obter o link do Google Maps com base no endereço
const getGoogleMapsLink = (address) => {
  // Encode o endereço para que ele possa ser incluído no URL do Google Maps
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};
</script>

<style scoped lang="scss">
.user-address {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;

  label {
    flex-basis: 100%;
    width: 100%;
  }

  input {
    flex-basis: calc(73% - 10px);
    @media (max-width: 668px) {
      flex-basis: 100%;
    }
  }

  button {
    background-color: var(--primary);
    color: var(--dark);
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.5s;
    font-size: 14px;
    flex-basis: calc(13.8% - 10px);
    width: 100%;
    @media (max-width: 668px) {
      flex-basis: 100%;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  input,
  select {
    background-color: #fff;
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

.clinicsContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
  margin-top: 10px;

  .clinicsCard {
    background-color: var(--primary-opacity);
    border: solid 2px var(--primary);
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    @media (max-width: 668px) {
      flex-direction: column;
    }

    p,
    h3 {
      margin-bottom: 5px;
    }

    .clinicImg {
      width: 100px;
      height: 100px;
      object-fit: cover;
      object-position: top;
      border-radius: 100%;
    }

    .clinicAddress {
      a {
        color: var(--primary-alt);
        transition: 0.5s;

        &:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
