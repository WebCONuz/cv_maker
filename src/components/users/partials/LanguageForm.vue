<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  num: Number,
  delete: Function,
});

const languageData = reactive({
  language: "",
  degree: "",
});
const openForm = ref(true);
const saveLanguage = () => {
  console.log("Save Language");
  openForm.value = false;
};

const openLanguage = () => {
  openForm.value = true;
};
</script>

<template>
  <form
    @submit.prevent="saveLanguage"
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
        Language #{{ props.num }}
      </p>
      <div v-if="!openForm" class="flex items-center">
        <i
          @click="props.delete(props.num)"
          class="bx bx-x text-2xl text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
        <i
          @click="openLanguage"
          class="bx bxs-pencil ml-3 text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-wrap border-b overflow-hidden mb-3">
      <div class="w-1/2 pr-2 mb-3">
        <label for="language" class="block mb-1">Language*</label>
        <input
          id="language"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="languageData.language"
        />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="level" class="block mb-1">Level*</label>
        <select
          id="level"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="languageData.degree"
        >
          <option value="" selected hidden>Select level</option>
          <option value="elementatry">Elementary</option>
          <option value="pre-intermediate">Pre-intermediate</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
          <option value="native">Native</option>
        </select>
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
