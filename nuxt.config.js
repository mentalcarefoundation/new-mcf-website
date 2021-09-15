export default {
  target: 'static',

  head: {
    titleTemplate: '%s | MCF',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MCF website' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  css: [
    // CSS file in the project
    '~/assets/css/custom.css',
  ],

  plugins: [],

  components: true,
  loading: '~/components/Loader.vue',
  pageTransition: 'page',
  
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {}
}
