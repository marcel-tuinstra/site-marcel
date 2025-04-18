<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-1 px-4 py-10">
            <UContainer class="prose dark:prose-invert py-10">
                <slot />
            </UContainer>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>