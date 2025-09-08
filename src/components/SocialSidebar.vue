<template>
  <Transition name="fade-down" v-if="start" style="transition-delay: 1200ms">
    <div
      class="hidden lg:flex ml-2 fixed left-0 top-1/2 -translate-y-1/6 z-50 w-[48px] p-4 border border-font-green rounded-md hover:shadow-[0.25rem_0.25rem_#64ffcf] transform transition-all delay-200 ease-in-out flex-col items-center gap-y-5 text-slate-400 float-bounce"
      :style="{ transitionDelay: '1200ms' }"
    >
      <ul class="flex flex-col items-center space-y-4">
        <li v-for="(icon, index) in social" :key="index" class="cursor-pointer">
          <a :href="icon.url" target="_blank" rel="noopener noreferrer">
            <v-icon
              :name="icon.name"
              class="t hover:text-font-green transition"
              scale="1.5"
            />
          </a>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({ start: Boolean });

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

.fade-down-enter-active,
.fade-up-enter-active {
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
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
