<script setup lang="ts">
const route = useRoute()
const resolvedLocale = computed<'en' | 'nl'>(() => route.path === '/nl' || route.path.startsWith('/nl/') ? 'nl' : 'en')
const pageKey = computed(() => `index-page-${resolvedLocale.value}`)

const { data: page } = await useAsyncData(pageKey, () => {
  return queryCollection('index').where('locale', '=', resolvedLocale.value).first()
}, {
  watch: [resolvedLocale]
})

const { public: { siteUrl } } = useRuntimeConfig()
const canonicalUrl = computed(() => new URL(route.path, siteUrl).toString())

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
  ogType: 'website',
  ogUrl: canonicalUrl
})

definePageMeta({
  key: route => `index-${route.fullPath}`
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <!--    <LandingTestimonials :page /> -->
    <!--    <LandingFAQ :page /> -->
  </UPage>
</template>
