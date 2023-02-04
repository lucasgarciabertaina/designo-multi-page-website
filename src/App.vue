<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/sections/header/Header.vue";
import FooterComponent from "./components/sections/footer/Footer.vue";
</script>

<template>
  <header-component />
  <router-view />
  <footer-component />
</template>

<style scoped></style>
