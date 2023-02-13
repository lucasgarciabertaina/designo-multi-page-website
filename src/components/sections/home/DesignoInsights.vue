<script setup>
import PatternHomeBannerSection from "../../icons/PatternHomeBannerSection.vue";
import InsightItem from "../../molecules/InsightItem.vue";
import Passionate from "../../icons/illustrations/Passionate.vue";
import Resourceful from "../../icons/illustrations/Resourceful.vue";
import Friendly from "../../icons/illustrations/Friendly.vue";
</script>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          image: Passionate,
          title: "passionate",
          description:
            "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
        },
        {
          id: 1,
          image: Resourceful,
          title: "resourceful",
          description:
            "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
        },
        {
          id: 2,
          image: Friendly,
          title: "friendly",
          description:
            "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="h-insights-section px-default relative flex justify-between">
    <pattern-home-banner-section class="rotate-180 absolute right-0 top-32" />
    <insight-item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>
.h-insights-section {
  height: 59.688rem;
}
</style>
