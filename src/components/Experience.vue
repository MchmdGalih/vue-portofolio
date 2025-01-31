<template>
  <div
    class="w-full h-full flex flex-col py-4 px-4 rounded-md font-oswald bg-[#03346E] text-white"
  >
    <div class="flex gap-2 items-center mb-2">
      <span class="w-8 h-[2px] bg-white"></span>
      <h1 class="text-xl md:text-xl font-bold">Experience</h1>
    </div>
    <div>
      <h2>{{ dataProps.company }} | {{ dataProps.date }}</h2>
    </div>
    <div class="py-1 flex-1 text-md font-light">
      <h1 class="md:text-2xl text-xl font-bold">{{ dataProps.title }}</h1>
      <p class="leading-normal mt-2">
        {{ dataProps.description }}
      </p>
    </div>
    <div class="flex justify-start gap-2 flex-wrap mt-2">
      <button
        v-for="(tech, idx) in dataProps.tech"
        :key="idx"
        class="py-1 px-2 border border-white rounded-md"
      >
        {{ tech }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  dataProps: {
    type: Object,
    required: true,
  },
});
</script>
