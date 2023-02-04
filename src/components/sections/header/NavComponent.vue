<script setup>
import { ref } from "vue";
import NavItems from "../../molecules/NavItems.vue";
const links = ref([
  {
    to: "/about",
    title: "our company",
  },
  {
    to: "/locations",
    title: "locations",
  },
  {
    to: "/contact",
    title: "contact",
  },
]);
</script>

<template>
  <nav class="w-1/2 flex justify-end">
    <nav-items :items="links" />
  </nav>
</template>

<style scoped></style>
