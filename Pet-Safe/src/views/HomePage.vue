<template>
  <div class="container">
    <section class="page__title">
      <h1>Home</h1>
    </section>
    <hr />
    <HeroSection
      hero-tittle="Bem vindos ao Pet Safe"
      hero-description="Lorem ipsum dolor, lorem ipsum dolor"
      hero-btn-text="Saiba mais"
      hero-btn-link="/sobre"
    />
    <section class="page__content">
      <h3 id="introducao" class="page__subTittle">Preparando a casa</h3>
      <p>
        Após decidir acolher um novo membro peludo na família, o passo inicial é garantir
        que o ambiente esteja devidamente preparado. Essa precaução visa assegurar a
        segurança e o bem-estar tanto do animal de estimação quanto de seus tutores.
        Afinal, apesar do amor incondicional que temos por nossos amigos de quatro patas,
        evitar danos aos objetos de casa é algo que todos desejamos.
      </p>
      <p>
        Contar com um ambiente aconchegante constitui o primeiro passo essencial ao
        receber novos membros peludos na família. Contudo, a segurança dos nossos queridos
        animais de estimação é igualmente crucial. Com algumas modificações simples,
        podemos criar um ambiente ideal para eles.
      </p>
      <p>
        Comece por alocar um espaço exclusivo para o seu pet - uma área que ele compreenda
        como o seu próprio cantinho. É neste local que você disporá de itens como água,
        comida, uma caminha e outros acessórios. Além disso, siga algumas diretrizes
        fundamentais que não podem ser negligenciadas:
      </p>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            :aria-selected="
              userData && userData.residenciauser === 'Casa' ? 'true' : 'false'
            "
          >
            Casa
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="apt-tab"
            data-bs-toggle="tab"
            data-bs-target="#apt"
            type="button"
            role="tab"
            aria-controls="apt"
            :aria-selected="
              userData && userData.residenciauser === 'Apartemento' ? 'true' : 'false'
            "
          >
            Apartamento
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {{ userData.residenciauser }}
        </div>
        <div class="tab-pane fade" id="apt" role="tabpanel" aria-labelledby="apt-tab">
          <div class="cardsInfoContainer">
            <div class="info">
              <p class="info__title">Coloque redes de proteção nas janelas</p>
              <p class="info__description">
                Ter uma tela de proteção é essencial para garantir a segurança dos
                animais, seja qual for o seu andar. Seja um gato ou um cachorro, eles
                tendem a ser curiosos e não tem noção do perigo. A rede vai trazer a
                proteção necessária e evitar acidentes.
              </p>
            </div>
            <div class="info">
              <p class="info__title">Grades de proteção</p>
              <p class="info__description">
                Se você precisa delimitar espaço, invista nas grades de proteção. Ela vai
                ser muito útil para evitar a entrada do seu animal em banheiros, por
                exemplo, e outras áreas que você não ache ideal ou segura para o seu pet.
                Mas lembre-se, é importante deixar uma boa área livre para que o gato e/ou
                cachorro possa transitar e se movimentar dentro de casa.
              </p>
            </div>
            <div class="info">
              <p class="info__title">Limpeza do ambiente</p>
              <p class="info__description">
                Organizar e limpar o local demanda tempo, mas vira uma tarefa ainda mais
                importante quando se tem um animal em casa. Manter a higiene é essencial
                para você e para o pet. Evite sempre que a área do banheiro do animalzinho
                fique suja por muito tempo e faça uso do aspirador para dar conta dos
                pelos. E sobre caminhas e mantas, o ideal é limpar a cada 15 dias.
              </p>
            </div>
            <div class="info">
              <p class="info__title">Itens perigosos fora do alcance</p>
              <p class="info__description">
                Além de janelas e outras áreas que podem oferecer algum risco aos animais,
                é preciso ter cuidado com as plantas. Algumas espécies podem ter espinhos
                ou ser venenosas para pets, por isso deixe-as longe deles.
              </p>
            </div>
            <div class="info">
              <p class="info__title">Passeios são essenciais</p>
              <p class="info__description">
                E mesmo que você more em um local com muito espaço, levar o pet para
                passear é importante para o bem-estar dele. E manter uma rotina de horário
                e dias para fazer esses passeios também é importante para que o seu
                animalzinho se acostume e não fique ansioso.
              </p>
            </div>
            <div class="info">
              <p class="info__title">Pet places</p>
              <p class="info__description">
                Pet place nada mais é do que uma área de lazer completa e com outras
                facilidades dentro do próprio condomínio para animais de estimação. Ou
                seja, é o playground dos animais. Alguns empreendimentos oferecem esse
                espaço exclusivo. Eles são criados com toda a estrutura necessária para
                garantir a diversão e o bem-estar dos animais.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Além disso, é importante estar ciente de que diversos itens cotidianos podem
        representar riscos para os animais de estimação, resultando em acidentes
        domésticos, incluindo intoxicações, que são mais comuns do que muitos imaginam.
      </p>
      <p>Entre as principais causas de intoxicação de animais, podemos citar:</p>
      <div class="page__section-destaque">
        <div class="page__info-flex-container">
          <div class="page__info-flex-item">
            <div class="page__icon-container">
              <i class="fa-brands fa-pagelines"></i>
            </div>
            <p>Ingestão de plantas que possuem substâncias tóxicas para os animais.</p>
          </div>
          <div class="page__info-flex-item">
            <div class="page__icon-container">
              <i class="fa-solid fa-pills"></i>
            </div>
            <p>
              Ingestão de medicamentos que caem no chão, são deixados em locais de fácil
              acesso ou administrados de forma equivocada pelo tutor.
            </p>
          </div>
          <div class="page__info-flex-item">
            <div class="page__icon-container">
              <i class="fa-solid fa-jug-detergent"></i>
            </div>
            <p>Ingestão de produtos químicos, como os utilizados para limpeza da casa.</p>
          </div>
        </div>
      </div>
      <div class="accordion" id="accordionExample">
        <HomeAccordionContent />
      </div>
      <FixedAlert
        :have-icon="true"
        icon="fa-solid fa-user-nurse"
        alert-tittle="Pet Safe"
        alert-text="O projeto procura auxiliar os tutores a entenderem e administrarem os primeiros socorros básicos em casos de intoxicação, envenenamento, desmaios, vômitos, febres, dores e traumas, até que o atendimento veterinário profissional possa ser obtido. O sistema não substitui a importância de buscar ajuda de um veterinário, mas atua como uma ferramenta para instruir os responsáveis sobre como agir em situações básicas."
      />
    </section>
  </div>
</template>

<script setup>
import FixedAlert from "../components/FixedAlert.vue";
import HeroSection from "../components/HeroSection.vue";
import HomeAccordionContent from "../components/HomeAccordionContent.vue";
import axios from "axios";
import { ref } from "vue";
const userData = ref(null);
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
    })
    .catch((error) => {
      console.error("Erro ao acessar o endpoint protegido:", error);
    });
}
</script>
<style scoped lang="scss">
.cardsInfoContainer {
  display: flex;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;

  .info {
    background-color: var(--primary-opacity);
    border-radius: 10px;
    border: solid 2px var(--primary);
    padding: 10px;
    width: 400px;
    text-align: justify;

    &__title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5 !important;
      border-bottom: solid 2px #00000011;
      padding-bottom: 5px;
    }
  }
}
</style>
