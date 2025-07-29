<template>
  <svg ref="logoEl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <polygon
      points="50,5 95,27 95,73 50,95 5,73 5,27"
      stroke="currentColor"
      stroke-width="5"
      fill="none"
    />

    <text
      x="50"
      y="55"
      text-anchor="middle"
      dominant-baseline="middle"
      font-size="36"
      font-weight="bold"
      fill="currentColor"
      font-family="font-primary"
    >
      G
    </text>
  </svg>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const logoEl = ref(null);

// Agar bisa diakses dari parent
defineExpose({
  el: logoEl,
});
</script>
