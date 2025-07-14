<template>
  <div class="min-h-screen flex flex-col">
    <Navbar @toggle="handleToggle" :is-open="isOpen" />

    <main class="flex-1 relative overflow-auto lg:px-40 md:px-36 px-8">
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
import { provide, ref } from "vue";
const isOpen = ref(false);

const handleToggle = () => {
  isOpen.value = !isOpen.value;
};

provide("isOpen", isOpen);
provide("toggle", handleToggle);

import AboutSection from "./components/AboutSection.vue";
import HeroSection from "./components/HeroSection.vue";
import Navbar from "./components/Navbar.vue";
</script>
