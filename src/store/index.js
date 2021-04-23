import { createLogger, createStore } from 'vuex'
import authModule from './modules/auth'
import postsModule from './modules/posts'

export default createStore({
  namespaced: true,
  modules: {
    auth: authModule,
    posts: postsModule
  },
  plugins: [
    createLogger()
  ]
})
