<template>
  <v-motion :class="customClass">
    <slot></slot>
  </v-motion>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },

  animation: {
    type: String,
    default: "",
  },
});
</script>
