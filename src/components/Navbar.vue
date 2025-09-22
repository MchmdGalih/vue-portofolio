<template>
  <header
    ref="sectionRef"
    class="w-full fixed z-20 backdrop-blur-sm top-0 lg:py-8 md:py-4 py-2 lg:px-14 md:12 px-6"
  >
    <nav class="flex justify-between items-center font-secondary">
      <Transition name="fade-up">
        <a v-show="isVisible" href="#hero" class="w-10 h-10 text-font-green">
          <Logo />
        </a>
      </Transition>

      <TransitionGroup
        name="fade-down"
        tag="ul"
        class="hidden md:inline-flex items-center space-x-4 text-sm"
      >
        <li
          v-show="isVisible"
          v-for="(item, index) in menu"
          :key="item.id"
          class="text-slate-100 hover:text-font-green transition-all ease-in-out"
          :style="{ transitionDelay: 200 * index + 'ms' }"
        >
          <a :href="item.href"
            ><span class="text-font-green">{{ item.num }}</span>
            {{ item.name }}</a
          >
        </li>
      </TransitionGroup>

      <ButtonBurger :visble="isVisible" />

      <!-- Mobile (Only) -->
      <aside
        class="fixed w-full h-screen bg-dark inset-0 box-border flex transition-transform duration-300 ease-in-out"
        :class="showNav ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="w-[30%] backdrop-blur-sm bg-black/80"></div>
        <nav class="w-full flex flex-col bg-dark-blue items-center">
          <ul
            class="w-full h-full flex flex-col justify-center items-center gap-y-4"
          >
            <li
              v-for="item in menu"
              :key="item.id"
              class="text-slate-100 hover:text-font-green text-2xl text-center transition-all ease-in-out cursor-pointer"
            >
              <a
                :href="item.href"
                @click="toggle"
                class="flex flex-col relative line"
                ><span class="text-font-green text-xl mb-2">{{
                  item.num
                }}</span>
                {{ item.name }}</a
              >
            </li>
          </ul>
        </nav>
      </aside>

      <!-- End Mobile (Only) -->
    </nav>
  </header>
</template>

<script setup>
import { inject, onMounted, ref, Transition } from "vue";
import ButtonBurger from "./Button/Burger.vue";
import Logo from "./Logo.vue";
import { useIntersectionObserver } from "../composable/useIntersectionObserver";

const showNav = inject("isOpen");
const toggle = inject("toggle");
const sectionRef = ref(null);
const { isVisible } = useIntersectionObserver(sectionRef);

const menu = [
  { id: 1, num: "01.", name: "About", href: "#about" },
  { id: 2, num: "02.", name: "Experience", href: "#experience" },
  { id: 3, num: "03.", name: "Project", href: "#project" },
  { id: 4, num: "04.", name: "Contact", href: "#contact" },
];
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
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
.fade-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease forwards;
}
</style>
