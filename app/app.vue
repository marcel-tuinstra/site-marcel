<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

const { public: { siteUrl } } = useRuntimeConfig()
const { seo, global } = useAppConfig()
const ogImageUrl = computed(() => new URL('/images/og-light.png', siteUrl).toString())
const jsonLd = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: seo?.siteName || 'Marcel Tuinstra',
      url: siteUrl,
      image: global?.picture?.light || undefined,
      sameAs: [
        'https://airporttoday.app',
        'https://subtrack.nl',
        'https://tuinstra.dev',
        'https://github.com/marcel-tuinstra',
        'https://www.linkedin.com/in/marcel-tuinstra-6a98895a'
      ]
    },
    {
      '@type': 'WebSite',
      name: seo?.siteName || 'Marcel Tuinstra',
      url: siteUrl
    }
  ]
}))

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '%s',
  ogSiteName: seo?.siteName,
  ogUrl: siteUrl,
  ogImage: ogImageUrl,
  twitterImage: ogImageUrl,
  twitterCard: 'summary_large_image'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: jsonLd
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
