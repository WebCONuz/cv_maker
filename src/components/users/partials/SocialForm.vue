<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  num: Number,
  delete: Function,
});

const formSchema = computed(() => {
  return {
    title: "required|min:3",
    account_name: "required|min:3",
    link: "required|url",
    logo: "required|image",
  };
});

const openForm = ref(true);
const saveSocial = (value) => {
  console.log(value);
  openForm.value = false;
};

const openSocial = () => {
  openForm.value = true;
};
</script>

<template>
  <vee-form
    @submit="saveSocial"
    :validation-schema="formSchema"
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
        <vee-field
          id="social_name"
          name="title"
          type="text"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="title" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="social_account" class="block mb-1">Account name*</label>
        <vee-field
          id="social_account"
          name="account_name"
          type="text"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="account_name" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pr-2 mb-3">
        <label for="social_link" class="block mb-1">Social link*</label>
        <vee-field
          id="social_link"
          name="link"
          type="text"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="link" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="social_logo" class="block mb-1">Logo*</label>
        <vee-field
          id="social_logo"
          name="logo"
          type="file"
          class="w-full py-1 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="logo" class="text-red-500 text-sm" />
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
  </vee-form>
</template>

<style scoped></style>
