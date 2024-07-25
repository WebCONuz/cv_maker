<script setup></script>

<template>
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
        <router-link
          to="/"
          class="uppercase font-semibold hover:text-main-blue duration-200 mr-8"
          >About us</router-link
        >
        <router-link
          to="/"
          class="uppercase font-semibold hover:text-main-blue duration-200 mr-8"
          >Templates</router-link
        >
        <router-link
          to="/"
          class="uppercase font-semibold hover:text-main-blue duration-200 mr-5"
          >Contact</router-link
        >
        <button
          type="button"
          class="py-2 text-xs font-semibold w-24 bg-main-blue text-white uppercase rounded mr-5"
        >
          log in
        </button>
        <button
          type="button"
          class="py-2 text-xs font-semibold w-24 bg-main-blue text-white uppercase rounded"
        >
          signup
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
