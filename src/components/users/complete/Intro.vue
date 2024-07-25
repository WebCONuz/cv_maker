<script setup></script>

<template>
  <section class="intro bg-main-blue h-[40vh] flex flex-col items-center pt-14">
    <h1 class="font-bold text-white text-[32px] mb-10">Personal details</h1>
    <div class="relative">
      <div class="w-[400px] h-[8px] bg-white"></div>
      <div
        class="flex flex-col items-center absolute -translate-y-[28%] top-0 -left-[30px]"
      >
        <div
          class="flex items-center justify-center text-main-blue w-12 h-12 rounded-full bg-white mb-1"
        >
          <i class="bx bxs-user text-2xl"></i>
        </div>
        <span class="text-white">Personal</span>
      </div>
      <div
        class="flex flex-col items-center absolute -translate-y-[28%] top-0 left-1/2 -translate-x-1/2"
      >
        <div
          class="flex items-center justify-center text-main-blue w-12 h-12 rounded-full bg-white mb-1"
        >
          <i class="bx bx-file text-2xl"></i>
        </div>
        <span class="text-white">Experience</span>
      </div>
      <div
        class="flex flex-col items-center absolute -translate-y-[28%] top-0 -right-[30px]"
      >
        <div
          class="flex items-center justify-center text-main-blue w-12 h-12 rounded-full bg-white mb-1"
        >
          <i class="bx bxs-graduation text-2xl"></i>
        </div>
        <span class="text-white">Education</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  background-image: url("/images/banners/bread.jpg");
  background-repeat: repeat;
}
</style>
