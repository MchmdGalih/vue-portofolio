<template>
  <section class="w-full h-full flex flex-col rounded-md gap-2">
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
        <h1
          class="md:text-4xl tracking-wide text-xl mb-1 font-bold bg-gradient-to-b from-stone-100 to-stone-300 text-transparent bg-clip-text"
        >
          HEY! I'M GALIH
        </h1>
        <p
          class="md:text-xl text-sm tracking-wide font-normal text-center mb-1 bg-gradient-to-b from-stone-100 to-stone-300 text-transparent bg-clip-text"
        >
          I'm an online driver currently learning to become a Fullstack
          Developer. I've joined several training programs and am actively
          improving my skills to start a career in this field.
        </p>

        <p
          class="md:text-md text-sm text-center tracking-wide font-light bg-gradient-to-b from-stone-100 to-stone-300 text-transparent bg-clip-text"
        >
          - "BREAK THINGS, LEARN FROM THEM, BUILD BETTER."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { dataIcons } from "@/utils/data";
import { ref } from "vue";

const icons = ref(dataIcons);
</script>
