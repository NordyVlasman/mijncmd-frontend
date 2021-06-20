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

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
  ],

  modules: ['@nuxtjs/pwa', '@nuxtjs/apollo', '@nuxtjs/sentry'],

  loading: {
    color: 'black',
    height: '5px',
    continuous: true,
  },

  moment: {
    defaultLocale: 'nl',
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

  sentry: {
    dsn: process.env.SENTRY_DSN,
  },

  pwa: {
    meta: {
      title: 'MijnCMD',
      author: 'CMD Leeuwarden',
    },
    manifest: {
      lang: 'nl',
      background_color: '#FFFFFF',
      theme_color: '#bababa',
    },
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://api.nordyvlasman.nl',
  },

  build: {},
}
