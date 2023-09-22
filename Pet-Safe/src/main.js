import './assets/scss/main.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { router, store } from './router';
import axios from 'axios';

const app = createApp(App);
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      // Se não houver token, redirecione para a página home
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

app.use(router);
app.use(store);

app.mount('#app')
