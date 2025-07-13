<template>
  <div class="min-h-screen bg-dark-blue flex flex-col">
    <Navbar />

    <main class="flex-1 lg:px-40 md:px-36 px-8 py-12">
      <!-- Hero Section -->
      <HeroSection />
      <!-- End Hero Section -->

      <!-- About  -->
      <AboutSection />
      <!-- End About -->
    </main>
  </div>
</template>

<script setup>
import AboutSection from "./components/AboutSection.vue";
import HeroSection from "./components/HeroSection.vue";
import Navbar from "./components/Navbar.vue";
</script>
