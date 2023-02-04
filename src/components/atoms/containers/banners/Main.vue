<script setup>
import BannerContainer from "./index.vue";
import MainBackground from "../../../icons/bannerBackgrounds/Main.vue";
</script>

<template>
  <banner-container class="h-main-banner pt-main-banner">
    <template v-slot:background>
      <main-background class="absolute top-0 right-0" />
    </template>
    <template v-slot:content>
      <slot />
    </template>
  </banner-container>
</template>

<style scoped>
.h-main-banner {
  height: 40rem;
}

.pt-main-banner {
  padding-top: 8.688rem;
}
</style>
