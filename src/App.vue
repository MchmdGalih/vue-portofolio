<template>
  <main
    class="max-w-full bg-stone-100 min-h-screen md:flex flex-justify-center items-center py-2 px-2"
  >
    <GridWrapper>
      <GridBox
        customClass="col-span-12 w-full flex flex-col justify-center items-center grid-item"
      >
        <Header />
      </GridBox>

      <GridBox
        custom-class="md:col-span-3 md:row-span-1 col-span-12 row-span-1 border border-solid grid-item"
      >
        <Profile />
      </GridBox>

      <GridBox
        customClass="md:col-span-6 md:row-span-1 col-span-6 row-span-1 grid-item"
      >
        <Social />
      </GridBox>

      <GridBox
        customClass="md:col-span-3 md:row-span-2 col-span-6 row-span-1 rounded-md border grid-item"
      >
        <About />
      </GridBox>

      <GridBox
        class="md:col-span-7 md:row-span-2 col-span-12 row-span-1 border rounded-md relative grid-item"
      >
        <Projects />
      </GridBox>

      <GridBox
        customClass="md:col-span-2 md:row-span-1 col-span-12 row-span-1 border rounded-md grid-item"
      >
        <Hire />
      </GridBox>

      <GridBox
        class="md:col-span-5 md:row-span-1 col-span-12 border rounded-md grid-item"
      >
        <Skill />
      </GridBox>
    </GridWrapper>
  </main>
</template>

<script setup>
import GridWrapper from "@/components/Gird/GridWrapper.vue";
import GridBox from "@/components/Gird/GridBox.vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import Social from "@/components/Social.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Hire from "@/components/Hire.vue";
import Skill from "@/components/Skill.vue";

import { onMounted, ref } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const gridItems = document.querySelectorAll(".grid-item");
  const isMobile = window.innerWidth <= 768;

  gsap.set(gridItems, { opacity: 0, x: 0, y: 0 });

  gsap.set(gridItems[1], {
    opacity: 1,
    xPercent: isMobile ? 0 : 150,
    yPercent: isMobile ? 70 : 50,
  });

  if (isMobile) {
    gsap.to(gridItems[1], {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      delay: 0.5,

      onComplete: () => {
        gsap.to(gridItems, {
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          duration: 0.5,
        });
      },
    });
  } else {
    gsap.to(gridItems[1], {
      opacity: 1,
      xPercent: 0,
      yPercent: 50,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        gsap.to(gridItems, {
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          duration: 1,
        });
      },
    });
  }
});
</script>
