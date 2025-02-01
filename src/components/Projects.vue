<template>
  <section class="h-full w-full font-oswald">
    <swiper
      :modules="[Pagination, EffectFade, Autoplay]"
      effect="fade"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :grabCursor="true"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="data in projects" :key="data.id">
        <img :src="data.image" :alt="data.title" class="rounded-sm" />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4"
        >
          <p class="text-lg font-semibold mb-4">{{ data.title }}</p>
          <div class="flex flex-wrap gap-2 mb-2">
            <button
              v-for="(tech, index) in data.tech"
              :key="index"
              class="btn-custom-css"
            >
              {{ tech }}
            </button>
          </div>
          <div class="flex gap-2">
            <a
              :href="data.urlGithub"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-custom-css"
            >
              View on GitHub
            </a>
            <a
              :href="data.urlLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-custom-css"
            >
              View on Site
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { dataPhoto } from "@/utils/data";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";

const projects = ref(dataPhoto);
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet {
  background-color: #007bff;
  width: 12px;
  height: 12px;
}
</style>
