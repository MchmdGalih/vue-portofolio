<template>
  <section
    id="about"
    class="w-full lg:px-12 py-12 md:px-10 flex flex-col gap-y-6"
  >
    <div class="w-full inline-flex space-x-2 items-center font-secondary">
      <span class="text-font-green md:text-2xl text-xl">01.</span>
      <h1 class="text-slate-100 md:text-2xl text-xl font-medium">About Me.</h1>
      <div class="md:w-[200px] w-[150px] border border-slate-300"></div>
    </div>
    <div
      class="w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-x-2 gap-y-6 text-slate-50"
    >
      <div class="space-y-2.5 tracking-wide font-primary text-slate-300">
        <p>
          Hello! My name is Galih, and I enjoy building things for the web. I
          currently work as a motorcycle taxi driver and previously worked at a
          textile company in Bandung for three years.
        </p>
        <p>
          In 2023, I became interested in web development and started learning
          through self-study and online bootcamps. Since then, I’ve been
          exploring how to build responsive and user-friendly websites.
        </p>
        <p>
          I’m currently focused on improving my frontend and backend skills, and
          I’m excited to keep learning and growing as a developer.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
      </div>

      <div class="w-full h-full relative">
        <div class="w-60 h-60 mx-auto">
          <img
            src="../assets/profile.jpg"
            class="w-full h-full object-cover hover:-translate-4 hover:shadow-[0.25rem_0.25rem_#64ffcf] transition-all delay-200 ease-in-out rounded-md"
          />
        </div>
      </div>
    </div>
  </section>
</template>
