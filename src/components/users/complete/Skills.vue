<script setup>
import { ref } from "vue";
import Accordion from "../../common/accordion/Accordion.vue";
import SkillForm from "../partials/SkillForm.vue";
import ShowCvModal from "../modal/ShowCvModal.vue";

const isSave = ref(false);
const skillArray = ref([{ id: 1 }]);
const addSkill = () => {
  if (skillArray.value?.length > 0) {
    skillArray.value?.push({
      id: skillArray.value[skillArray.value?.length - 1].id + 1,
    });
  } else {
    skillArray.value?.push({ id: 1 });
  }
};
const deleteSkill = (num) => {
  const index = skillArray.value?.findIndex((i) => i.id == num);
  skillArray.value?.splice(index, 1);
  if (skillArray.value?.length === 0) {
    isSave.value = false;
  }
};

const openModal = ref(null);
const openCV = () => {
  openModal.value.openModal();
};

const showBtn = (val) => {
  if (val) {
    isSave.value = true;
  } else {
    isSave.value = false;
  }
};
</script>

<template>
  <ShowCvModal ref="openModal" />
  <Accordion class="mb-8">
    <template #title>
      <div class="flex items-center">
        <i class="bx bxs-mouse-alt text-3xl text-gray-600 mr-3"></i>
        <span class="text-xl font-semibold"> Your skills </span>
      </div>
    </template>
    <template #body>
      <SkillForm
        v-for="item in skillArray"
        :key="item"
        :num="item.id"
        :delete="deleteSkill"
        :showBtn="showBtn"
      />
      <button
        @click="addSkill"
        class="cursor-pointer w-full rounded bg-gray-100 py-2 flex items-center justify-center mt-4 hover:bg-gray-200 duration-200"
      >
        <i class="bx bx-plus-circle text-lg text-gray-700 mr-1"></i>
        <span>Add another skill</span>
      </button>
      <button
        v-if="isSave"
        @click="openCV"
        class="cursor-pointer w-full rounded bg-main-blue text-white py-2 flex items-center justify-center mt-2"
      >
        <i class="bx bx-file text-lg mr-1"></i>
        <span>Show CV</span>
      </button>
    </template>
  </Accordion>
</template>

<style scoped></style>
