<template>
  <div :class="customClass">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>
