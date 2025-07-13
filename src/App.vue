<template>
  <div class="min-h-screen bg-dark-blue flex flex-col">
    <header class="w-full z-50 h-fit fixed py-8 lg:px-14 md:12 px-6">
      <nav class="flex justify-between items-center font-secondary">
        <div>
          <h1 class="text-font-green">G.</h1>
        </div>

        <ul class="hidden md:inline-flex items-center space-x-4 text-sm">
          <li
            class="text-slate-100 hover:text-font-green transition-all ease-in-out"
          >
            <a href="#about"><span class="text-font-green">01.</span> About</a>
          </li>
          <li
            class="text-slate-100 hover:text-font-green transition-all ease-in-out"
          >
            <a href="#"><span class="text-font-green">02.</span> Experience</a>
          </li>
          <li
            class="text-slate-100 hover:text-font-green transition-all ease-in-out"
          >
            <a href="#"><span class="text-font-green">03.</span> Work</a>
          </li>
          <li
            class="text-slate-100 hover:text-font-green transition-all ease-in-out"
          >
            <a href="#"><span class="text-font-green">04.</span> Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-1 lg:px-60 md:px-20 px-8 py-12">
      <!-- Hero Section -->
      <div class="w-full h-dvh flex flex-col justify-center">
        <div class="py-6 flex flex-col gap-y-8">
          <p
            class="text-font-green text-secondary text-xl tracking-wide font-bold"
          >
            Hi, my name is
          </p>
          <div class="font-primary space-y-4 font-bold md:text-6xl text-4xl">
            <h1
              class="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300"
            >
              Moch Galih Sulistio Pratama.
            </h1>
            <h1
              class="text-transparent bg-clip-text bg-gradient-to-l from-slate-100 to-slate-300"
            >
              I Build things for the web.
            </h1>
          </div>
          <div class="text-slate-300 lg:w-[70%] font-primary tracking-wide">
            <p>
              I’m a self-taught web developer currently focused on learning both
              frontend and backend technologies to become a
              <span
                class="group relative inline-block underline-hover cursor-pointer text-font-green"
                >fullstack developer</span
              >. My current focus is on building responsive, user-friendly web
              applications using Vue.js, Tailwind CSS, and exploring backend
              development with Node.js and PostgreSQL.
            </p>
          </div>

          <button
            class="max-w-max border border-font-green py-4 px-6 rounded-md text-font-green font-primary tracking-wide font-light cursor-pointer hover:-translate-1 hover:shadow-[0.25rem_0.25rem_#64ffcf] transition-all delay-200 ease-in-out"
          >
            Resume
          </button>
        </div>
      </div>
      <!-- End Hero Section -->

      <!-- About  -->
      <section id="about" class="w-full px-12 flex flex-col gap-y-6 border">
        <div class="inline-flex space-x-2 items-center font-secondary">
          <span class="text-font-green text-2xl">01.</span>
          <h1 class="text-slate-100 text-3xl font-medium">About Me.</h1>
        </div>
        <div
          class="w-full grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 text-slate-50"
        >
          <div class="space-y-2.5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iure et porro fugit ratione. Rerum, porro veritatis
              illum ipsa velit, sapiente, neque exercitationem animi est
              doloremque vero modi incidunt necessitatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iure et porro fugit ratione. Rerum, porro veritatis
              illum ipsa velit, sapiente, neque exercitationem animi est
              doloremque vero modi incidunt necessitatibus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iure et porro fugit ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iure et porro fugit ratione.
            </p>
          </div>

          <div class="w-68 h-68 mx-auto">
            <img
              src="./assets/profile.jpg"
              class="w-full h-full object-cover rounded-md hover:-translate-2 transition-all delay-200 ease-in-out"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
