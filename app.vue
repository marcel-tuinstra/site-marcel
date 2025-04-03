// app.vue
<template>
    <div>
        <!-- Global Header with Navigation using Nuxt UI components -->
        <header class="bg-gray-800 p-4">
            <nav class="flex space-x-4">
                <NuxtLink to="#hero" class="text-white">Home</NuxtLink>
                <NuxtLink to="#about" class="text-white">About</NuxtLink>
                <NuxtLink to="#projects" class="text-white">Projects</NuxtLink>
                <NuxtLink to="#contact" class="text-white">Contact</NuxtLink>
            </nav>
        </header>

        <!-- Hero Section with a Card from Nuxt UI -->
        <section id="hero" class="bg-blue-800 text-white py-16 text-center">
            <NuxtCard class="mx-auto p-8 bg-white text-gray-800 shadow-xl max-w-lg">
                <h1 class="text-3xl font-bold mb-4">Welcome to Marcel's Developer Portfolio!</h1>
                <p class="mb-4">Explore my work, skills, and contact information.</p>
                <NuxtButton to="#about" class="bg-blue-500 text-white hover:bg-blue-600">Learn More</NuxtButton>
            </NuxtCard>
        </section>

        <!-- About Section -->
        <section id="about" class="bg-gray-100 py-16 text-center">
            <h2 class="text-2xl font-semibold">About Me</h2>
            <p>Details about you...</p>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-16 text-center">
            <h2 class="text-2xl font-semibold">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <NuxtCard class="bg-white shadow-lg">
                    <h3 class="text-xl font-bold">Project 1</h3>
                    <p>A brief description of the project...</p>
                </NuxtCard>
                <NuxtCard class="bg-white shadow-lg">
                    <h3 class="text-xl font-bold">Project 2</h3>
                    <p>A brief description of the project...</p>
                </NuxtCard>
                <NuxtCard class="bg-white shadow-lg">
                    <h3 class="text-xl font-bold">Project 3</h3>
                    <p>A brief description of the project...</p>
                </NuxtCard>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="bg-gray-100 py-16 text-center">
            <h2 class="text-2xl font-semibold">Contact</h2>
            <p>Provide your contact details...</p>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-4 text-center">
            <p>&copy; 2025 Marcel Tuinstra</p>
        </footer>
    </div>
</template>

<script setup>
// Optionally, you can import components directly if necessary
// import { NuxtCard, NuxtButton } from '@nuxt/ui'
</script>

<style scoped>
/* Your global styles */
header {
    background-color: #333;
    color: white;
}

footer {
    background-color: #333;
    color: white;
}

section {
    padding: 20px;
    margin-bottom: 40px;
}

#hero {
    background-color: #2c3e50;
    color: white;
    padding: 50px;
}

h1 {
    font-size: 2em;
}
</style>