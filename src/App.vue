<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <h1>App.vue</h1>
  <RouterView />
  <Footer />
</template>
