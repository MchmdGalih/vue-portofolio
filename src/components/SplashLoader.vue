<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
  >
    <Transition name="bounce" @after-leave="handleLogoLeaveDone">
      <svg
        v-if="showLogo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="lg:w-50 lg:h-50 w-25 h-25 text-font-green"
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
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(true);
const showLogo = ref(true);
const emit = defineEmits(["done"]);

function handleLogoLeaveDone() {
  isVisible.value = false;
  emit("done");
}

onMounted(() => {
  setTimeout(() => {
    showLogo.value = false;
  }, 4000);
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
</style>
