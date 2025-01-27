<template>
  <main
    class="max-w-full min-h-screen md:flex flex-justify-center items-center py-2 px-2"
  >
    <GridWrapper>
      <div
        className="col-span-12 w-full flex flex-col justify-center items-center  "
      >
        <header
          class="bg-stone-900 text-white w-full flex justify-between items-center p-4 rounded-xl"
        >
          <h1 class="font-cedarville">G.</h1>
          <h2 class="font-oswald">PROJECTS</h2>
        </header>
      </div>

      <div
        className="md:col-span-3 md:row-span-1 col-span-12 row-span-1 border border-solid "
      >
        <div
          v-motion
          :animate="animationState"
          :transition="{ duration: 1, delay: 0.5 }"
          class="rounded-md w-full h-full overflow-hidden"
        >
          <img
            src="https://i.pinimg.com/736x/80/3c/0b/803c0bca14a3d72022ffac4d4a4aa0b8.jpg"
            class="rounded-md w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="md:col-span-6 md:row-span-1 col-span-6 row-span-1 ">
        <div class="w-full h-full flex flex-col rounded-md gap-2">
          <div
            class="flex justify-around px-4 bg-stone-950 text-white py-4 items-center rounded-md"
          >
            <a :href="icon.url" v-for="icon in icons" :key="icon.id">
              <v-icon :name="icon.icon" scale="1.5" />
            </a>
          </div>

          <div class="bg-stone-950 text-white flex-grow rounded-md">
            <div
              class="h-full flex flex-col justify-evenly md:py-2 md:px-6 md:text-center py-1 px-2 items-center font-oswald"
            >
              <h1 class="md:text-4xl text-xl mb-1 font-bold">HEY! I'M GALIH</h1>
              <p class="md:text-xl text-sm font-normal text-center mb-1">
                I'm an online driver currently learning to become a Fullstack
                Developer. I've joined several training programs and am actively
                improving my skills to start a career in this field.
              </p>

              <p class="md:text-xl text-sm text-center italic font-light">
                - Fortis Fortuna Adiuvat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="md:col-span-3 md:row-span-2 col-span-6 row-span-1 rounded-md border  "
      >
        <div class="relative w-full h-full">
          <img
            src="/src/assets/bg-about.png"
            class="absolute top-0 left-0 rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className="md:col-span-7  md:row-span-2 col-span-12 row-span-1 border rounded-md relative  "
      >
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
                  <p
                    v-for="(tech, index) in data.tech"
                    :key="index"
                    class="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg border-b-4 border-gray-400"
                  >
                    {{ tech }}
                  </p>
                </div>
                <a
                  :href="data.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-custom-css"
                >
                  View on GitHub
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>

      <div
        className="md:col-span-2 md:row-span-1 col-span-12 row-span-1 border rounded-md "
      >
        <div class="relative">
          <img
            src="https://i.pinimg.com/236x/e0/b6/23/e0b6235b1026ec83cbc7ba3422bd21e1.jpg"
            class="w-full h-[100px] object-cover opacity-80 rounded-sm"
          />
          <p
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold w-full text-center opacity-75"
          >
            HIRE ME PLS
          </p>
        </div>
      </div>

      <div
        className="md:col-span-5  md:row-span-1 col-span-12  border rounded-md"
      >
        <section
          class="w-full flex flex-col gap-2 py-4 h-full bg-stone-950 text-white text-center rounded-md font-oswald"
        >
          <h1 class="text-center">SKILL</h1>
          <div class="p-4 flex justify-center items-center flex-wrap gap-2">
            <button
              v-for="(skill, index) in skills"
              :key="index"
              class="bg-stone-300 text-stone-800 px-4 py-2 rounded-lg hover:bg-stone-600 hover:text-stone-100"
            >
              {{ skill }}
            </button>
          </div>
        </section>
      </div>
    </GridWrapper>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import beReview from "@/assets/be-review-film.jpg";
import noteList from "@/assets/personal-notes.jpg";
import bookShelf from "@/assets/book-shelf.jpg";
import GridWrapper from "./components/GridWrapper.vue";

const icons = [
  {
    id: 1,
    icon: "fa-github",
    url: "https://github.com/MchmdGalih",
  },
  {
    id: 2,
    icon: "fa-linkedin",
    url: "https://www.linkedin.com/in/mochamad-galih-sulistio-pratama",
  },
  {
    id: 3,
    icon: "fa-instagram",
    url: "https://www.instagram.com/__mochgalih/",
  },
  {
    id: 4,
    icon: "fa-facebook",
    url: "#",
  },
];

const dataPhoto = [
  {
    id: 1,
    title: "Laravel API Review-Film",
    image: beReview,
    url: "https://github.com/MchmdGalih/Be-ReviewFilm",
    tech: ["Laravel", "PHP"],
  },
  {
    id: 2,
    title: "React App NoteList",
    image: noteList,
    url: "https://github.com/MchmdGalih/notes-v2",
    tech: ["React", "JavaScript"],
  },
  {
    id: 3,
    title: "Remix BookShelf",
    image: bookShelf,
    url: "https://github.com/MchmdGalih/Books-Remix",
    tech: ["Remix", "NestJs", "Typescript"],
  },
];

const skills = [
  "JavaScript",
  "PHP",
  "React",
  "Vue",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "Laravel",
  "Express.js",
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

.btn-custom-css {
  padding: 15px 15px;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 500;
  font-size: 16px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
}

.btn-custom-css::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

.btn-custom-css:hover {
  color: #e8e8e8;
}

.btn-custom-css:hover::before {
  width: 100%;
}

@media (max-width: 480px) {
  .btn-custom-css {
    padding: 5px 15px;
    font-size: 12px;
  }
}
</style>
