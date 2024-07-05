import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { messages } from '@/domain/locales'

import App from './App.vue'
import router from './router'
import { useUserStore } from '@/store/user'
import { useCardsStore } from '@/store/cards'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages
})

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

const userStore = useUserStore()
const cardStore = useCardsStore()

if (localStorage.getItem('mochi-user')) {
  userStore.user = JSON.parse(localStorage.getItem('mochi-user'))
  cardStore.init()
}

app.mount('#app')
