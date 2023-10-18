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
</script>
