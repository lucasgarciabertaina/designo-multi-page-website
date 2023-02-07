<script>
export default {
  props: {
    large: { type: Boolean, default: false },
    link: { type: String, required: true },
  },
};
</script>

<template>
  <router-link
    class="rounded-2xl w-full flex flex-col justify-center items-center font-medium uppercase text-white text-center relative"
    :class="large ? 'h-full' : 'h-1/2'"
    :to="link"
  >
    <div class="w-full h-full rounded-2xl absolute bg-black opacity-70"></div>
    <h2 class="text-4xl mb-6"><slot /></h2>
    <h3 class="text-xs tracking-[0.3125rem]">view projects</h3>
  </router-link>
</template>

<style scoped>
a:hover div {
  @apply bg-peach;
}
</style>
