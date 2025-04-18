import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    typescript: {
        shim: false
    },

    modules: [
        '@nuxthq/studio',
        '@nuxtjs/seo',
        '@nuxt/content',
        '@nuxt/ui',
    ],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    css: ['~/assets/css/main.css'],
    ui: {
        icons: 'lucide'
    },

    seo: {
        siteName: 'Marcel Tuinstra – Fullstack Developer',
        description: 'Clean UIs. Solid architecture. A modern Nuxt portfolio.',
        ogImage: '/og-image.jpg',
        twitterCard: 'summary_large_image',
        themeColor: '#0f172a'
    },

    compatibilityDate: '2025-04-18',
})