export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://marcel.tuinstra.dev',
    name: 'Marcel Tuinstra',
    canonicalUrl: true,
    robots: true,
    sitemap: true,
  },
})