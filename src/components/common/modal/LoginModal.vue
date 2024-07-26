<script setup>
import AppModal from "./AppModal.vue";
import { ref, computed } from "vue";
import { useUserStore } from "../../stores/user";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
const router = useRouter();
const toast = useToast();

const login_schema = computed(() => {
  return {
    phone: "required|digits:9",
    password: "required|min:6",
  };
});

const register_schema = computed(() => {
  return {
    phone: "required|digits:9",
    password: "required|min:6",
    email: "email",
    birthday: "required",
    fullName: "required|min:3",
  };
});

const props = defineProps({
  modalText: String,
});

const userStore = useUserStore();
const showPassword = ref(false);
const createUser = ref(false);

const dialog = ref(false);
const openModal = () => {
  dialog.value = true;
};
defineExpose({ openModal });

async function sendData(value) {
  if (createUser.value) {
    const res = await userStore.signUpUser(value);
    if (res === "success") {
      dialog.value = false;
      router.go(0);
      toast.success("Вы успешно зарегистрировались!");
    } else {
      console.log(res);
    }
  } else {
    const res = await userStore.login(value);
    if (res === "success") {
      dialog.value = false;
      router.go(0);
      toast.success("Вы успешно вошли в систему!");
    } else {
      if (res?.response?.data?.error?.message === "VALIDATION_ERROR") {
        toast.error("Телефон или пароль неправильный!");
      } else {
        toast.error("Произошла ошибка!");
      }
      console.log(res);
    }
  }
}
</script>

<template>
  <AppModal v-model="dialog" width="527px">
    <!-- x-icon -->
    <i
      class="bx bx-x text-4xl text-gray-200 absolute top-5 right-5 cursor-pointer"
      @click="dialog = !dialog"
    ></i>

    <vee-form
      @submit="sendData"
      :validation-schema="createUser ? register_schema : login_schema"
    >
      <img
        v-if="!createUser"
        src="/images/ui/logo.png"
        alt="logo"
        class="block mx-auto mb-4"
      />
      <h3
        class="text-[#0099B5] text-2xl mb-5 leading-[120%] text-center"
        :class="createUser ? 'mt-2' : ''"
      >
        {{ !createUser ? "Авторизоваться" : "Зарегистрироваться" }}
      </h3>
      <div v-if="createUser" class="mb-[10px]">
        <vee-field
          name="fullName"
          placeholder="Имя и фамилия"
          type="text"
          class="outline-none py-4 px-[22px] w-full rounded-2xl border focus:border-[#0099B5] mb-1 text-[#1C1C1C]"
        />
        <vee-error name="fullName" class="text-red-500 text-sm pl-2" />
      </div>
      <div v-if="createUser" class="mb-[10px]">
        <vee-field
          name="email"
          placeholder="Электронная почта"
          type="email"
          class="outline-none py-4 px-[22px] w-full rounded-2xl border focus:border-[#0099B5] mb-1 text-[#1C1C1C]"
        />
        <vee-error name="email" class="text-red-500 text-sm pl-2" />
      </div>
      <div v-if="createUser" class="mb-[10px]">
        <vee-field
          name="birthday"
          type="date"
          class="outline-none py-4 px-[22px] w-full rounded-2xl border focus:border-[#0099B5] mb-1 text-[#1C1C1C]"
        />
        <vee-error name="birthday" class="text-red-500 text-sm pl-2" />
      </div>
      <div class="mb-[10px]">
        <div class="flex mb-1">
          <div class="px-4 bg-gray-200 flex items-center rounded-l-2xl">
            +998
          </div>
          <vee-field
            name="phone"
            placeholder="Номер телефона"
            type="text"
            class="outline-none py-4 px-[22px] w-full rounded-r-2xl border focus:border-[#0099B5] text-[#1C1C1C]"
          />
        </div>
        <vee-error name="phone" class="text-red-500 text-sm pl-2" />
      </div>
      <div class="mb-4">
        <div class="relative mb-1">
          <vee-field
            name="password"
            placeholder="Пароль"
            :type="showPassword ? 'text' : 'password'"
            class="outline-none py-4 px-[22px] w-full rounded-2xl border focus:border-[#0099B5] text-[#1C1C1C]"
          />
          <div
            class="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
            @click="showPassword = !showPassword"
          >
            <i v-if="!showPassword" class="bx bx-show"></i>
            <i v-else class="bx bx-low-vision"></i>
          </div>
        </div>
        <vee-error name="password" class="text-red-500 text-sm pl-2" />
      </div>
      <input
        type="submit"
        :value="createUser ? 'Сохранить' : 'Вход'"
        class="outline-none py-4 w-full rounded-2xl border border-[#0099B5] bg-[#0099B5] text-white"
      />
    </vee-form>

    <!--<form @submit.prevent="sendData">
      <img
        v-if="!createUser"
        src="/images/ui/logo.png"
        alt="logo"
        class="block mx-auto mb-4"
      />
      <h3
        class="text-[#0099B5] text-2xl mb-5 leading-[120%] text-center"
        :class="createUser ? 'mt-2' : ''"
      >
        {{ !createUser ? "Авторизоваться" : "Зарегистрироваться" }}
      </h3>
      <input
        v-if="createUser"
        v-model="userData.fullName"
        required
        placeholder="Имя и фамилия"
        type="text"
        class="outline-none py-4 px-[22px] mb-[10px] w-full rounded-2xl border focus:border-[#0099B5] text-[#1C1C1C]"
      />
      <input
        v-if="createUser"
        v-model="userData.email"
        placeholder="Электронная почта"
        type="email"
        class="outline-none py-4 px-[22px] mb-[10px] w-full rounded-2xl border focus:border-[#0099B5] text-[#1C1C1C]"
      />
      <input
        v-if="createUser"
        v-model="userData.birthday"
        placeholder="Дата рождения"
        type="date"
        class="outline-none py-4 px-[22px] mb-[10px] w-full rounded-2xl border focus:border-[#0099B5] text-[#1C1C1C]"
      />
      <div class="mb-[10px] flex">
        <div class="px-4 bg-gray-200 flex items-center rounded-l-2xl">+998</div>
        <input
          v-model="userData.phone"
          required
          placeholder="Номер телефона"
          maxlength="9"
          type="text"
          class="outline-none py-4 px-[22px] w-full rounded-r-2xl border focus:border-[#0099B5] text-[#1C1C1C]"
        />
      </div>
      <div class="mb-4 relative">
        <input
          v-model="userData.password"
          required
          minlength="6"
          placeholder="Пароль"
          :type="showPassword ? 'text' : 'password'"
          class="outline-none py-4 px-[22px] w-full rounded-2xl border focus:border-[#0099B5] text-[#1C1C1C]"
        />
        <div
          class="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
          @click="showPassword = !showPassword"
        >
          <i v-if="!showPassword" class="bx bx-show"></i>
          <i v-else class="bx bx-low-vision"></i>
        </div>
      </div>
      <input
        type="submit"
        :value="createUser ? 'Сохранить' : 'Вход'"
        class="outline-none py-4 w-full rounded-2xl border border-[#0099B5] bg-[#0099B5] text-white"
      />
    </form>-->

    <p
      class="text-[#59A2CC] text-center mt-6 cursor-pointer"
      @click="createUser = !createUser"
    >
      {{ createUser ? "Вход" : "Зарегистрироваться" }}
    </p>
  </AppModal>
</template>

<style></style>
