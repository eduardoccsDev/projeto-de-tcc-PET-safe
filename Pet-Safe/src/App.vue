<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/FooterGeneral.vue";
import Sidebar from "./components/SidebarComponent.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <div id="side-content">
    <Sidebar />
    <div id="page-container">
      <TopBar />
      <div id="content-wrap">
        <RouterView />
      </div>
      <Footer />
    </div>
  </div>
</template>
