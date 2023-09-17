import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
})

export default router
