<script setup></script>

<template>
  <button
    class="font-medium text-sm uppercase rounded-lg w-[9.5rem] h-[3.5rem]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped>
.tracking-button {
  letter-spacing: 0.063rem;
}
</style>
