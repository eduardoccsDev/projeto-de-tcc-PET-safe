import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router, store } from './router' // Importe o router como uma exportação nomeada
import axios from 'axios';
const app = createApp(App)
// Configurar o Axios com um interceptor
axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

app.use(router)
app.use(store); // Use o Vuex store

app.mount('#app')
