// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  devServer: {
    port: 3000
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts']
})
