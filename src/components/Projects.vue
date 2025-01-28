<template>
  <section class="h-full w-full font-oswald">
    <Swiper
      :modules="[Pagination, Autoplay]"
      effect="fade"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :grabCursor="true"
      :loop="true"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="data in dataPhoto" :key="data.id">
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
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import beReview from "@/assets/be-review-film.jpg";
import noteList from "@/assets/personal-notes.jpg";
import bookShelf from "@/assets/book-shelf.jpg";

const dataPhoto = [
  {
    id: 1,
    title: "Laravel API Review-Film",
    image: beReview,
    urlGithub: "https://github.com/MchmdGalih/Be-ReviewFilm",
    urlLink: "https://documenter.getpostman.com/view/25463593/2sAYHzHivT",
    tech: ["Laravel", "PHP"],
  },
  {
    id: 2,
    title: "React App NoteList",
    image: noteList,
    urlGithub: "https://github.com/MchmdGalih/notes-v2",
    urlLink: "https://notes-v2-seven.vercel.app/",
    tech: ["React", "JavaScript"],
  },
  {
    id: 3,
    title: "Remix BookShelf",
    image: bookShelf,
    urlGithub: "https://github.com/MchmdGalih/Books-Remix",
    urlLink: "#",
    tech: ["Remix", "NestJs", "Typescript"],
  },
];
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
