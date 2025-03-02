<template>
  <main
    class="max-w-full bg-[#021526] min-h-screen md:flex flex-justify-center items-center py-2 px-2"
  >
    <GridWrapper>
      <GridBox
        customClass="col-span-12 w-full flex flex-col justify-center items-center grid-item "
      >
        <Header />
      </GridBox>

      <GridBox
        custom-class="md:col-span-3 md:row-span-1 col-span-12 row-span-1  profile-box"
      >
        <Profile />
      </GridBox>

      <GridBox
        customClass="md:col-span-6 md:row-span-1 col-span-6 row-span-1 grid-item "
      >
        <Social />
      </GridBox>

      <GridBox
        customClass="md:col-span-3 md:row-span-2 col-span-6 row-span-1 rounded-md   grid-item"
      >
        <About />
      </GridBox>

      <GridBox
        class="md:col-span-7 md:row-span-2 col-span-12 row-span-2 rounded-md relative grid-item"
      >
        <Projects />
      </GridBox>

      <GridBox
        customClass="md:col-span-2 md:row-span-1 col-span-12 row-span-1  rounded-md grid-item "
      >
        <Hire />
      </GridBox>

      <GridBox
        class="md:col-span-5 md:row-span-1 col-span-12 rounded-md grid-item"
      >
        <Skill />
      </GridBox>

      <GridBox
        customClass="md:col-span-6  md:row-span-1 col-span-12 grid-item "
      >
        <section class="w-full h-full">
          <swiper
            :modules="[EffectCoverflow]"
            effect="coverflow"
            :space-between="10"
            :grabCursor="true"
            :loop="true"
          >
            <swiper-slide v-for="data in experience" :key="data.id"
              ><Experience :dataProps="data"
            /></swiper-slide>
          </swiper>
        </section>
      </GridBox>

      <GridBox
        customClass="md:col-span-6 bg-[#03346E] md:row-span-1 col-span-12  relative py-5 grid-card grid-item"
      >
        <div class="flex px-4 text-white gap-2 items-center">
          <span class="w-8 h-[2px] bg-white"></span>
          <h1 class="text-xl md:text-xl font-bold">Certificates</h1>
        </div>
        <div class="card-group">
          <div class="big-card card"></div>
          <div class="big-card card"></div>
          <div class="big-card card"></div>
          <div class="big-card card text-center items-center">
            <span class="h-full font-bold flex justify-center items-center">
              Coming Soon..
            </span>
          </div>
        </div>
      </GridBox>
    </GridWrapper>
  </main>
</template>

<script setup>
import { gsap } from "gsap";
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

onMounted(() => {
  const tl = gsap.timeline();

  gsap.set(".grid-item", { opacity: 0 });
  gsap.set(".profile-box", { opacity: 1 });

  tl.fromTo(
    ".profile-box",
    { x: "30vw ", y: "50vh", opacity: 1 },
    { y: "0", opacity: 1, duration: 1.5, ease: "power2.out" }
  )
    .to(".profile-box", { x: 0, y: 0, duration: 1, ease: "power2.out" })
    .to(".grid-item", {
      opacity: 1,
      duration: 1.3,
      ease: "power2.out",
    });
});
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.grid-card {
  min-height: 300px;
}
.card-group {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
}

.big-card {
  width: 200px;
  height: 200px;
  background: #ffffff;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-10%) rotate(-1deg);
  cursor: pointer;
}

.big-card:nth-child(2) {
  transform: translateX(-6%) rotate(-3deg);
}
.big-card:nth-child(3) {
  transform: rotate(2deg);
}
.big-card:nth-child(4) {
  transform: translateX(10%) rotate(5deg);
}
</style>
