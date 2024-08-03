<script setup>
import AppModal from "../../common/modal/AppModal.vue";
import { ref, computed } from "vue";
// import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
const router = useRouter();
// const toast = useToast();

const login_schema = computed(() => {
  return {
    email: "required|email",
    password: "required|min:6",
  };
});
const register_schema = computed(() => {
  return {
    phone: "required|digits:9",
    email: "required|email",
    password: "required|min:6",
  };
});

const showPassword = ref(false);
const createUser = ref(false);

const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

async function sendData(value) {
  console.log(value);
  localStorage.setItem("access_token", "aleeee");
  if (createUser.value) {
    dialog.value = false;
    router.go(0);
    // toast.success("Register is succesfull");
  } else {
    dialog.value = false;
    router.go(0);
    // toast.success("Login is succesfull!");
  }
}
</script>

<template>
  <AppModal v-model="dialog" width="450px">
    <!-- x-icon -->
    <i
      class="bx bx-x text-4xl text-gray-200 absolute top-5 right-5 cursor-pointer"
      @click="dialog = !dialog"
    ></i>

    <vee-form
      @submit="sendData"
      :validation-schema="createUser ? register_schema : login_schema"
    >
      <h3
        class="text-main-blue font-semibold text-2xl mb-5 leading-[120%] text-center"
        :class="createUser ? 'mt-2' : ''"
      >
        {{ !createUser ? "Login" : "Registration" }}
      </h3>
      <div v-if="createUser" class="mb-[10px]">
        <div class="flex mb-1">
          <div class="py-2 px-3 bg-[#E8F0FE] flex items-center rounded-l-md">
            +998
          </div>
          <vee-field
            name="phone"
            placeholder="Phone number"
            type="text"
            class="w-full py-2 px-4 outline-none border border-gray-300 border-l-[#E8F0FE] focus:border-main-blue rounded-r-md"
          />
        </div>
        <vee-error name="phone" class="text-red-500 text-sm" />
      </div>
      <div class="mb-[10px]">
        <vee-field
          name="email"
          placeholder="Your email"
          type="email"
          class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
        />
        <vee-error name="email" class="text-red-500 text-sm" />
      </div>
      <div class="mb-4">
        <div class="relative mb-1">
          <vee-field
            name="password"
            placeholder="Your password"
            :type="showPassword ? 'text' : 'password'"
            class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
          />
          <div
            class="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
            @click="showPassword = !showPassword"
          >
            <i v-if="!showPassword" class="bx bx-show"></i>
            <i v-else class="bx bx-low-vision"></i>
          </div>
        </div>
        <vee-error name="password" class="text-red-500 text-sm" />
      </div>
      <input
        type="submit"
        :value="createUser ? 'Register' : 'Login'"
        class="outline-none py-2 w-full rounded-md border border-main-blue bg-main-blue text-white"
      />
    </vee-form>
    <p
      class="text-gray-400 underline text-center mt-6 cursor-pointer hover:text-black duration-200"
      @click="createUser = !createUser"
    >
      {{ createUser ? "Login" : "Registration" }}
    </p>
  </AppModal>
</template>

<style></style>
