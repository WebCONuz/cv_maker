<script setup>
import { ref } from "vue";
import LoginModal from "../modal/LoginModal.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const openModal = ref(null);
const access_token = ref(null);

function openSignModal() {
  access_token.value = localStorage.getItem("access_token");
  if (access_token.value) {
    router.push({ name: "user-complete-user" });
  } else {
    openModal.value.openModal();
  }
}
</script>

<template>
  <LoginModal ref="openModal" />
  <section class="container flex items-center py-20">
    <div class="w-1/2 pr-14">
      <span
        class="py-[10px] pl-[10px] pr-4 rounded-[30px] bg-light-blue inline-block"
      >
        <span
          class="float-left w-6 h-6 rounded-full bg-[#1ACAB6] text-dark-blue text-lg flex items-center justify-center"
        >
          <i class="bx bx-dollar"></i>
        </span>
        <span class="text-sm font-bold text-main-blue ml-3">
          Discover The Easiest ways to Build Your CV!
        </span>
      </span>
      <h1 class="font-bold text-[50px] text-dark-blue my-6">
        Online CV Builder With Creative Templates.
      </h1>
      <p class="mb-8 text-gray-400 text-[22px] leading-[180%]">
        Our Perfect resume builder takes the hassle out of resume writing.
        Choose from several templates and follow easy prompts to create the
        perfect job-ready resume.
      </p>
      <div class="flex">
        <button
          type="button"
          @click="openSignModal"
          class="py-4 text-sm font-bold w-[170px] bg-main-blue text-white text-center uppercase rounded-md mr-5"
        >
          create cv
        </button>
        <router-link
          to="contact"
          type="button"
          class="py-4 text-center text-sm font-bold w-[170px] bg-main-blue text-white uppercase rounded-md"
        >
          contact us
        </router-link>
      </div>
    </div>
    <img src="/images/banners/intro.png" alt="intro-image" class="w-1/2" />
  </section>
</template>

<style scoped></style>
