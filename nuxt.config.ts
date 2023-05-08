// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: '@nuxt-themes/elements',
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true
  }
})
