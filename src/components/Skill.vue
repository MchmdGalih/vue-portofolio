<template>
  <section
    class="w-full flex flex-col gap-2 py-4 h-full bg-stone-950 text-white text-center rounded-md font-oswald"
  >
    <h1 class="text-center">SKILL</h1>
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
