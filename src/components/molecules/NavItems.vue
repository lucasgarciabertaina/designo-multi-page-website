<script setup>
import NavItem from "../atoms/NavItem.vue";
</script>

<script>
export default {
  components: { NavItem },
  props: {
    items: Array,
  },
};
</script>

<template>
  <ul v-for="item in items" :key="item.title" class="inline-block">
    <nav-item :link="item.to" class="ml-10 block">{{ item.title }}</nav-item>
  </ul>
</template>

<style scoped></style>
