import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router, store } from './router' // Importe o router como uma exportação nomeada
const app = createApp(App)

app.use(router)
app.use(store); // Use o Vuex store

app.mount('#app')
