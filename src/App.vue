<template>
  <div class="min-h-screen flex flex-col">
    <SplashLoader v-if="showSplashScreen" @done="showSplashScreen = false" />
    <Navbar @toggle="handleToggle" :is-open="isOpen" />
    <SocialSidebar />

    <SocialSidebar text="mochamadgalih@gmail.com" side="right" />
    <main class="flex-1 overflow-auto fillHeight">
      <HeroSection />
      <AboutSection />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import AboutSection from "./components/AboutSection.vue";
import HeroSection from "./components/HeroSection.vue";
import Navbar from "./components/Navbar.vue";
import SocialSidebar from "./components/SocialSidebar.vue";
import Experience from "./components/Experience.vue";
import SplashLoader from "./components/SplashLoader.vue";
import Footer from "./components/Footer.vue";
import Project from "./components/Project.vue";
import Contact from "./components/Contact.vue";

const showSplashScreen = ref(true);

const isOpen = ref(false);
const handleToggle = () => {
  isOpen.value = !isOpen.value;
};

provide("isOpen", isOpen);
provide("toggle", handleToggle);
</script>
