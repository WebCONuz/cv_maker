<script setup>
import { ref } from "vue";
import Accordion from "../../common/accordion/Accordion.vue";
import QuillEditor from "../../common/ui/QuillEditor.vue";
import ShowCvModal from "../modal/ShowCvModal.vue";
const data = ref("");
const openModal = ref(null);

const saved = ref(false);
const saveSummary = () => {
  saved.value = !saved.value;
};

const openCV = () => {
  openModal.value.openModal();
};
</script>

<template>
  <ShowCvModal ref="openModal" />
  <Accordion class="mb-8" :isOpen="true">
    <template #title>
      <div class="flex items-center">
        <i class="bx bxs-user-circle text-3xl text-gray-600 mr-3"></i>
        <span class="text-xl font-semibold">Resume objective</span>
      </div>
    </template>
    <template #body>
      <p class="mb-2 text-gray-800">Description</p>
      <QuillEditor placeholder="Enter your summary" :modelValue="data" />
      <div class="mt-3 text-end">
        <button
          @click="openCV"
          class="py-1 px-3 border border-main-blue bg-main-blue outline-none rounded text-white mr-2 duration-100"
          :class="saved ? 'opacity-100' : 'opacity-40'"
          :disabled="saved ? false : true"
        >
          <i class="bx bx-file text-lg mr-1"></i>
          <span>Show CV</span>
        </button>
        <button
          @click="saveSummary"
          class="py-1 px-3 border border-gray-400 hover:border-black outline-none rounded text-gray-700 hover:text-black duration-200"
        >
          <i class="bx bxs-save text-lg mr-1"></i>
          <span>Save</span>
        </button>
      </div>
    </template>
  </Accordion>
</template>

<style scoped></style>
