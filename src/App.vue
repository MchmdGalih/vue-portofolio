<template>
  <div class="min-h-screen flex flex-col">
    <SplashLoader v-if="showSplashScreen" @done="showSplashScreen = false" />
    <div v-else>
      <Navbar @toggle="handleToggle" :is-open="isOpen" />
      <SocialSidebar />
      <main class="flex-1 fillHeight">
        <HeroSection ref="heroRef" />
        <AboutSection />
        <Experience />
        <Project />
        <Certificate />
        <Contact />
        <Footer />
      </main>
    </div>
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
import Certificate from "./components/Certificate.vue";

const isOpen = ref(false);
const handleToggle = () => {
  isOpen.value = !isOpen.value;
};
const showSplashScreen = ref(true);

provide("isOpen", isOpen);
provide("toggle", handleToggle);
</script>
