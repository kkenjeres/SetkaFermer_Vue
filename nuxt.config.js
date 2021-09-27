
export default {

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */

  mode: 'universal',

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */

  // target: 'static',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: "yandex-verification", content: "ba760783ea717d37" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap' }
    ],
  },

  /*
  ** Global CSS
  */

  css: [],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */

  plugins: [
    '~/plugins/numberInput'
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */

  components: true,

  // rootDir: process.env.ROOT_DIR || undefined,

  // modulesDir: ['../../node_modules'],
  /*
  ** Nuxt.js dev-modules
  */

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa'
  ],
  /*
  ** Nuxt.js modules
  */

  modules: [

    // Doc: https://bootstrap-vue.js.org
    ['bootstrap-vue/nuxt', {
      icons: true,
    }],

    // Doc: https://github.com/rubystarashe/nuxt-vuex-localstorage
    ['nuxt-vuex-localstorage', {
      sessionStorage: ['catalog']
    }],

    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },

          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '45971295',
        webvisor: true,
        debug: true
      },
    ],
    // [
    //   '@nuxtjs/yandex-metrika',
    //   {
    //     id: '45971295',
    //     webvisor: true
    //   }
    // ],

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  pwa: {
    icon: {
      source: './static/icon.png',
      // fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    manifest: {
      lang: 'ru',
      name: 'Setka-Fermer',
      start_url: '/',
      display: 'standalone',
      theme_color: '#c1c7cd'
    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},

  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */

  content: {},

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */

  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    },
    transpile: [
      'nuxt-vuex-localstorage'
    ],
    babel: {
      compact: true
    }
  }
}
