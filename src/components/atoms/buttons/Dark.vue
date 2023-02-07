<script setup>
import DefaultButton from "./Default.vue";
</script>

<template>
  <default-button
    @click="$emit('click')"
    class="bg-white text-default-black hover:bg-light-peach hover:text-white"
    ><slot
  /></default-button>
</template>

<style scoped></style>
