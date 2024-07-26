<script setup>
import { ref } from "vue";
import Accordion from "../../common/accordion/Accordion.vue";
import QuillEditor from "../../common/ui/QuillEditor.vue";
import LanguageForm from "../partials/LanguageForm.vue";

const languageArray = ref([{ id: 1 }]);
const addLanguage = () => {
  if (languageArray.value?.length > 0) {
    languageArray.value?.push({
      id: languageArray.value[languageArray.value?.length - 1].id + 1,
    });
  } else {
    languageArray.value?.push({ id: 1 });
  }
};
const deleteLanguage = (num) => {
  const index = languageArray.value?.findIndex((i) => i.id == num);
  languageArray.value?.splice(index, 1);
};
</script>

<template>
  <Accordion class="mb-8">
    <template #title>
      <div class="flex items-center">
        <i class="bx bx-globe text-3xl text-gray-600 mr-3"></i>
        <span class="text-xl font-semibold"> Your languages </span>
      </div>
    </template>
    <template #body>
      <LanguageForm
        v-for="item in languageArray"
        :key="item"
        :num="item.id"
        :delete="deleteLanguage"
      />
      <button
        @click="addLanguage"
        class="cursor-pointer w-full rounded bg-gray-100 py-2 flex items-center justify-center mt-4 hover:bg-gray-200 duration-200"
      >
        <i class="bx bx-plus-circle text-lg text-gray-700 mr-1"></i>
        <span>Add another language</span>
      </button>
    </template>
  </Accordion>
</template>

<style scoped></style>
