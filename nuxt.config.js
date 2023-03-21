// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
      'primevue/resources/themes/lara-dark-purple/theme.css',
      'primevue/resources/primevue.css',
      'primeicons/primeicons.css',
    ],

    modules: [
      '@pinia/nuxt',
    ],

    build: {
      transpile: [
        'primevue'
      ]
    },
  })
