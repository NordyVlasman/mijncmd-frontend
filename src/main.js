import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Auth from '@/layouts/Auth'
import Base from '@/layouts/Base'

import './assets/styles/index.css'

const app = createApp(App)
app.use(store)
app.use(router)

app.component('auth-layout', Auth)
app.component('base-layout', Base)
app.config.devtools = true
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
