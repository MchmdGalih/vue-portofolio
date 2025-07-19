<template>
  <section>
    <div class="flex flex-col gap-y-12 items-center overflow-x-hidden">
      <div class="block space-y-2 items-center text-center font-secondary mb-3">
        <h1 class="text-slate-300 md:text-2xl text-xl">A Few Certificates.</h1>
        <p class="text-font-green md:text-xl text-sm font-medium">
          Proud to share a few certificates from my learning journey.
        </p>
      </div>
      <Marquee
        speed="50"
        gradient="true"
        gradient-color="#0a192f"
        gradient-width="25px"
        pauseOnClick
        pauseOnHover
      >
        <figure
          class="w-auto lg:h-96 md:h-64 h-48 border border-font-green rounded-md mr-4 ml-4"
          v-for="(item, index) in firstColumn"
          :key="index"
        >
          <img
            :src="item"
            alt="certificate"
            class="w-full h-full object-cover rounded-md"
          />
        </figure>
      </Marquee>

      <Marquee
        speed="50"
        gradient="true"
        gradient-color="#0a192f"
        gradient-width="50px"
        pauseOnClick
        pauseOnHover
      >
        <figure
          class="w-auto lg:h-96 md:h-64 h-48 border border-font-green rounded-md mr-4 ml-4"
          v-for="(item, index) in secondColumn"
          :key="index"
        >
          <img
            :src="item"
            alt="certificate"
            class="w-full h-full object-cover rounded-md"
          />
        </figure>
      </Marquee>
    </div>
  </section>
</template>

<script setup>
import { Marquee } from "vue-fast-marquee";
import aws from "../assets/image/sertif/AWS.png";
import be from "../assets/image/sertif/BE.png";
import codepolitan from "../assets/image/sertif/codepolitan.png";
import fe from "../assets/image/sertif/fe.png";
import js from "../assets/image/sertif/js.png";
import reactBasic from "../assets/image/sertif/react-basic.png";
import reactInter from "../assets/image/sertif/react-inter.png";
import webDev from "../assets/image/sertif/webDev.png";
import udemy from "../assets/image/sertif/udemy.png";

const dataSertif = [
  aws,
  be,
  codepolitan,
  fe,
  js,
  reactBasic,
  reactInter,
  webDev,
  udemy,
];
const mid = Math.ceil(dataSertif.length / 2);
const firstColumn = dataSertif.slice(0, mid);
const secondColumn = dataSertif.slice(mid);
</script>
