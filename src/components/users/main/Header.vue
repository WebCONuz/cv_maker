<script setup>
import { ref, onMounted } from "vue";
import LoginModal from "../modal/LoginModal.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const openModal = ref(null);

function openSignModal() {
  openModal.value.openModal();
}

const logout = () => {
  localStorage.removeItem("access_token");
  router.go(0);
};

const access_token = ref(null);
onMounted(() => {
  access_token.value = localStorage.getItem("access_token");
});
</script>

<template>
  <LoginModal ref="openModal" />
  <header class="w-full py-3 bg-white sticky top-0 left-0 z-20 shadow-md">
    <div class="container flex items-center justify-between">
      <router-link to="/" class="flex items-center">
        <div
          class="w-10 h-10 flex items-center justify-center bg-main-blue rounded-full mr-2"
        >
          <i class="bx bxs-user text-white text-2xl"></i>
        </div>
        <span class="text-2xl font-semibold text-gray-800">CV Builder</span>
      </router-link>
      <nav class="flex items-center">
        <router-link
          to="/"
          class="uppercase font-semibold hover:text-main-blue duration-200 mr-8"
          >Home</router-link
        >
        <!-- <router-link
          to="/"
          class="uppercase font-semibold hover:text-main-blue duration-200 mr-8"
          >About us</router-link
        > -->
        <router-link
          to="/templates"
          class="uppercase font-semibold hover:text-main-blue duration-200 mr-8"
          >Templates</router-link
        >
        <router-link
          to="/contact"
          class="uppercase font-semibold hover:text-main-blue duration-200 mr-5"
          >Contact</router-link
        >
        <button
          v-if="!access_token"
          type="button"
          class="py-2 text-xs font-semibold w-24 bg-main-blue text-white uppercase rounded"
          @click="openSignModal"
        >
          log in
        </button>
        <div
          v-else
          class="relative w-9 h-9 rounded-md bg-gray-200 flex items-center justify-center group"
        >
          <i class="bx bxs-user text-2xl text-gray-400"></i>
          <div
            class="w-24 absolute top-[43px] right-0 rounded-md bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[38px] duration-200"
          >
            <button
              @click="logout"
              type="button"
              class="py-1 w-full border border-gray-200 bg-white text-gray-400 rounded flex items-center justify-center hover:bg-gray-100 hover:text-gray-600 duration-200"
            >
              <i class="bx bx-log-out text-lg"></i>
              <span class="text-sm ml-1 mb-[2px]">Log out</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
