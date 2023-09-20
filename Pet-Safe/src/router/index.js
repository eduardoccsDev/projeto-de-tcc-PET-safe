import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login-registro',
      name: 'LoginRegistro',
      component: () => import('../views/LoginRegister.vue')
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
});

export { store, router }; // Exporta o store e o router para serem usados em outros lugares