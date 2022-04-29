export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '栄東祭2022　公式ウェブサイト',
    htmlAttrs: {
      lang: 'jp'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '栄東祭2022の公式ウェブサイトです。' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: '栄東祭2022　公式ウェブサイト' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://sh-fes.com/' },
      { hid: 'og:title', property: 'og:title', content: '栄東祭2022　公式ウェブサイト' },
      { hid: 'og:description', property: 'og:description', content: '栄東祭2022の公式ウェブサイトです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://sh-fes.com/logo.png' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      ['@nuxtjs/google-gtag', {
        id: 'G-XXXXXXXXXX',
        debug: true,
      }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
