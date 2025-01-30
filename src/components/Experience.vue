<template>
  <div
    class="w-full h-full sm:min-h-[250px] min-h-[300px] flex flex-col py-4 px-4 rounded-md font-oswald bg-stone-950 text-white"
  >
    <div>
      <h2>{{ dataProps.company }} | {{ dataProps.date }}</h2>
    </div>
    <div class="py-1 flex-1">
      <h1 class="text-2xl font-bold">{{ dataProps.title }}</h1>
      <p class="leading-normal mt-2">
        {{ dataProps.description }}
      </p>
    </div>
    <div class="flex justify-start gap-2">
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
