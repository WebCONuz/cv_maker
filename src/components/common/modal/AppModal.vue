<script setup>
import AppTransition from "../ui/AppTransition.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: String,
});
</script>

<template>
  <div
    class="app-modal w-full px-3 sm:px-0"
    :class="{ 'app-show-modal': modelValue }"
    :style="'max-width:' + props.width"
  >
    <AppTransition>
      <div v-if="modelValue" class="app-modal__body rounded-2xl">
        <slot></slot>
      </div>
    </AppTransition>
  </div>
  <AppTransition>
    <span
      @click="$emit('update:modelValue', false)"
      v-if="modelValue"
      class="app-modal-shadow"
    ></span>
  </AppTransition>
</template>

<style scoped>
.app-modal {
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  max-height: 600px;
  z-index: -1;
  opacity: 0;
  overflow: auto;
}
.app-show-modal {
  opacity: 1;
  z-index: 100;
}
::-webkit-scrollbar {
  display: none;
}
.app-modal__body {
  padding: 26px 31px 35px 32px;
  background-color: #fff;
}
.app-modal-shadow {
  background-color: rgba(0, 153, 181, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
@media screen and (max-width: 640px) {
  .app-modal__body {
    padding: 18px 21px 25px 21px;
  }
}
</style>
