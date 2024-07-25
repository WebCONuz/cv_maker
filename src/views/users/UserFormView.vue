<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Input from "../../components/common/form/Input.vue";
import FormIntro from "../../components/users/complete/Intro.vue";

const router = useRouter();
const userData = reactive({
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  password: "",
  city: "",
  postcode: "",
  address: "",
});
const userImg = ref(null);
const getFile = (e) => {
  userImg.value = e.target.files[0];
};

const postData = () => {
  console.log(userData, userImg.value);
  router.push({ name: "user-data" });
};
</script>

<template>
  <FormIntro />
  <div class="py-14">
    <div class="container">
      <div class="text-center font-bold text-3xl text-main-blue mb-4">
        Personal Details
      </div>
      <form @submit.prevent="postData" class="block">
        <div
          class="w-[60%] flex flex-wrap mx-auto border shadow-xl pt-4 pb-6 px-6 rounded-lg"
        >
          <div class="w-1/2 pr-2 mb-4">
            <label for="fistname" class="block mb-1">First name*</label>
            <input
              id="fistname"
              type="text"
              placeholder="John"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.firstname"
            />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="lastname" class="block mb-1">Last name*</label>
            <input
              id="lastname"
              type="text"
              placeholder="Doe"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.lastname"
            />
          </div>
          <div class="w-1/2 pr-2 mb-4">
            <label for="phone" class="block mb-1">Phone*</label>
            <input
              id="phone"
              yype="text"
              placeholder="+99 899 100 00 01"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.phone"
            />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="email" class="block mb-1">Email*</label>
            <input
              id="email"
              tabindex="email"
              placeholder="example@gmail.com"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.email"
            />
          </div>
          <div class="w-1/2 pr-2 mb-4">
            <label for="password" class="block mb-1">Password*</label>
            <input
              id="password"
              type="password"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.password"
            />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="re-password" class="block mb-1">Re-password*</label>
            <input
              id="re-password"
              type="password"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
          </div>
          <div class="w-1/2 pr-2 mb-4">
            <label for="city" class="block mb-1">City/Town*</label>
            <input
              id="city"
              type="text"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.city"
            />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="postcode" class="block mb-1">Post code*</label>
            <input
              id="postcode"
              type="text"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.postcode"
            />
          </div>
          <div class="w-1/2 pr-2">
            <label for="address" class="block mb-1">Address*</label>
            <input
              id="address"
              type="text"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              v-model="userData.address"
            />
          </div>
          <div class="w-1/2 pl-2">
            <label for="avatar" class="block mb-1">User image*</label>
            <input
              id="avatar"
              type="file"
              required
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
              @change="getFile"
            />
          </div>
        </div>
        <div class="text-center mt-8">
          <button
            type="submit"
            class="py-3 px-6 bg-main-blue text-white font-bold rounded-md"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
