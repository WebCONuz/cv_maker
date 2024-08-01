<script setup>
import { ref, computed } from "vue";
import QuillEditor from "../../common/ui/QuillEditor.vue";

const props = defineProps({
  num: Number,
  delete: Function,
});

const formSchema = computed(() => {
  return {
    title: "required|min:3",
    start_time: "required",
    end_time: "required",
    position: "required",
    faculty: "required",
    logo: "required|image",
  };
});
const description = ref("");

const openForm = ref(true);
const saveEducation = (value) => {
  console.log(value);
  openForm.value = false;
};

const openEducation = () => {
  openForm.value = true;
};
</script>

<template>
  <vee-form
    @submit="saveEducation"
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
        Graduation #{{ props.num }}
      </p>
      <div v-if="!openForm" class="flex items-center">
        <i
          @click="props.delete(props.num)"
          class="bx bx-x text-2xl text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
        <i
          @click="openEducation"
          class="bx bxs-pencil ml-3 text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-wrap border-b overflow-hidden mb-3">
      <div class="w-1/2 pr-2 mb-3">
        <label for="edu-title" class="block mb-1">Title*</label>
        <vee-field
          id="edu-title"
          name="title"
          type="text"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="title" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="edu-faculty" class="block mb-1">Faculty*</label>
        <vee-field
          id="edu-faculty"
          name="faculty"
          type="text"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="faculty" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pr-2 mb-3">
        <label for="edu-logo" class="block mb-1">Logo*</label>
        <vee-field
          id="edu-logo"
          name="logo"
          type="file"
          class="w-full py-1 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="logo" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="edu-position" class="block mb-1">Position*</label>
        <vee-field
          id="edu-position"
          name="position"
          type="text"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="position" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pr-2 mb-3">
        <label for="edu-start-time" class="block mb-1">Start time*</label>
        <vee-field
          id="edu-start-time"
          name="start_time"
          type="date"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="start_time" class="text-red-500 text-sm" />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="edu-end-time" class="block mb-1">End time*</label>
        <vee-field
          id="edu-end-time"
          name="end_time"
          type="date"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="end_time" class="text-red-500 text-sm" />
      </div>
      <div class="w-full block mb-3">
        <p class="mb-1">Description</p>
        <QuillEditor
          placeholder="Enter your summary"
          :modelValue="description"
          name="description"
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
  </vee-form>
</template>

<style scoped></style>
