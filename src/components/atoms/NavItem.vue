<script>
export default {
  props: {
    link: String,
  },
};
</script>

<template>
  <li class="font-normal text-sm uppercase tracking-title hover:underline">
    <router-link :to="link"><slot /></router-link>
  </li>
</template>

<style scoped></style>
