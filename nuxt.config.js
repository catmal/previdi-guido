export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    fallback: '404.html',
    routes: ['/servizi/aiuole', '/servizi/prati', '/servizi/parchi-e-giardini']
  },
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    },
    {
      rel: "preconnect",
      href: "https://prismic.io/",
      crossorigin: true
    },
    {
      rel: "preconnect",
      href: "https://vivai-previdi.prismic.io",
      crossorigin: true
    },
    {
      rel: "preconnect",
      href: "https://cdn.materialdesignicons.com",
      crossorigin: true
    },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Benne:300,400,500,600,700", },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=BenchNine:300,500,700", }],
    script: [{
      "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    }]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vue-essential-slices/src/styles/styles.scss", '~/assets/css/style.css', '~/assets/scss/main.scss'],
  router: {
    trailingSlash: false,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-purgecss'],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/buefy

    '@nuxtjs/sitemap',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/style-resources',
    'nuxt-buefy', ["@nuxtjs/prismic", {
      "endpoint": "https://vivai-previdi.cdn.prismic.io/api/v2",
      "apiOptions": {
        "routes": [{
          "type": "page",
          "path": "/:uid"
        },
        ]
      }
    }], ["nuxt-sm"]],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  styleResources: {
    scss: [
      '~/assets/scss/main.scss',
    ]
  },
  purgeCSS: {
    enabled: true,
    // enabled: ({ isDev, isClient }) => (!isDev && isClient), 
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    styleExtensions: ['.css'],
    whitelist: ['body', 'html', 'nuxt-progress', 'b-modal', 'b-carousel', 'column', 'b-input'],
    whitelistPatterns: [/(nav).*/, /(input).*/, /(is)-*/, /(has)-*/, /(b-tab)*/, /(b-field)*/, /(b-input)*/],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ]
  },
  sitemap: {
    hostname: 'https://previdiguido.it',
    gzip: true,
    exclude: [
      '/thanks',

    ],
    routes: [
      '/azienda',
      '/lavori/',
      '/servizi/aiuole',
      '/servizi/prati',
      '/servizi/parchi-e-giardini',
      '/servizi/impianti-irrigazione',
      '/servizi/potatura-aerea',
      '/servizi/allestimenti-eventi',
      '/servizi/trattamenti-fitosanitari',
      '/servizi/endoterapia',
      '/servizi/lavori-vari',


    ]
  },
  build: {
    standalone: true,
    transpile: ["vue-slicezone", "nuxt-sm"],
    extractCSS: true
  },
  storybook: {
    stories: ["~/slices/**/*.stories.js", "~/slices/**/*.stories.js"]
  },
  watchers: {
    webpack: {
      ignored: /node_modules/
    }
  },
  ignore: ["**/*.stories.js", "**/*.stories.js"]
};