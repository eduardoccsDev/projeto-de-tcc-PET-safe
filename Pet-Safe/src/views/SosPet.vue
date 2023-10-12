<template>
  <div class="container">
    <section class="page__title" id="topo">
      <h1>Primeiros socorros</h1>
    </section>
    <hr />
    <section class="page__content">
      <div class="guiaContainer">
        <h2>Guia de informações</h2>
        <div class="guia">
          <a href="#kit-sos">Kit de primeiros socorros</a>
          <a href="#info-basicas">Informações básicas</a>
          <a href="#mucosa-hidratacao">Mucosa & Hidratação</a>
          <a href="#vomito-diarreia">Vômitos & diarreias</a>
          <a href="#ferimentos-e-cortes">Ferimentos & cortes</a>
          <a href="#queimaduras">Queimaduras</a>
          <a href="#afogamento">Afogamento</a>
          <a href="#engasgo">Ensgasgamento & asfixia</a>
          <a href="#intoxicacao">Intoxicações</a>
          <a href="#parada-cardiaca">Parada carcíaca</a>
        </div>
      </div>
      <div class="accordion" id="accordionExample">
        <SosContent />
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
import SosContent from "../components/SosContent.vue";
</script>
<style lang="scss" scoped>
.guiaContainer {
  padding: 20px;
  background-color: var(--primary);
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 20px;
  }

  .guia {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    justify-content: center;
    @media (max-width: 668px) {
      overflow-y: scroll;
      height: 129px;
    }

    a {
      text-decoration: none;
      color: var(--dark);
      background-color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      transition: 0.5s;

      &:hover {
        transform: scale(1.05);
      }

      @media (max-width: 668px) {
        width: 100%;
      }
    }
  }
}
</style>
