<template>
  <div
    class="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 w-[48px] p-4 border-t border-r border-b border-font-green rounded-r-md hover:shadow-[0.25rem_0.25rem_#64ffcf] transform transition-all delay-200 ease-in-out flex-col items-center gap-y-5 text-slate-400"
  >
    <ul class="flex flex-col items-center space-y-4">
      <li v-for="(icon, index) in social" :key="index" class="cursor-pointer">
        <RouterLink :to="icon.url">
          <v-icon
            :name="icon.name"
            class="t hover:text-font-green transition"
            scale="1.5"
          />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
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
