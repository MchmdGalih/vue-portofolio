<template>
  <div
    ref="targetRef"
    class="hidden lg:flex ml-2 fixed left-0 top-1/2 -translate-y-1/6 z-50 w-[48px] p-4 border border-font-green rounded-md hover:shadow-[0.25rem_0.25rem_#64ffcf] transform transition-all delay-200 ease-in-out flex-col items-center gap-y-5 text-slate-400 float-bounce"
    :class="isVisible ? 'text-appear' : 'opacity-0'"
  >
    <ul class="flex flex-col items-center space-y-4">
      <li v-for="(icon, index) in social" :key="index" class="cursor-pointer">
        <a :href="icon.url" target="_blank" rel="noopener noreferrer">
          <v-icon
            :name="icon.name"
            class="hover:text-font-green transition"
            scale="1.5"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "../composable/useIntersectionObserver";
const targetRef = ref(null);

const { isVisible } = useIntersectionObserver(targetRef);

const social = [
  {
    name: "fa-github",
    url: "https://github.com/MchmdGalih",
  },
  {
    name: "fa-linkedin",
    url: "https://www.linkedin.com/in/mochamad-galih-sulistio-pratama",
  },
  {
    name: "fa-instagram",
    url: "https://www.instagram.com/__mochgalih/",
  },
];
</script>

<style scope>
@keyframes float-bounce {
  0%,
  100% {
    transform: translateY(-50%) translateY(0);
  }
  50% {
    transform: translateY(-50%) translateY(-10px);
  }
}

.float-bounce {
  animation: float-bounce 2s ease-in-out infinite;
}
</style>
