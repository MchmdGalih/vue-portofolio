<template>
  <div
    :class="[
      'hidden md:flex w-[40px]  flex-col px-14  items-center gap-y-5 fixed bottom-0 z-50 ',
      side === 'left' ? 'left-0' : 'right-0',
    ]"
  >
    <ul v-if="icons.length" class="flex flex-col items-center space-y-4">
      <li v-for="(icon, index) in icons" :key="index" class="cursor-pointer">
        <RouterLink :to="icon.url">
          <v-icon
            :name="icon.name"
            class="text-2xl text-slate-300 hover:text-font-green transition"
            scale="1.5"
        /></RouterLink>
      </li>
    </ul>

    <RouterLink
      v-if="text"
      class="text-slate-300 rotate-90 absolute bottom-[200px] cursor-pointer hover:text-font-green transition"
      :to="`mailto:${text}`"
    >
      {{ text }}
    </RouterLink>

    <div class="w-0.5 h-24 bg-slate-300"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  icons: {
    type: Array,
    default: () => [],
  },
  text: {
    type: String,
    default: "",
  },
  side: {
    type: String,
    default: "left",
  },
});
</script>
