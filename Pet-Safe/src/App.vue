<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Message from './components/Message.vue';
import Sidebar from './components/Sidebar.vue';

import { ref } from 'vue';

const showMessage = ref(true);

function closeMessage() {
  showMessage.value = false;
}

</script>

<template>
  <div id="side-content">
    <Sidebar />
    <div id="page-container">
      <Message msg-text="Apenas um teste." :is-action="true" action-link="#teste" @close="closeMessage" />
      <div id="content-wrap">
        <!-- all other page content -->
        <RouterView />
      </div>
      <Footer />
    </div>
  </div>
</template>



