<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import FormIntro from "../../components/users/complete/Intro.vue";

const router = useRouter();
const formSchema = computed(() => {
  return {
    firstname: "required|min:3",
    lastname: "required|min:3",
    phone: "required|digits:9",
    email: "email",
    password: "required|min:6",
    repassword: "confirmed:@password",
    city: "required",
    postcode: "required",
    address: "required",
    avatar: "required|image",
  };
});

const postData = (value) => {
  console.log(value);
  router.push({ name: "user-data" });
};
</script>

<template>
  <FormIntro :step="1" />
  <div class="py-14">
    <div class="container">
      <div class="text-center font-bold text-3xl text-main-blue mb-4">
        Personal Details
      </div>
      <vee-form
        @submit="postData"
        :validation-schema="formSchema"
        class="block"
      >
        <div
          class="w-[660px] flex flex-wrap mx-auto border shadow-xl pt-4 pb-6 px-6 rounded-lg"
        >
          <div class="w-1/2 pr-2 mb-4">
            <label for="firstname" class="block mb-1">First name*</label>
            <vee-field
              id="firstname"
              name="firstname"
              type="text"
              placeholder="John"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="firstname" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="lastname" class="block mb-1">Last name*</label>
            <vee-field
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Doe"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="lastname" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pr-2 mb-4">
            <label for="phone" class="block mb-1">Phone*</label>
            <vee-field
              id="phone"
              name="phone"
              yype="text"
              placeholder="+99 899 100 00 01"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="phone" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="email" class="block mb-1">Email*</label>
            <vee-field
              id="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="email" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pr-2 mb-4">
            <label for="password" class="block mb-1">Password*</label>
            <vee-field
              id="password"
              name="password"
              type="password"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="password" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="repassword" class="block mb-1">Re-password*</label>
            <vee-field
              id="repassword"
              name="repassword"
              type="password"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="repassword" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pr-2 mb-4">
            <label for="city" class="block mb-1">City/Town*</label>
            <vee-field
              id="city"
              name="city"
              type="text"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="city" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pl-2 mb-4">
            <label for="postcode" class="block mb-1">Post code*</label>
            <vee-field
              id="postcode"
              name="postcode"
              type="text"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="postcode" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pr-2">
            <label for="address" class="block mb-1">Address*</label>
            <vee-field
              id="address"
              name="address"
              type="text"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="address" class="text-red-500 text-sm" />
          </div>
          <div class="w-1/2 pl-2">
            <label for="avatar" class="block mb-1">User image*</label>
            <vee-field
              id="avatar"
              name="avatar"
              type="file"
              class="w-full py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
            />
            <vee-error name="avatar" class="text-red-500 text-sm" />
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
      </vee-form>
    </div>
  </div>
</template>

<style scoped></style>
