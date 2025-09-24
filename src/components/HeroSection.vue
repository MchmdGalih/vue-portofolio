<template>
  <section id="hero">
    <div
      class="flex flex-col h-auto lg:py-10 pt-12 lg:items-start md:justify-center"
      ref="targetRef"
    >
      <component
        v-for="(item, index) in items"
        :key="item.id"
        :is="item.tag"
        :class="[
          item.class,
          ' -translate-x-10 transition-all duration-400 ease-out',
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0',
        ]"
        :style="{
          transitionDelay: isVisible ? `${index * 300 + 1300}ms` : '0ms',
        }"
      >
        {{ item.text }}
      </component>

      <BaseBtn
        class="opacity-0 -translate-x-10 transition-all duration-400 ease-in"
        :class="{ 'opacity-100 translate-x-0': isVisible }"
        :style="{
          transitionDelay: isVisible ? `${items.length * 300 + 1300}ms` : '0ms',
        }"
      >
        <a href="#contact" class="text-font-green"> Resume </a>
      </BaseBtn>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "../composable/useIntersectionObserver";
import BaseBtn from "./Button/BaseBtn.vue";
const targetRef = ref(null);
const { isVisible } = useIntersectionObserver(targetRef);

const items = [
  {
    tag: "h1",
    text: "Hi, my name is",
    class: "text-font-green text-md font-normal",
  },
  {
    tag: "h2",
    text: "Mochamad Galih Sulistio Pratama.",
    class:
      "text-transparent bg-clip-text bg-gradient-to-b lg:text-6xl text-4xl font-bold from-slate-100 to-slate-400",
  },
  {
    tag: "h3",
    text: "I Build things for the web.",
    class:
      "text-transparent py-2 lg:text-6xl text-4xl leading-none font-bold bg-clip-text bg-gradient-to-t from-slate-100 to-slate-400 mt-1.5",
  },
  {
    tag: "p",
    text: "I’m a self-taught web developer currently focused on learning both frontend and backend technologies to become a fullstack developer.",
    class: "text-slate-300 max-w-[540px] font-primary mt-5",
  },
];
</script>
