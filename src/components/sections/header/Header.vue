<script setup>
import Logo from "../../atoms/containers/Logo.vue";
import NavComponent from "./NavComponent.vue";
</script>

<template>
  <header class="h-header flex items-center px-default">
    <logo />
    <nav-component />
  </header>
</template>

<style scoped>
.h-header {
  height: 9.688rem;
}
</style>
