import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
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
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/perfil',
      name: 'profile',
      component: () => import('../views/ProfilePage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/clinicas',
      name: 'NearbyClinics',
      component: () => import('../views/NearbyClinics.vue'),
    },
    {
      path: '/configuracoes',
      name: 'admin',
      component: () => import('../views/AdminPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/primeiros-socorros',
      name: 'SosPet',
      component: () => import('../views/SosPet.vue'),
    }
  ]
});

export { store, router };