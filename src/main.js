import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Auth from '@/layouts/Auth'
import Base from '@/layouts/Base'

import './assets/styles/index.css'

import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import enUS from '@kangc/v-md-editor/lib/lang/en-US'

VueMarkdownEditor.use(vuepressTheme)
VueMarkdownEditor.lang.use('en-US', enUS)

const app = createApp(App)
app.use(store)
app.use(router)

app.use(VueMarkdownEditor)

app.component('auth-layout', Auth)
app.component('base-layout', Base)
app.config.devtools = true
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
