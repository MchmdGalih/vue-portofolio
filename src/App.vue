<template>
  <div class="min-h-screen flex flex-col">
    <Navbar @toggle="handleToggle" :is-open="isOpen" />

    <SocialSidebar :icons="social" />
    <SocialSidebar text="mochamadgalih@gmail.com" side="right" />
    <main class="flex-1 overflow-auto lg:px-40 md:px-28 sm:px-24 px-6">
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
import AboutSection from "./components/AboutSection.vue";
import HeroSection from "./components/HeroSection.vue";
import Navbar from "./components/Navbar.vue";
import SocialSidebar from "./components/SocialSidebar.vue";

const social = [
  {
    name: "fa-github",
    url: "https://github.com/MchmdGalih",
  },
  {
    name: "fa-linkedin",
    url: "https://www.linkedin.com/in/mochamad-galih-sulistio-pratama",
  },
  {
    name: "fa-instagram",
    url: "https://www.instagram.com/__mochgalih/",
  },
];

const isOpen = ref(false);
const handleToggle = () => {
  isOpen.value = !isOpen.value;
};

provide("isOpen", isOpen);
provide("toggle", handleToggle);
</script>
