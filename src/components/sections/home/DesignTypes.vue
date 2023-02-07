<script setup>
import DesignButton from "../../atoms/buttons/DesignButton.vue";
</script>

<template>
  <div
    class="h-designs-section px-default bg-transparent relative bottom-28 flex"
  >
    <div class="w-1/2 h-full rounded-2xl mr-4">
      <design-button class="bg-web-design" link="/design/web" large
        >web design</design-button
      >
    </div>
    <div class="w-1/2 h-full flex flex-col ml-2">
      <design-button class="bg-app-design mb-2" link="/design/app"
        >app design</design-button
      >
      <design-button class="bg-graphic-design mt-2" link="/design/graphic"
        >graphic design</design-button
      >
    </div>
  </div>
</template>

<style scoped>
.bg-web-design {
  background-image: url("../../icons/image-web-design-large.jpg");
  background-repeat: no-repeat;
}
.bg-app-design {
  background-image: url("../../icons/image-app-design.jpg");
  background-repeat: no-repeat;
}

.bg-graphic-design {
  background-image: url("../../icons/image-graphic-design.jpg");
  background-repeat: no-repeat;
}

.h-designs-section {
  height: 40rem;
}
</style>
