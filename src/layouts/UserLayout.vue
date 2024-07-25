<script setup>
import Header from "../components/users/main/Header.vue";
import Footer from "../components/users/main/Footer.vue";
</script>

<template>
  <Header />
  <main class="user-layout">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped></style>
