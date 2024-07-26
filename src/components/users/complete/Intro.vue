<script setup>
const props = defineProps({
  step: Number,
});
</script>

<template>
  <section class="intro bg-main-blue h-[40vh] flex flex-col items-center pt-14">
    <h1 class="font-bold text-white text-[32px] mb-10">Personal details</h1>
    <div class="relative">
      <div class="w-[350px] h-[8px] bg-[#D0F2F2]">
        <div
          class="h-full bg-yellow-400"
          :class="
            props.step == 1 ? 'w-1/4' : props.step == 2 ? 'w-1/2' : 'w-full'
          "
        ></div>
      </div>
      <div
        class="flex flex-col items-center absolute -translate-y-[28%] top-0 -left-[30px]"
      >
        <div
          class="flex items-center justify-center text-white w-12 h-12 rounded-full bg-yellow-400 mb-1"
        >
          <i class="bx bxs-user text-2xl"></i>
        </div>
        <span class="text-yellow-400 font-medium">Personal</span>
      </div>
      <div
        class="flex flex-col items-center absolute -translate-y-[28%] top-0 left-1/2 -translate-x-1/2"
      >
        <div
          class="flex items-center justify-center w-12 h-12 rounded-full mb-1"
          :class="
            props.step < 2
              ? 'bg-[#D0F2F2] text-main-blue'
              : 'bg-yellow-400 text-white'
          "
        >
          <i class="bx bxs-graduation text-2xl"></i>
        </div>
        <span
          class="font-medium"
          :class="props.step < 2 ? 'text-white' : 'text-yellow-400'"
          >Experience</span
        >
      </div>
      <div
        class="flex flex-col items-center absolute -translate-y-[28%] top-0 -right-[30px]"
      >
        <div
          class="flex items-center justify-center text-main-blue w-12 h-12 rounded-full bg-[#D0F2F2] mb-1"
          :class="
            props.step < 3
              ? 'bg-[#D0F2F2] text-main-blue'
              : 'bg-yellow-400 text-white'
          "
        >
          <i class="bx bx-file text-2xl"></i>
        </div>
        <span
          class="font-medium"
          :class="props.step < 3 ? 'text-white' : 'text-yellow-400'"
          >Resume</span
        >
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
