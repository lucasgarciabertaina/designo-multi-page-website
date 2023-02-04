<script setup></script>

<template>
  <div class="rounded-2xl bg-peach relative">
    <slot name="background"></slot>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.h-banner {
  height: 40rem;
}

.pt-banner {
  padding-top: 8.688rem;
}
</style>
