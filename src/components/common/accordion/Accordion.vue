<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
});
const openAccordion = ref(props.isOpen || false);
</script>

<template>
  <div class="w-[60%] mx-auto bg-white main-shadow rounded-md p-6">
    <div
      class="flex items-center justify-between cursor-pointer"
      @click="openAccordion = !openAccordion"
    >
      <slot name="title" />
      <i
        class="bx bx-chevron-down text-3xl text-gray-600 duration-200"
        :class="openAccordion ? 'rotate-180' : ''"
      ></i>
    </div>
    <div
      class="overflow-hidden duration-500 pt-2"
      :class="openAccordion ? 'max-h-[5000px]' : 'max-h-0'"
    >
      <div class="border-t border-gray-300 pb-4"></div>
      <slot name="body" />
    </div>
  </div>
</template>

<style scoped></style>
