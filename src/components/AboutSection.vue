<template>
  <section id="about">
    <div class="max-w-[750px] mx-auto lg:py-0 md:py-4 py-10">
      <div
        class="inline-flex space-x-2 items-center font-secondary mb-6 text-appear"
      >
        <span class="text-font-green md:text-2xl text-xl">01.</span>
        <h1
          class="text-slate-300 md:text-2xl text-xl font-medium line relative"
        >
          About Me.
        </h1>
        <div class="md:w-[200px] w-[150px] border border-slate-300"></div>
      </div>
      <div
        class="w-full grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-x-2 gap-y-6 text-slate-50"
      >
        <div
          class="space-y-2.5 tracking-wide font-primary text-slate-300 lg:order-1 order-2 autoShowLeft"
        >
          <p>
            Hello! My name is Galih, and I enjoy building things for the web. I
            currently work as a motorcycle taxi driver and previously worked at
            a textile company in Bandung for three years.
          </p>
          <p>
            I began learning web development in 2023 through self-study and
            online bootcamps, and have been passionate about building
            responsive, user-friendly websites ever since.
          </p>
          <p>
            I'm currently focused on sharpening my frontend and backend skills
            to grow as a full-stack developer.
          </p>
          <p>Here are some technologies I’ve been learning recently:</p>

          <ul class="grid grid-cols-2 space-y-1">
            <li
              class="flex items-center space-x-2"
              v-for="tech in techs"
              :key="tech.id"
            >
              <span class="text-font-green text-xl font-bold">»</span>
              <span class="text-xs font-medium text-slate-400 tracking-wider">{{
                tech.name
              }}</span>
            </li>
          </ul>
        </div>

        <div
          class="w-full h-full py-3.5 relative order-1 lg:order-2 autoShowRight"
        >
          <div class="wrapp w-68 h-68 mx-auto relative">
            <img
              src="../assets/image/profile.jpg"
              class="w-full h-full object-cover hover:-translate-4 transition-all delay-200 ease-in-out rounded-md scroll-display"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techs = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Vue Js" },
  { id: 3, name: "Node Js" },
  { id: 4, name: "React Js" },
  { id: 5, name: "Laravel" },
  { id: 6, name: "PHP" },
];
</script>

<style scoped>
.wrapp::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #64ffcf;
  border-radius: 6px;
  z-index: -1;
  transform: translate(24px, 20px);
}

.wrapp:hover::before {
  transform: translate(26px, 28px);
  transition: all 0.2s ease-in-out;
}
</style>
