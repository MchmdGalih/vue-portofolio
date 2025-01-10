<script setup></script>

<template>
  <main class="max-w-full min-h-screen py-4 px-4">
    <div
      className=" max-w-6xl bg-gray-300  mx-auto gap-1  grid grid-cols-12 grid-row-12 "
    >
      <div
        className="col-span-12 w-full flex flex-col justify-center items-center  "
      >
        <header
          class="bg-stone-900 text-white w-full flex justify-between items-center p-4 rounded-xl"
        >
          <h1>G.</h1>
          <h2>PROJECTS</h2>
        </header>
      </div>
      <div className="col-span-3 row-span-1 border border-solid  ">
        <div class="rounded-md">
          <img
            src="https://i.pinimg.com/736x/80/3c/0b/803c0bca14a3d72022ffac4d4a4aa0b8.jpg"
            class="rounded-md w-full"
          />
        </div>
      </div>
      <div className="col-span-6 row-span-1 ">
        <div class="w-full h-full flex flex-col rounded-md gap-2">
          <div
            class="flex justify-around px-4 bg-stone-950 text-white py-4 items-center rounded-md"
          >
            <p>
              <v-icon name="fa-github" scale="1.5" />
            </p>
            <p><v-icon name="fa-linkedin" scale="1.5" /></p>
            <p><v-icon name="fa-instagram" scale="1.5" /></p>
            <p><v-icon name="fa-facebook" scale="1.5" /></p>
          </div>

          <div class="bg-stone-950 text-white flex-grow rounded-md">
            <div
              class="h-full flex flex-col justify-around py-2 px-6 text-center items-center"
            >
              <h1 class="text-4xl">HEY! I'M GALIH</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem error ad blanditiis. Accusamus ab expedita est
                voluptas. Architecto, laboriosam commodi?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, distinctio!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 row-span-2 rounded-md border  ">
        <div class="relative w-full h-full">
          <img
            src="/src/assets/bg-about.png"
            class="absolute top-0 left-0 rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className="col-span-7 bg-stone-950 text-white row-span-2 border rounded-md"
      >
        <div class="p-3 text-center">PROJECTS</div>
      </div>
      <div className="col-span-2 row-span-1 border rounded-md ">
        <div class="relative">
          <img
            src="https://i.pinimg.com/236x/e0/b6/23/e0b6235b1026ec83cbc7ba3422bd21e1.jpg"
            class="w-full max-h-[100px] object-cover opacity-80 rounded-sm"
          />
          <p
            class="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold w-full text-center opacity-75"
          >
            HIRE ME PLS
          </p>
        </div>
      </div>
      <div className="col-span-5 row-span-1 border rounded-md">
        <section
          class="w-full bg-stone-950 px-10 text-white text-center rounded-md"
        >
          SKILL
        </section>
      </div>
    </div>
  </main>
</template>
