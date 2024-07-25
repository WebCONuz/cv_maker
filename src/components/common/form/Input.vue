<script setup>
const props = defineProps({
  inputType: String,
  inputPlaceholder: String,
  isRequired: Boolean,
});
</script>

<template>
  <input
    :type="props.inputType"
    :placeholder="props.inputPlaceholder || ''"
    :required="props.isRequired || false"
    class="py-2 px-4 outline-none border border-gray-300 focus:border-main-blue rounded-md"
  />
</template>

<style scoped></style>
