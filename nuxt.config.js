// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
      'primevue/resources/themes/lara-dark-purple/theme.css',
      'primevue/resources/primevue.css',
      'primeicons/primeicons.css',
      '~/assets/css/main.css'
    ],

    modules: [
      '@pinia/nuxt',
    ],

    build: {
      transpile: [
        'primevue'
      ]
    },

    runtimeConfig: {
      public: {
        rssFeeds: [
          'https://www.protothema.gr/rss'
        ]
      }
    }

  })
