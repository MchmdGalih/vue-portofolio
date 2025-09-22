<template>
  <section id="hero" ref="sectionRef">
    <div
      class="flex flex-col h-auto lg:py-10 pt-12 lg:items-start md:justify-center"
    >
      <h1 class="text-font-green text-secondary text-md mb-2 font-normal">
        Hi, my name is
      </h1>

      <h2
        class="text-transparent bg-clip-text bg-gradient-to-b lg:text-6xl text-4xl text-secondary font-bold from-slate-100 to-slate-400"
      >
        Mochamad Galih Sulistio Pratama.
      </h2>

      <h3
        class="text-transparent py-2 lg:text-6xl text-4xl leading-none text-secondary font-bold bg-clip-text bg-gradient-to-t from-slate-100 to-slate-400 mt-1.5"
      >
        I Build things for the web.
      </h3>
      <p class="text-slate-300 max-w-[540px] font-primary mt-5">
        I’m a self-taught
        <span class="relative line cursor-pointer text-font-green"
          >web developer</span
        >
        currently focused on learning both frontend and backend technologies to
        become a
        <span class="relative line inline-block cursor-pointer text-font-green"
          >fullstack developer</span
        >. My current focus is on building responsive, user-friendly web
        applications using Vue.js, Tailwind CSS, and exploring backend
        development with Node.js and PostgreSQL.
      </p>

      <BaseBtn>
        <a href="#contact" class="text-font-green"> Resume </a>
      </BaseBtn>
    </div>
  </section>
</template>

<script setup>
import { useIntersectionObserver } from "../composable/useIntersectionObserver";
import BaseBtn from "./Button/BaseBtn.vue";
import { ref } from "vue";

const sectionRef = ref(null);
const { isVisible } = useIntersectionObserver(sectionRef);
</script>
