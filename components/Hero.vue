<script setup lang="ts">
defineProps<{
    title: string
    description: string
}>()
</script>

<template>
    <section class="text-center py-20">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {{ title }}
        </h1>
        <p class="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            {{ description }}
        </p>
    </section>
</template>