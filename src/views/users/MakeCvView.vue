<script setup>
import { ref } from "vue";
import FormIntro from "../../components/users/complete/Intro.vue";
import { makePdf } from "../../composables/makePdf.js";

const page = ref("");

// make PDF
const download = () => {
  makePdf(page.value, "my-resume");
};
</script>

<template>
  <div class="cv">
    <FormIntro :step="3" />
    <div class="container py-14">
      <!-- header -->
      <div class="w-[900px] flex items-center justify-between mb-8 mx-auto">
        <h1 class="text-center text-3xl font-semibold">Your Resume</h1>
        <div class="flex">
          <router-link
            to="/complete-data"
            class="py-3 px-6 bg-gray-400 text-white font-bold rounded-md mr-4"
          >
            Prev Step
          </router-link>
          <button
            @click="download"
            type="button"
            class="py-3 px-6 bg-main-blue text-white font-bold rounded-md"
          >
            <i class="bx bxs-download"></i>
            Download
          </button>
        </div>
      </div>

      <section class="w-[900px] pt-8 pb-10 main-shadow rounded-md mx-auto">
        <div ref="page" class="cv-content px-10">
          <!-- title -->
          <h2 class="text-3xl font-semibold mb-6">
            Mukhammadi Toshtemirov | Fullstack
          </h2>

          <!-- socials -->
          <div class="grid grid-cols-2 mb-4">
            <ul>
              <li class="flex">
                <b class="mr-2">Email:</b>
                <router-link to="https://kun.uz" class="text-gray-500">
                  muxammadi0799@gmail.com
                </router-link>
              </li>
              <li class="flex">
                <b class="mr-2">Phone:</b>
                <router-link to="https://kun.uz" class="text-gray-500">
                  +998995426307
                </router-link>
              </li>
              <li class="flex">
                <b class="mr-2">Location:</b>
                <router-link to="https://kun.uz" class="text-gray-500">
                  Tashkent, Uzbekistan
                </router-link>
              </li>
            </ul>
            <ul>
              <li class="flex">
                <b class="mr-2">LinkedIn:</b>
                <router-link to="https://kun.uz" class="text-gray-500">
                  muxammadi_toshtemirov
                </router-link>
              </li>
              <li class="flex">
                <b class="mr-2">Telegram:</b>
                <router-link to="https://kun.uz" class="text-gray-500">
                  Muxammadi_Toshtemirov
                </router-link>
              </li>
              <li class="flex">
                <b class="mr-2">Github:</b>
                <router-link to="https://kun.uz" class="text-gray-500">
                  github.com/WebCONuz
                </router-link>
              </li>
            </ul>
          </div>

          <!-- experience -->
          <h3 class="text-lg mb-2">
            <b>WORK EXPERIENCE</b>
          </h3>
          <!-- 1 -->
          <div class="experience mb-4">
            <div class="flex items-center justify-between">
              <h4 class="text-lg text-gray-600">
                <b>Najot ta'lim, Tashkent | Frontend teacher & freelancer</b>
              </h4>
              <b>
                <span>Sep 2023</span> -
                <span>Present</span>
              </b>
            </div>
            <div class="pl-8">
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> Based on my knowledge,
                students were taught Vue technology
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> An e-commerce site
                designed specifically for pets has been created. Currently in
                the process of integrating with click, payme and grape payment
                systems
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> A site was created for
                the sale of cars based on the order
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> Increased handling of
                reusable components, application errors, and dynamic routing
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> I am currently building
                my own platform for online teaching
              </p>
            </div>
          </div>
          <!-- 2 -->
          <div class="experience mb-4">
            <div class="flex items-center justify-between">
              <h4 class="text-lg text-gray-600">
                <b>Viento Group, Tashkent | Frontend developer</b>
              </h4>
              <b>
                <span>May 2023</span> -
                <span>Dec 2023</span>
              </b>
            </div>
            <div class="pl-8">
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> New technologies used by
                the team in projects were studied.
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> Implemented changes to 3
                services in production using Nuxt, vue 3, typescript, REST API
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> Developed the frontend
                part of several websites: miniature, essi, pharmlive
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> Contributed to code
                quality by reviewing other teammates' code per week
              </p>
            </div>
          </div>

          <!-- education -->
          <h3 class="text-lg mb-2">
            <b>EDUCATION</b>
          </h3>
          <div class="education mb-4">
            <div class="pl-8">
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> Tashkent University of
                Information Technologies, 2018-2022, Software engineering. GPA:
                4.16. Level: Bachelor
              </p>
              <p class="text-gray-500 flex items-start">
                <span class="text-black mr-2">-</span> "Najot Ta'lim" learning
                center 2022-2023, Node.js+Vue.js boot camp course
              </p>
            </div>
          </div>

          <!-- skills -->
          <h3 class="text-lg mb-2">
            <b>SKILLS</b>
          </h3>
          <div class="skills mb-4">
            <div class="pl-8">
              <p class="text-gray-500 flex">
                <span class="text-black mr-2">-</span>
                <b class="text-gray-700 mr-2">Programming Languages:</b>
                HTML, CSS, JavaScript, Typescript, PostgreSQL
              </p>
              <p class="text-gray-500 flex">
                <span class="text-black mr-2">-</span>
                <span>
                  <b class="text-gray-700 mr-2">Technologies and Frameworks:</b>
                  Node, Express, Nest, Swager, Git, Postman, Bootstap. Tailwind,
                  Vite, React, Vue, Vuex, Pinia, Nuxt3
                </span>
              </p>
              <p class="text-gray-500 flex">
                <span class="text-black mr-2">-</span>
                <b class="text-gray-700 mr-2">Language:</b>
                Uzbek (native), English (intermediate)
              </p>
            </div>
          </div>

          <!-- reference -->
          <h3 class="text-lg mb-2">
            <b>REFERENCE</b>
          </h3>
          <div class="skills">
            <div class="pl-8">
              <p class="flex">
                <span class="mr-2">-</span>
                <span>
                  <b class="text-gray-700 mr-2">My portfolio:</b>
                  <router-link to="#" class="text-gray-500">
                    toshtemirov.netlify.app
                  </router-link>
                </span>
              </p>
              <p class="flex">
                <span class="mr-2">-</span>
                <span>
                  <b class="text-gray-700 mr-2">Github:</b>
                  <router-link to="#" class="text-gray-500">
                    github.com/WebCONuz
                  </router-link>
                </span>
              </p>
              <p class="flex">
                <span class="mr-2">-</span>
                <span>
                  <b class="text-gray-700 mr-2">Some real projects:</b>
                  <router-link to="#" class="text-gray-500">
                    k-w, pharmlive, homedev, miniature-uz, lib.samtuit,
                    zaminavto
                  </router-link>
                </span>
              </p>
              <p class="flex">
                <span class="mr-2">-</span>
                <span>
                  <b class="text-gray-700 mr-2">Resonal Projects:</b>
                  <router-link to="#" class="text-gray-500">
                    My Eduon, BookApp online Servise
                  </router-link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
