<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div id="side-content">
    <Sidebar />
    <div id="page-container">
      <div id="content-wrap">
        <!-- all other page content -->
        <RouterView />
      </div>
      <Footer />
    </div>
  </div>
</template>

