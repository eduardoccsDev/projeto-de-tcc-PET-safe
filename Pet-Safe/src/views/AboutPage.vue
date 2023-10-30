<template>
  <div class="container">
    <section class="page__title">
      <h1>Sobre</h1>
    </section>
    <hr />
    <h3 class="page__subTittle">Descrição da aplicação</h3>
    <section class="page__content">
      <p>
        O <span class="page__destaque">Pet Safe</span> tem como objetivo auxiliar os
        tutores a entenderem e administrarem os primeiros socorros básicos em casos de
        intoxicação, envenenamento, desmaios, vômitos, febres, dores e traumas, até que o
        atendimento veterinário profissional possa ser obtido. O sistema não substitui a
        importância de buscar ajuda de um veterinário, mas atua como uma ferramenta para
        instruir os responsáveis sobre como agir em situações básicas.
      </p>
    </section>
    <h3 class="page__subTittle">Criadores</h3>
    <section class="page__content cards">
      <TeamCard
        v-for="teamMember in teamMembersArray"
        :key="teamMember.id"
        :member-name="teamMember.name"
        :member-description="teamMember.description"
      />
    </section>
  </div>
</template>

<script setup>
import TeamCard from "../components/TeamCard.vue";

const teamMembersArray = [
  {
    id: 1,
    name: "Eduardo Castro",
    description:
      "Estudante do curso de graduação ciência da computação na Universidade Estácio de Sá.",
  },
  {
    id: 2,
    name: "Felipe Fiusa",
    description:
      "Estudante do curso de graduação ciência da computação na Universidade Estácio de Sá.",
  },
  {
    id: 3,
    name: "Matheus Nelson",
    description:
      "Estudante do curso de graduação ciência da computação na Universidade Estácio de Sá.",
  },
];
</script>

<style scoped lang="scss">
.page__content {
  &.cards {
    display: flex;
    gap: 16px;

    @media (max-width: 668px) {
      flex-direction: column;
    }
  }
}
</style>
