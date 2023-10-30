<template>
  <footer>
    <div class="container">
      <section class="content__footer">
        <p>
          O sistema Pet Safe disponibiliza informações de primeiros socorros e dicas de
          como adaptar sua residencia para receber seu pet.
        </p>
      </section>
      <section class="copyright">Todos os direitos © reservados - Pet Safe</section>
    </div>
  </footer>
  <FixedBarMobile />
</template>

<script setup>
import FixedBarMobile from "./FixedBarMobile.vue";
</script>

<style scoped lang="scss">
footer {
  background-color: var(--dark-alt);
  text-align: center;
  display: flex;
  padding-block: 20px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .content {
      &__footer {
        color: #fff;
      }
    }
    .copyright {
      color: var(--primary);
    }
  }
}
</style>
