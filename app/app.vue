<script setup lang="ts">
const colorMode = useColorMode()
const { t, locale, locales } = useI18n()
const localeHead = useLocaleHead({ dir: true, lang: true, seo: true })
const navLinks = useNavLinks()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

const { public: { siteUrl } } = useRuntimeConfig()
const { seo, global } = useAppConfig()
const ogImageUrl = computed(() => new URL('/images/og-light.png', siteUrl).toString())
const siteName = seo?.siteName || 'Marcel Tuinstra'
const personDescription = computed(() => t('person.description'))
const getLocaleLanguage = (value: unknown) => {
  if (typeof value === 'string') {
    return value
  }
  if (value && typeof value === 'object') {
    const localeValue = value as { language?: string, iso?: string, code?: string }
    return localeValue.language || localeValue.iso || localeValue.code || null
  }
  return null
}
const currentLanguage = computed<string>(() => {
  const current = locales.value.find(value => typeof value === 'object' && value.code === locale.value)
  return getLocaleLanguage(current) || locale.value
})
const ogLocale = computed(() => currentLanguage.value.replace('-', '_'))
const ogLocaleAlternate = computed(() => locales.value
  .map(value => getLocaleLanguage(value))
  .filter((value): value is string => Boolean(value) && value !== currentLanguage.value)
  .map(value => value.replace('-', '_')))
const jsonLd = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      'name': seo?.siteName || 'Marcel Tuinstra',
      'url': siteUrl,
      'image': global?.picture?.light || undefined,
      'jobTitle': 'Full-Stack Developer',
      'description': personDescription.value,
      'homeLocation': {
        '@type': 'Place',
        'name': 'Dronten, Netherlands'
      },
      'knowsAbout': [
        'Full-stack development',
        'Frontend development',
        'Backend development',
        'Vue.js',
        'Nuxt',
        'Symfony',
        'TypeScript',
        'PHP'
      ],
      'sameAs': [
        'https://airporttoday.app',
        'https://subtrack.nl',
        'https://tuinstra.dev',
        'https://github.com/marcel-tuinstra',
        'https://www.linkedin.com/in/marcel-tuinstra-6a98895a'
      ]
    },
    {
      '@type': 'WebSite',
      'name': seo?.siteName || 'Marcel Tuinstra',
      'url': siteUrl
    }
  ]
}))

useHead(() => ({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: siteName },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    ...(localeHead.value.meta || [])
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    ...(localeHead.value.link || [])
  ],
  htmlAttrs: {
    ...localeHead.value.htmlAttrs
  }
}))

useSeoMeta({
  titleTemplate: '%s',
  ogSiteName: seo?.siteName,
  ogUrl: siteUrl,
  ogLocale: ogLocale,
  ogLocaleAlternate: ogLocaleAlternate,
  ogImage: ogImageUrl,
  twitterImage: ogImageUrl,
  twitterCard: 'summary_large_image'
})

useHead({
  script: [
    {
      key: 'ld-json',
      type: 'application/ld+json',
      innerHTML: jsonLd
    }
  ]
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('blog')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('blog')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <CookieConsent />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
