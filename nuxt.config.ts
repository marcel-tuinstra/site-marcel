// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://marcel.tuinstra.dev'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-gtag'
  ],

  gtag: {
    initCommands: [
      ['consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500
      }]
    ]
  },

  site: {
    url: siteUrl
  },

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

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    baseUrl: siteUrl,
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json', iso: 'en-US', language: 'en-US' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json', iso: 'nl-NL', language: 'nl-NL' }
    ],
    vueI18n: 'i18n.config.ts'
  }
})
