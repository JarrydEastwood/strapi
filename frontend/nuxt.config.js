import fs from 'fs'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Choose Nourish',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&family=Arya:wght@400;700&family=Zilla+Slab:wght@300;400;500;600;700&display=swap'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'uikit/dist/css/uikit.min.css',
    '@assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql",
      }
    }
  },

  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },
  markdownit: {
    runtime: true // Support `$md()`
  },
  
  target: 'static',

  server: {
    https: {
      key: fs.readFileSync('./localhost/localhost.decrypted.key'),
      cert: fs.readFileSync('./localhost/localhost.crt'),
    }
  }
}

