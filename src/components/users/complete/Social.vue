<script setup>
import { ref } from "vue";
import Accordion from "../../common/accordion/Accordion.vue";
import SocialForm from "../partials/SocialForm.vue";

const socialArray = ref([{ id: 1 }]);
const addSocial = () => {
  if (socialArray.value?.length > 0) {
    socialArray.value?.push({
      id: socialArray.value[socialArray.value?.length - 1].id + 1,
    });
  } else {
    socialArray.value?.push({ id: 1 });
  }
};
const deleteSocial = (num) => {
  const index = socialArray.value?.findIndex((i) => i.id == num);
  socialArray.value?.splice(index, 1);
};
</script>

<template>
  <Accordion class="mb-8">
    <template #title>
      <div class="flex items-center">
        <i class="bx bx-link text-3xl text-gray-600 mr-3"></i>
        <span class="text-xl font-semibold"> Your socials </span>
      </div>
    </template>
    <template #body>
      <SocialForm
        v-for="item in socialArray"
        :key="item"
        :num="item.id"
        :delete="deleteSocial"
      />
      <button
        @click="addSocial"
        class="cursor-pointer w-full rounded bg-gray-100 py-2 flex items-center justify-center mt-4 hover:bg-gray-200 duration-200"
      >
        <i class="bx bx-plus-circle text-lg text-gray-700 mr-1"></i>
        <span>Add another social</span>
      </button>
    </template>
  </Accordion>
</template>

<style scoped></style>
