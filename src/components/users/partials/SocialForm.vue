<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  num: Number,
  delete: Function,
});

const socialData = reactive({
  title: "",
  account_name: "",
  link: "",
});
const openForm = ref(true);
const saveSocial = () => {
  console.log("Save Social");
  openForm.value = false;
};

const openSocial = () => {
  openForm.value = true;
};
</script>

<template>
  <form
    @submit.prevent="saveSocial"
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
        Social #{{ props.num }}
      </p>
      <div v-if="!openForm" class="flex items-center">
        <i
          @click="props.delete(props.num)"
          class="bx bx-x text-2xl text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
        <i
          @click="openSocial"
          class="bx bxs-pencil ml-3 text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-wrap overflow-hidden mb-3">
      <div class="w-1/2 pr-2 mb-3">
        <label for="social_name" class="block mb-1">Social name*</label>
        <input
          id="social_name"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="socialData.title"
        />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="social_account" class="block mb-1">Account name*</label>
        <input
          id="social_account"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="socialData.account_name"
        />
      </div>
      <div class="w-1/2 pr-2 mb-3">
        <label for="social_link" class="block mb-1">Social link*</label>
        <input
          id="social_link"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="socialData.link"
        />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="social_logo" class="block mb-1">Logo*</label>
        <input
          id="social_logo"
          type="file"
          class="w-full py-1 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
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
