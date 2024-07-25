<script setup>
import { ref } from "vue";
import Accordion from "../../common/accordion/Accordion.vue";
import QuillEditor from "../../common/ui/QuillEditor.vue";
import ExperienceForm from "../partials/ExperienceForm.vue";

const experienceArray = ref([{ id: 1 }]);
const addExperience = () => {
  if (experienceArray.value?.length > 0) {
    experienceArray.value?.push({
      id: experienceArray.value[experienceArray.value?.length - 1].id + 1,
    });
  } else {
    experienceArray.value?.push({ id: 1 });
  }
};
const deleteExperience = (num) => {
  const index = experienceArray.value?.findIndex((i) => i.id == num);
  experienceArray.value?.splice(index, 1);
};
</script>

<template>
  <Accordion class="mb-8">
    <template #title>
      <div class="flex items-center">
        <i class="bx bxs-briefcase text-3xl text-gray-600 mr-3"></i>
        <span class="text-xl font-semibold"> Work experience </span>
      </div>
    </template>
    <template #body>
      <ExperienceForm
        v-for="item in experienceArray"
        :key="item"
        :num="item.id"
        :delete="deleteExperience"
      />
      <button
        @click="addExperience"
        class="cursor-pointer w-full rounded bg-gray-100 py-2 flex items-center justify-center mt-4 hover:bg-gray-200 duration-200"
      >
        <i class="bx bx-plus-circle text-lg text-gray-700 mr-1"></i>
        <span>Add another work experience</span>
      </button>
    </template>
  </Accordion>
</template>

<style scoped></style>
