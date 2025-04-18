<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
    queryCollection('content').path('/').first())

useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
})
</script>

<template>
    <UContainer class="py-20">
        <Hero :title="home.title" :description="home.description" />
    </UContainer>
</template>