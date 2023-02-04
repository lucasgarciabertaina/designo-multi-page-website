<script setup>
import MainBanner from "../../molecules/Banner/Main.vue";
import PatternHomeBannerSection from "../../icons/PatternHomeBannerSection.vue";
</script>

<template>
  <div class="h-main-section px-default relative">
    <pattern-home-banner-section class="absolute left-0 bottom-0" />
    <main-banner />
  </div>
</template>

<style scoped>
.h-main-section {
  height: 57.125rem;
}
</style>
