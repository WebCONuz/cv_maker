<script setup>
import AppTransition from "../ui/AppTransition.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  width: String,
  minHeight: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="app-modal w-full px-3 sm:px-0 rounded-lg"
    :class="{ 'app-show-modal': modelValue }"
    :style="'max-width:' + props.width"
  >
    <AppTransition>
      <div
        v-if="modelValue"
        class="app-modal__body"
        :style="'min-height:' + (props.minHeight || 'auto')"
      >
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
  max-height: 95vh;
  z-index: -1;
  opacity: 0;
  overflow: auto;
}
.app-show-modal {
  opacity: 1;
  z-index: 100;
}
.app-modal::-webkit-scrollbar {
  width: 7px;
}
.app-modal::-webkit-scrollbar-track {
  background: #dcdbdb;
}
.app-modal::-webkit-scrollbar-thumb {
  background: #3e94e4;
  border-radius: 50px;
}
.app-modal__body {
  padding: 20px;
  background-color: #fff;
}
.app-modal-shadow {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
@media screen and (max-width: 640px) {
  .app-modal__body {
    padding: 15px;
  }
}
</style>
