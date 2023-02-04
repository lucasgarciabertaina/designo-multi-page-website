<script setup>
import BannerContainer from "../../atoms/containers/banners/Main.vue";
import DarkButton from "../../atoms/buttons/Dark.vue";
</script>

<template>
  <banner-container class="flex overflow-hidden">
    <div class="pl-24 w-2/3">
      <h1 class="text-white font-medium text-5xl mb-6 pr-12">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p class="text-white font-normal text-base pr-48 mb-10">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <dark-button>learn more</dark-button>
    </div>
    <div class="w-1/3 relative">
      <div class="w-phone h-auto absolute top-phone right-phone">
        <img
          src="../../icons/hero-phone.png"
          alt="phone-image"
          class="w-full h-auto"
        />
      </div>
    </div>
  </banner-container>
</template>

<style scoped>
.w-phone {
  width: 29rem;
}

.top-phone {
  top: -8.5rem;
}
.right-phone {
  right: -17px;
}
.h-main-banner {
  height: 40rem;
}

.pt-main-banner {
  padding-top: 8.688rem;
}
</style>
