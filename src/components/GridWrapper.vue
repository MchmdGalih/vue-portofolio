<template>
  <div className=" max-w-7xl  mx-auto gap-1  grid grid-cols-12 grid-row-12 ">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  const gridItems = document.querySelectorAll(".grid-item");
  const isMobile = window.innerWidth <= 768;

  gsap.set(gridItems, { opacity: 0, x: 0, y: 0 });
  gsap.set(gridItems[1], {
    opacity: 1,
    xPercent: isMobile ? 0 : 150,
    yPercent: isMobile ? 40 : 50,
  });

  if (isMobile) {
    gsap.to(gridItems[1], {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(gridItems, {
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.2,
        });
      },
    });
  } else {
    gsap.to(gridItems[1], {
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      duration: 1,
      delay: 1,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(gridItems, {
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          duration: 1,
        });
      },
    });
  }
});
</script>
