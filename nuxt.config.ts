// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  modules: ['nuxt-lucide-icons', 'nuxt-swiper'],
  app: {
    head: {
      title: 'Tap Med Pharmacy',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1' },
        { name: 'description', content: 'Tap Med Pharmacy - Your trusted pharmacy' },
      ],
      // script: [
      //   { src: '/lib/bootstrap-5.3.8.min.js'},
      // ],
    },
  },
  lucide: {
    namePrefix: '',
  }, vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
        },
      }
    }
  },
  plugins: ['~/plugins/bootstrap.client.ts'],  
})
