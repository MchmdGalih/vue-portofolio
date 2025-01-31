<template>
  <section
    class="w-full flex flex-col gap-2 py-4 h-full bg-[#03346E] text-white text-center rounded-md font-oswald"
  >
    <div class="flex gap-2 items-center px-5">
      <span class="w-6 h-[2px] bg-white"></span>
      <h1 class="text-xl md:text-xl font-bold">Tech Stack</h1>
    </div>
    <div class="p-4 flex justify-center items-center flex-wrap gap-2">
      <button
        v-for="(skill, index) in skills"
        :key="index"
        class="btn-custom-css"
      >
        {{ skill }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { dataSkills } from "../utils/data";
import { ref } from "vue";

const skills = ref(dataSkills);
</script>
