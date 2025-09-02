<template>
  <section id="project">
    <div class="inline-flex space-x-1.5 items-center font-secondary mb-6">
      <span class="text-font-green md:text-2xl text-xl">03.</span>
      <h1 class="text-slate-300 md:text-2xl text-xl font-medium">
        Some Things I've Built.
      </h1>
      <div
        class="lg:w-[200px] md:w-[120px] hidden sm:block border border-slate-300"
      ></div>
    </div>
    <ul class="w-full max-h-full">
      <li
        class="grid grid-cols-12 gap-2 relative mb-8 border border-font-green rounded-md"
        v-for="(item, idx) in data"
        :key="item.id"
      >
        <div
          :class="[
            'p-2 col-span-12',
            idx % 2 === 0
              ? 'md:col-start-5 md:-col-end-1 md:row-start-1 md:text-right text-start'
              : 'md:col-start-1 md:col-end-9 row-start-1 ',
          ]"
        >
          <div>
            <p
              class="text-xs text-font-green font-secondary my-2 mx-0 font-normal"
            >
              Featured Project.
            </p>
            <h3 class="text-2xl font-bold text-slate-300 mb-2">
              {{ item.title }}
            </h3>

            <div
              class="md:shadow-md z-10 relative py-4 md:text-[18px] text-xs p-0 rounded-sm bg-dark-blue text-slate-300 font-normal leading-tight"
            >
              <p :class="[idx % 2 === 0 ? 'md:text-right  text-start' : '']">
                {{ item.desc }}
              </p>
            </div>

            <ul
              :class="[
                'flex flex-wrap gap-x-2 ',
                idx % 2 === 0
                  ? 'justify-end item-center text-start'
                  : 'md:text-left text-end',
              ]"
            >
              <li
                v-for="tech in item.tech"
                :key="tech"
                class="mt-2 md:text-sm text-xs font-primary font-normal z-10 relative text-font-green"
              >
                {{ tech }}
              </li>
            </ul>

            <ul
              :class="[
                'flex flex-wrap gap-x-4 items-center ',
                idx % 2 === 0
                  ? 'justify-end item-center text-start'
                  : 'md:text-left text-end',
              ]"
            >
              <li
                class="text-slate-400 mt-2 text-sm font-secondary font-normal"
              >
                <a
                  :href="item.github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon
                    name="fa-github"
                    class="hover:text-font-green transition"
                    scale="md:1.5 1"
                  />
                </a>
              </li>

              <li
                class="text-slate-400 mt-2 text-sm font-secondary font-normal"
              >
                <a
                  :href="item.link || null"
                  :class="[
                    'transition',
                    item.link
                      ? 'hover:text-font-green'
                      : 'text-red-500 cursor-not-allowed pointer-events-none',
                  ]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon
                    name="fa-link"
                    :class="item.link ? '' : 'text-red-500'"
                    scale="md:1.5 1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          :class="[
            idx % 2 === 0
              ? 'md:col-start-1 md:col-end-9 row-start-1 col-span-12'
              : 'md:col-start-5 md:-col-end-1 md:row-start-1 row-end-1 col-span-12 ',
          ]"
        >
          <img
            :src="item.image"
            alt=""
            class="w-full h-full object-cover rounded-xs brightness-50"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import apiReviewFilm from "../assets/image/be-review-film.jpg";
import ecommerce from "../assets/image/e-commerce.jpg";
import libblion from "../assets/image/libblion.jpg";
import incafe from "../assets/image/in-cafe.jpg";

const data = [
  {
    id: 1,
    title: "In Cafe",
    image: incafe,
    desc: "A web application that simulates a coffee ordering system where customers can place orders either directly through the cashier or online, with payment options available via Midtrans.",
    tech: [
      "Javascript",
      "Node Js",
      "Express Js",
      "Postgres",
      "Vue Js",
      "Tailwind",
      "Midtrans",
    ],
    link: "https://in-cafe-clinet.vercel.app/",
    github: "https://github.com/MchmdGalih/InCafe",
  },

  {
    id: 2,
    title: "Libblion",
    image: libblion,
    desc: "A web application that allows users to borrow and return books online, with an automatic fine system for late returns, along with borrowing history and admin management features.",
    tech: ["PHP", "Laravel", "SQL", "Vue Js", "Tailwind", "Midtrans"],
    link: "",
    github: "https://github.com/Libblion/libblion-fe",
  },

  {
    id: 3,
    title: "API Review Film",
    image: apiReviewFilm,
    desc: "A RESTful service that lets users create, read, update, and delete movie reviews, add ratings, and post comments on each film. It supports authentication, pagination, search/filter by title/genre/rating",
    tech: ["PHP", "Laravel", "SQL"],
    link: "",
    github: "https://github.com/MchmdGalih/Be-ReviewFilm",
  },

  {
    id: 4,
    title: "E-commerce",
    image: ecommerce,
    desc: "A web-based application that allows users to browse and purchase products from small and medium enterprises (SMEs) online, making it easier for businesses to reach customers and for customers to shop conveniently",
    tech: ["PHP", "Laravel", "SQL", "Vue Js", "Tailwind", "Midtrans"],
    link: "https://fe-kelompok5.vercel.app/",
    github: "https://github.com/MchmdGalih/FE-Kelompok5",
  },
];
</script>
