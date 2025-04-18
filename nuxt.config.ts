export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/icon',
  ],
  site: {
    url: 'https://marcel.tuinstra.dev',
    name: 'Marcel Tuinstra',
    canonicalUrl: true,
    robots: true,
    sitemap: true,
  },
})