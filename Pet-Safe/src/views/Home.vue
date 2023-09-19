<template>
    <div class="container">
      <section class="page__title">
        <h1>Home</h1>
      </section>
      <hr>
      <HeroSection
        hero-tittle="Bem vindos ao Pet Safe"
        hero-description="Lorem ipsum dolor, lorem ipsum dolor"
        hero-btn-text="Saiba mais"
        hero-btn-link="/sobre"
        hero-img="src/assets/images/caes-e-gatos.jpg"
      />
      <section class="page__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </section>
      <FixedAlert
        :have-icon="true"
        icon="fa-solid fa-user-nurse"
        alert-tittle="Alerta fixo de teste"
        alert-text="Lorem ipsum dolor lorem, lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor"
      />
    </div>
  </template>
  
  <script setup>
  import FixedAlert from '../components/FixedAlert.vue';
  import HeroSection from '../components/HeroSection.vue';
  </script>  