<script setup>
import AppModal from "../../common/modal/AppModal-wh.vue";
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
  <AppModal v-model="dialog" width="900px" minHeight="900px">
    <!-- x-icon -->
    <i
      class="bx bx-x text-4xl text-gray-200 absolute top-5 right-5 cursor-pointer hover:text-gray-500 duration-100"
      @click="dialog = !dialog"
    ></i>

    <!-- cv content -->
    <div class="px-4 py-3">
      <h2 class="text-3xl font-semibold mb-6">
        Mukhammadi Toshtemirov | Fullstack
      </h2>

      <!-- socials -->
      <div class="grid grid-cols-2 mb-4">
        <div class="flex">
          <b class="mr-2">Email:</b>
          <router-link to="https://kun.uz" class="text-gray-500">
            muxammadi0799@gmail.com
          </router-link>
        </div>
        <div class="flex">
          <b class="mr-2">Phone:</b>
          <router-link to="https://kun.uz" class="text-gray-500">
            +998995426307
          </router-link>
        </div>
        <div class="flex">
          <b class="mr-2">Location:</b>
          <router-link to="https://kun.uz" class="text-gray-500">
            Tashkent, Uzbekistan
          </router-link>
        </div>
        <div class="flex">
          <b class="mr-2">LinkedIn:</b>
          <router-link to="https://kun.uz" class="text-gray-500">
            muxammadi_toshtemirov
          </router-link>
        </div>
        <div class="flex">
          <b class="mr-2">Telegram:</b>
          <router-link to="https://kun.uz" class="text-gray-500">
            Muxammadi_Toshtemirov
          </router-link>
        </div>
        <div class="flex">
          <b class="mr-2">Github:</b>
          <router-link to="https://kun.uz" class="text-gray-500">
            github.com/WebCONuz
          </router-link>
        </div>
      </div>

      <!-- summary -->
      <h3 class="text-lg mb-2">
        <b>SUMMARY</b>
      </h3>
      <p class="mb-4 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi
        quia hic quo illo et totam velit iure neque modi praesentium asperiores
        quos, odio sapiente nostrum repellendus alias at doloribus officiis
        aperiam rerum dolore omnis. Non voluptas architecto dolore explicabo.
        odio sapiente nostrum repellendus alias at doloribus officiis aperiam
        rerum dolore omnis. Non voluptas architecto dolore explicabo.
      </p>
    </div>
  </AppModal>
</template>

<style></style>
