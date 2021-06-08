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

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/dotenv',
    '@nuxtjs/sentry',
  ],

  axios: {},

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
    dsn: 'https://fb1db2e126ae4be381c187881956c6ea@o476979.ingest.sentry.io/5803851',
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://mijncmd.docker.localhost',
  },

  build: {},
}
