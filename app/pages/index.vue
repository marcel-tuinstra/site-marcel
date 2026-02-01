<script setup lang="ts">
const { locale } = useI18n()
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').where('locale', '=', locale.value).first()
}, {
  watch: [locale]
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const route = useRoute()
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
