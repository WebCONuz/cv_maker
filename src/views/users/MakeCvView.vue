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
      <div class="flex items-center justify-between mb-8">
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

      <section class="py-6 main-shadow rounded-md">
        <div ref="page" class="cv-content px-8">
          <!-- title -->
          <h2 class="text-2xl font-semibold mb-4">
            Mukhammadi Toshtemirov | Frontend
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

          <!-- body -->
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, odit
            obcaecati molestias maiores ad delectus perferendis iusto temporibus
            sequi illo! Odit quasi architecto aliquam id delectus, pariatur
            similique labore itaque accusantium ratione, dolore deleniti?
            Suscipit quam cum blanditiis praesentium distinctio incidunt maxime!
            Velit dicta expedita numquam incidunt, esse minus, ad nam nulla
            totam fugit consequatur rem mollitia, libero animi aspernatur
            obcaecati ea explicabo. Adipisci, corrupti atque iste magni nulla
            amet, consequuntur dolores hic eius enim optio commodi, omnis
            reprehenderit aliquid dolorem saepe blanditiis totam unde
            consequatur? Adipisci atque nam molestiae sapiente, facere ullam
            sequi temporibus, illum nisi, ab saepe possimus!
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
