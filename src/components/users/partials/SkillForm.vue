<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  num: Number,
  delete: Function,
});

const skillData = reactive({
  name: "",
  type: "",
});
const openForm = ref(true);
const saveSkill = () => {
  console.log("Save Skill");
  openForm.value = false;
};

const openSkill = () => {
  openForm.value = true;
};
</script>

<template>
  <form
    @submit.prevent="saveSkill"
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
        Skill #{{ props.num }}
      </p>
      <div v-if="!openForm" class="flex items-center">
        <i
          @click="props.delete(props.num)"
          class="bx bx-x text-2xl text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
        <i
          @click="openSkill"
          class="bx bxs-pencil ml-3 text-gray-500 hover:text-black cursor-pointer duration-200"
        ></i>
      </div>
    </div>

    <!-- body -->
    <div class="flex flex-wrap border-b overflow-hidden mb-3">
      <div class="w-1/2 pr-2 mb-3">
        <label for="skill_name" class="block mb-1">Name*</label>
        <input
          id="skill_name"
          type="text"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="skillData.name"
        />
      </div>
      <div class="w-1/2 pl-2 mb-3">
        <label for="skill_type" class="block mb-1">Skill type*</label>
        <select
          id="skill_type"
          required
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          v-model="skillData.type"
        >
          <option value="" selected hidden>Select type</option>
          <option value="hard">Hard skill</option>
          <option value="soft">Soft skill</option>
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
