<template>
  <section id="experience">
    <div
      class="inline-flex space-x-1.5 items-center font-secondary mb-6 text-appear"
    >
      <span class="text-font-green md:text-2xl text-xl">02.</span>
      <h1 class="text-slate-300 md:text-2xl text-xl font-medium">
        Where I've Experience.
      </h1>
      <div
        class="lg:w-[200px] md:w-[120px] hidden sm:block border border-slate-300"
      ></div>
    </div>
    <div class="max-w-[700px] flex-col">
      <div class="flex flex-col gap-y-2">
        <ul
          class="flex overflow-x-auto gap-4 whitespace-nowrap items-center border border-font-green rounded-md py-4 cursor-pointer text-slate-300"
        >
          <li
            class="w-full relative text-center border-font-green p-2"
            v-for="(tab, index) in tabs"
            @click="activeTab = tab.id"
            :key="tab.id"
            :class="[
              index !== tabs.length - 1 ? 'border-r border-font-green' : '',
            ]"
          >
            {{ tab.label }}
            <div
              v-if="activeTab === tab.id"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-10 bg-font-green transition-all duration-300"
            ></div>
          </li>
        </ul>

        <div
          class="w-full max-h-[400px] overflow-y-auto hide-scrollbar cursor-grab border text-slate-300 border-font-green rounded-md"
        >
          <Transition name="fade" mode="out-in">
            <div :key="activeTab">
              <div
                class="p-4"
                v-for="(exp, index) in currentExperiences"
                :key="index"
              >
                <div>
                  <h1 class="font-bold font-secondary">
                    {{ exp.title }}
                  </h1>
                  <span
                    class="md:inline-flex sm:block items-center font-secondary space-x-2 mb-2"
                  >
                    <p class="text-sm">{{ exp.position }} |</p>
                    <p class="font-light text-xs">{{ exp.date }}</p>
                  </span>
                </div>
                <ul class="mt-3 space-y-2 text-md font-secondary py-2 border-b">
                  <li
                    v-for="(item, i) in exp.points"
                    :key="i"
                    class="text-sm items-center"
                  >
                    <span class="text-font-green text-xl font-bold">»</span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const activeTab = ref("bootcamps");

const currentExperiences = computed(() => {
  return tabs.find((tab) => tab.id === activeTab.value)?.experiences || [];
});

const tabs = [
  {
    id: "bootcamps",
    label: "Bootcamp",
    experiences: [
      {
        title: "Rumah Amal Salman X Sanbercode",
        position: "Junior Web Developer",
        date: "Dec 2024 – Jan 2025",
        points: [
          "I participated in a Web Development Bootcamp organized by Rumah Amal Salman in collaboration with Sanbercode, where I studied both foundational and advanced web development concepts.",
          "Learned HTML, CSS, JavaScript, PHP, Vue.js, Laravel, and MySQL to build efficient and interactive web applications.",
          "Worked on several hands-on projects that enhanced my understanding of database management, REST APIs, JWT authentication, and application deployment.",
          "Collaborated in a team environment to develop web-based applications using professional industry workflows.",
        ],
      },
      {
        title: "Alkademi",
        position: "Fullstack Development",
        date: "May 2023 – July 2023",
        points: [
          "I had the opportunity to participate in a Fullstack Development bootcamp organized by Alkademi, with a primary focus on frontend fundamentals.",
          "Learned HTML, CSS, JavaScript, and Nuxt.js to build responsive and interactive user interfaces.",
          "Strengthened problem-solving and debugging skills.",
          "Gained experience using version control tools such as Git and GitHub.",
        ],
      },
    ],
  },
  {
    id: "source",
    label: "Source Online",
    experiences: [
      {
        title: "Dicoding Indonesia",
        position: "Belajar Fundamental Aplikasi Web dengan React",
        date: "January 2025 ",
        points: [
          "Applying Props Validation using PropTypes to ensure components receive the correct data types.",
          "Implementing Client-Side Routing with react-router-dom to manage navigation between pages without full page reloads.",
          "Understanding and using the Component Lifecycle in both class and functional components (e.g. componentDidMount, useEffect).",
          "Utilizing the Context API (useContext) for global state management and sharing data between components without prop drilling.",
          "Mastering essential React Hooks like useState, useEffect, useContext,.",
        ],
      },
      {
        title: "freeCodeCamp",
        position: "Responsive Web Design",
        date: "July 2024",
        points: [
          "Understand the basic structure of web pages and semantic elements using HTML & HTML5.",
          "Style and format web pages using CSS & CSS3.",
          "Create flexible one-dimensional layouts using Flexbox.",
          "Build complex two-dimensional layouts using CSS Grid.",
          "Apply responsive design principles using media queries and flexible units.",
          "Learn typography and visual design principles to enhance readability and appearance.",
          "Gain hands-on experience through project-based learning such as landing pages, forms, and technical documentation.",
        ],
      },
      {
        title: "Udemy",
        position: "Responsive Web Design",
        date: "July 2024",
        points: [
          "Build responsive, accessible, and visually appealing layouts using HTML, CSS, and frameworks like Bootstrap 5, Semantic UI, and Bulma.",
          "Understand and apply core JavaScript concepts including variables, functions, conditionals, loops, arrays, objects, DOM manipulation, and higher-order functions.",
          "Develop complex front-end applications including animated to-do lists, browser games, and single-page applications using AJAX.",
          "Create and validate complex HTML forms.",
          "Implement responsive navigation menus.",
          "Write full-stack web applications using Node.js, Express, and MongoDB.",
          "Use tools like Postman for API testing and debugging.",
        ],
      },
      {
        title: "Dicoding Indonesia",
        position: "Belajar Membuat Aplikasi Back-End untuk Pemula",
        date: "September 2023",
        points: [
          "Build responsive, accessible, and visually appealing layouts using HTML, CSS, and frameworks like Bootstrap 5, Semantic UI, and Bulma.",
          "Understand and apply core JavaScript concepts including variables, functions, conditionals, loops, arrays, objects, DOM manipulation, and higher-order functions.",
          "Develop complex front-end applications including animated to-do lists, browser games, and single-page applications using AJAX.",
          "Create and validate complex HTML forms.",
          "Implement responsive navigation menus.",
          "Write full-stack web applications using Node.js, Express, and MongoDB.",
          "Use tools like Postman for API testing and debugging.",
        ],
      },
    ],
  },
  {
    id: "work",
    label: "Works",
    experiences: [
      {
        title: "PT GAJAH ANGKASA PERKASA (formerly PT. BSSM)",
        position: "Operator",
        date: "July 2019 – May 2022",
        points: [
          "Selected base materials according to specified color requirements, including pigments, inks, dyes, and other raw materials used in the production process.",
          "Mixed pigments or other materials based on accurate formulas or recipes to achieve the desired color. This involved precise measurement and calculation.",
          "Conducted color tests to ensure the produced color met the required specifications, often using equipment such as spectrophotometers for accurate color measurement.",
          "Made careful adjustments to the color formula if the result did not match the target specifications.",
          "Recorded all color formulas and test results for each product or batch, which was essential for quality tracking and color consistency.",
        ],
      },
    ],
  },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
