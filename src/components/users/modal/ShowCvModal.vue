<script setup>
import AppModal from "../../common/modal/AppModal.vue";
import { ref } from "vue";

const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

function closeModal() {
  dialog.value = false;
}
</script>

<template>
  <AppModal v-model="dialog" width="900px">
    <!-- x-icon -->
    <i
      class="bx bx-x text-4xl text-gray-200 absolute top-5 right-5 cursor-pointer"
      @click="dialog = !dialog"
    ></i>
  </AppModal>
</template>

<style></style>
