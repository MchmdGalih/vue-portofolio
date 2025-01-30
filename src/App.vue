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

      <GridBox customClass="md:col-span-8  md:row-span-1 col-span-12 grid-item">
        <section class="w-full">
          <swiper
            :modules="[EffectCoverflow]"
            effect="coverflow"
            :space-between="10"
            :grabCursor="true"
          >
            <swiper-slide v-for="data in experience" :key="data.id"
              ><Experience :dataProps="data"
            /></swiper-slide>
          </swiper>
        </section>
      </GridBox>

      <GridBox
        customClass="md:col-span-4 bg-stone-950 md:row-span-1 col-span-12 grid-item"
      >
        <p>TEST</p>
      </GridBox>
    </GridWrapper>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import GridWrapper from "@/components/Gird/GridWrapper.vue";
import GridBox from "@/components/Gird/GridBox.vue";
import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import Social from "@/components/Social.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Hire from "@/components/Hire.vue";
import Skill from "@/components/Skill.vue";
import Experience from "./components/Experience.vue";
import { dataExperience } from "./utils/data";
import { onMounted, ref } from "vue";

const experience = ref(dataExperience);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 4000);
});
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
</style>
