<template>
  <button
    class="relative flex flex-col justify-center items-center gap-y-1 w-8 h-8 cursor-pointer md:hidden z-10"
    @click="handleClick"
  >
    <span
      class="w-full h-1 bg-font-green rounded transition-all duration-300 ease-in-out origin-center transform"
      :class="isOpen ? 'rotate-45 translate-y-2' : ''"
    ></span>
    <span
      class="w-full h-1 bg-font-green"
      :class="isOpen ? 'opacity-0' : ''"
    ></span>
    <span
      class="w-full h-1 bg-font-green rounded transition-all duration-300 ease-in-out origin-center transform"
      :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
    ></span>
  </button>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  visble: {
    type: Boolean,
    default: false,
  },
});

const isOpen = inject("isOpen");
const toggle = inject("toggle");

const handleClick = () => {
  if (toggle) toggle();
};
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.6s ease;
}
.fade-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
