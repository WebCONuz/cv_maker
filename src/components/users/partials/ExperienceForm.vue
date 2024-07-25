<script setup>
import { reactive, ref } from "vue";
import QuillEditor from "../../common/ui/QuillEditor.vue";

const props = defineProps({
  num: Number,
  delete: Function,
});

const experienceData = reactive({
  company_name: "",
  company_address: "",
  position: "",
  start_time: "",
  end_time: "",
  description: "",
});
const openForm = ref(true);
const saveExperience = () => {
  console.log("Save Experience");
  openForm.value = false;
};

const openExperience = () => {
  openForm.value = true;
};
</script>

<template>
  <form
    @submit.prevent="saveExperience"
    class="block overflow-hidden duration-200 mb-3"
    :class="openForm ? 'max-h-[800px]' : 'max-h-[33.6px]'"
  >
    <!-- header -->
    <div
      class="flex items-center justify-between h-[33.6px] mb-3 px-3 rounded-md"
      :class="!openForm ? 'bg-green-100' : 'bg-gray-100'"
    >
      <p
        class="font-semibold"
        :class="!openForm ? 'text-green-500' : 'text-gray-600'"
      >
        Experience #{{ props.num }}
      </p>
      <div v-if="!openForm" class="flex items-center">
        <i
          @click="props.delete(props.num)"
          class="bx bx-x text-2xl text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
        <i
          @click="openExperience"
          class="bx bxs-pencil ml-3 text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
      </div>
    </div>
    <!-- body -->
    <div class="flex flex-wrap border-b overflow-hidden mb-3">
      <div class="w-1/2 pr-2 mb-3">
        <label for="company_name" class="block mb-1">Company*</label>
        <input
          id="company_name"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="experienceData.company_name"
        />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="company_address" class="block mb-1">Address*</label>
        <input
          id="company_address"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="experienceData.company_address"
        />
      </div>
      <div class="w-1/2 pr-2 mb-3">
        <label for="edu-logo" class="block mb-1">Logo*</label>
        <input
          id="edu-logo"
          type="file"
          class="w-full py-1 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="edu-position" class="block mb-1">Position*</label>
        <input
          id="edu-position"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="experienceData.position"
        />
      </div>
      <div class="w-1/2 pr-2 mb-3">
        <label for="edu-start-time" class="block mb-1">Start time*</label>
        <input
          id="edu-start-time"
          type="date"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="experienceData.start_time"
        />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="edu-end-time" class="block mb-1">End time*</label>
        <input
          id="edu-end-time"
          type="date"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="experienceData.end_time"
        />
      </div>
      <div class="w-full block mb-3">
        <p class="mb-1">Description</p>
        <QuillEditor
          placeholder="Enter your summary"
          :modelValue="experienceData.description"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button
        @click="props.delete(props.num)"
        type="button"
        class="py-1 px-3 border border-gray-400 hover:border-black outline-none rounded text-gray-700 hover:text-black duration-200 mr-2"
      >
        <i class="bx bxs-trash-alt text-lg mr-1"></i>
        <span>Delete</span>
      </button>
      <button
        type="submit"
        class="py-1 px-3 border border-gray-400 hover:border-black outline-none rounded text-gray-700 hover:text-black duration-200"
      >
        <i class="bx bxs-save text-lg mr-1"></i>
        <span>Save</span>
      </button>
    </div>
  </form>
</template>

<style scoped></style>
