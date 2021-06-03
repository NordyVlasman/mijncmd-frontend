export default {
  ssr: false,

  head: {
    title: 'Mijncmd',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/assets/main.css',
    '~/node_modules/vue-multiselect/dist/vue-multiselect.min.css',
  ],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/apollo', '@nuxtjs/dotenv'],

  axios: {},

  loading: {
    color: 'black',
    height: '5px',
    continuous: true,
  },

  apollo: {
    cookieAttributes: {
      expires: 7,
    },
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

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:4000',
  },

  build: {},
}
