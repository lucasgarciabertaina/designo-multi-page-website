<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<template>
  <div
    class="w-insight-item h-insight-item flex flex-col items-center justify-between"
  >
    <component :is="item.image" class="w-insight-image h-auto" />
    <h3 class="uppercase font-medium text-2xl tracking-title">
      {{ item.title }}
    </h3>
    <p class="font-normal text-base leading-6 text-center w-description">
      {{ item.description }}
    </p>
  </div>
</template>

<style scoped>
.w-insight-item {
  width: 21.875rem;
}
.h-insight-item {
  height: 25.75rem;
}
.w-insight-image {
  width: 12.625rem;
}
</style>
