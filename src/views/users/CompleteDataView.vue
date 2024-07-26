<script setup>
import { useRouter } from "vue-router";
import FormIntro from "../../components/users/complete/Intro.vue";
import Summary from "../../components/users/complete/Summary.vue";
import Education from "../../components/users/complete/Education.vue";
import Experience from "../../components/users/complete/Experience.vue";
import Skills from "../../components/users/complete/Skills.vue";
import Language from "../../components/users/complete/Language.vue";
import Social from "../../components/users/complete/Social.vue";

const router = useRouter();
const nextStep = () => {
  router.push({ name: "user-make-cv" });
};
</script>

<template>
  <FormIntro :step="2" />
  <div class="py-14">
    <div class="container">
      <h1 class="text-center text-3xl font-semibold mb-8">Enter your data</h1>

      <Summary />
      <Social />
      <Education />
      <Experience />
      <Skills />
      <Language />

      <div class="flex justify-between mt-8 w-[60%] mx-auto">
        <router-link
          to="/complete-user"
          class="py-3 px-6 bg-gray-400 text-white font-bold rounded-md"
        >
          Prev Step
        </router-link>
        <button
          @click="nextStep"
          type="button"
          class="py-3 px-6 bg-main-blue text-white font-bold rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
