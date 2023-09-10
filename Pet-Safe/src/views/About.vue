<template>
    <div class="container">
        <section class="page__title">
            <h1>Sobre</h1>
        </section>
        <h3 class="page__subTittle">Criadores</h3>  
        <section class="page__content">
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
import TeamCard from '../components/TeamCard.vue';

const teamMembersArray = [
  { id: 1, name: 'Eduardo Castro', description: 'Lorem ipsum dolor lorem Lorem ipsum dolor lorem Lorem ipsum dolor lorem' },
  { id: 2, name: 'Eduardo Castro', description: 'Lorem ipsum dolor lorem Lorem ipsum dolor lorem Lorem ipsum dolor lorem' },
  { id: 3, name: 'Eduardo Castro', description: 'Lorem ipsum dolor lorem Lorem ipsum dolor lorem Lorem ipsum dolor lorem' }
];

</script>

<style scoped lang="scss">
.page__content{
    display: flex;
    gap: 16px;
}
</style>