<script setup></script>

<template>
  <section class="container py-10">
    <h1 class="text-4xl text-main-blue font-semibold mb-2 ml-4">Templates</h1>
    <div class="flex flex-wrap">
      <div class="template-card rounded-md overflow-hidden">
        <img
          src="/images/cv/cv-1.jpg"
          alt="cv-image"
          class="w-full cursor-pointer"
        />
      </div>
      <div
        class="template-card flex flex-col items-center justify-center rounded-md"
      >
        <i class="bx bx-image text-4xl text-gray-300 mb-1"></i>
        <span class="text-gray-400">It will be added soon ...</span>
      </div>
      <div
        class="template-card flex flex-col items-center justify-center rounded-md"
      >
        <i class="bx bx-image text-4xl text-gray-300 mb-1"></i>
        <span class="text-gray-400">It will be added soon ...</span>
      </div>
      <div
        class="template-card flex flex-col items-center justify-center rounded-md"
      >
        <i class="bx bx-image text-4xl text-gray-300 mb-1"></i>
        <span class="text-gray-400">It will be added soon ...</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.template-card {
  width: calc(100% / 4 - 30px);
  margin: 20px 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
}
.template-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
