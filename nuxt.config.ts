// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://marcel.tuinstra.dev'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/i18n',
    'nuxt-studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  runtimeConfig: {
    public: {
      siteUrl
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'marcel-tuinstra',
      repo: 'site-marcel',
      branch: 'main'
    }
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    baseUrl: siteUrl,
    lazy: true,
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json', iso: 'en-US', language: 'en-US' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json', iso: 'nl-NL', language: 'nl-NL' }
    ],
    vueI18n: 'i18n.config.ts'
  }
})
