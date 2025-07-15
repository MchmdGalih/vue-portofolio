<template>
  <header
    class="w-full fixed z-10 backdrop-blur-sm top-0 py-8 lg:px-14 md:12 px-6"
  >
    <nav class="flex justify-between items-center font-secondary">
      <div class="w-10 h-10 text-font-green">
        <Logo />
      </div>

      <ul class="hidden md:inline-flex items-center space-x-4 text-sm">
        <li
          v-for="item in menu"
          :key="item.id"
          class="text-slate-100 hover:text-font-green transition-all ease-in-out"
        >
          <a :href="item.href"
            ><span class="text-font-green">{{ item.num }}</span>
            {{ item.name }}</a
          >
        </li>
      </ul>

      <ButtonBurger />
    </nav>
  </header>
</template>

<script setup>
import ButtonBurger from "./Button/Burger.vue";
import Logo from "./Logo.vue";

const menu = [
  { id: 1, num: "01.", name: "About", href: "#about" },
  { id: 2, num: "02.", name: "Experience", href: "#experience" },
  { id: 3, num: "03.", name: "Work", href: "#work" },
  { id: 4, num: "04.", name: "Contact", href: "#contact" },
];
</script>
