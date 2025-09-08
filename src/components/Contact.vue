<template>
  <section id="contact">
    <div class="flex flex-col justify-center items-center">
      <div class="inline-flex space-x-1.5 items-center font-secondary mb-3">
        <span class="text-font-green md:text-2xl text-xl">04.</span>
        <h1 class="text-slate-300 md:text-2xl text-xl font-medium">
          Reach Out.
        </h1>
        <div
          class="lg:w-[200px] md:w-[120px] hidden sm:block border border-slate-300"
        ></div>
      </div>
      <p
        class="max-w-[600px] p-4 text-center text-transparent bg-clip-text bg-gradient-to-l scroll-animation from-slate-100 to-slate-400 font-bold text-xl font-primary"
      >
        I’m open to exciting new opportunities — especially if you're looking to
        add a passionate and driven developer to your team. Whether it’s a
        full-time role or a freelance project, feel free to reach out. I’d love
        to connect!
      </p>

      <BaseBtn>
        <a
          href="mailto:mochamadglh@gmail.com"
          target="_blank"
          class="text-font-green"
          rel="noopener noreferrer"
          >Contact Me</a
        >
      </BaseBtn>
    </div>
  </section>
</template>

<script setup>
import BaseBtn from "./Button/BaseBtn.vue";
</script>
