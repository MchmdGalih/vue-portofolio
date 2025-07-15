<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black z-999"
    :class="{ 'opacity-0 pointer-events-none': !isVisible }"
    :style="{ transition: 'opacity 0.5s ease' }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      class="w-50 h-50 text-font-green"
    >
      <!-- Polygon Border -->
      <polygon
        points="50,5 95,27 95,73 50,95 5,73 5,27"
        stroke="currentColor"
        stroke-width="5"
        fill="none"
        class="draw"
      />

      <!-- Huruf G -->
      <text
        x="50"
        y="55"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="36"
        font-weight="bold"
        fill="currentColor"
        font-family="font-primary, sans-serif"
        class="fade-in"
      >
        G
      </text>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
  }, 3000);
});
</script>

<style scoped>
.draw {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: drawLine 4s ease forwards;
}
@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 2s;
}
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
