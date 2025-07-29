<template>
  <footer class="py-4 flex-col text-center text-slate-300">
    <ul class="flex md:hidden justify-center items-center gap-x-4 mb-2">
      <li v-for="(icon, index) in social" :key="index">
        <a :href="icon.url"
  target="_blank"
  rel="noopener noreferrer">
          <v-icon
            :name="icon.name"
            class="text-slate-300 hover:text-font-green transition"
            scale="1.5"
        /></a>
      </li>
    </ul>

    <h1 class="text-sm text-slate-400 font-medium font-primary tracking-widest">
      Built by Moch Galih
    </h1>
  </footer>
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
