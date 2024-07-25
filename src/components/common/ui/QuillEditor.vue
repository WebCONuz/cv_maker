<script setup>
import { ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const toolbar = [
  [
    "bold",
    "italic",
    "underline",
    "strike",
    { header: 2 },
    "blockquote",
    "code-block",
  ],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }, { indent: "-1" }, { indent: "+1" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  ["link", "image", "video"],
  ["clean"],
];

const modules = {
  name: "blotFormatter",
  module: BlotFormatter,
  options: {},
};

const props = defineProps({
  placeholder: String,
  modelValue: String,
});
</script>

<template>
  <QuillEditor
    :modules="modules"
    :toolbar="toolbar"
    class="min-h-[150px]"
    :placeholder="props.placeholder"
    content-type="html"
    theme="snow"
  />
</template>

<style scoped></style>
