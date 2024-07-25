<script setup>
import FormIntro from "../../components/users/complete/Intro.vue";
import Summary from "../../components/users/complete/Summary.vue";
import Education from "../../components/users/complete/Education.vue";
import Experience from "../../components/users/complete/Experience.vue";
</script>

<template>
  <FormIntro />
  <div class="py-14">
    <div class="container">
      <Summary />
      <Education />
      <Experience />
    </div>
  </div>
</template>

<style scoped></style>
