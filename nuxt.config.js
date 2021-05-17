export default {
  ssr: false,

  head: {
    title: 'mijncmd',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/main.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/apollo'],

  axios: {},

  loading: {
    color: 'black',
    height: '5px',
    continuous: true,
  },

  apollo: {
    tokenExpires: 7,
    includeNodeModules: true,
    authenticationType: 'Bearer',
    clientConfigs: {
      default: '~/plugins/apollo.js',
    },
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
