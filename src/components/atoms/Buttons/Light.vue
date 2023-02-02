<script setup>
import DefaultButton from "./Default.vue";
</script>

<template>
  <default-button
    @click="$emit('click')"
    class="bg-peach text-white hover:bg-light-peach"
    ><slot
  /></default-button>
</template>

<style scoped></style>
