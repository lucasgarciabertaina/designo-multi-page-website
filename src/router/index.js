import { createRouter, createWebHistory } from "vue-router";
import DesignView from "../views/Design/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/design",
    },
    {
      path: "/design",
      name: "design",
      component: DesignView,
    },
    {
      path: "/design/web",
      name: "web-design",
      component: () => import("../views/Design/Web.vue"),
    },
    {
      path: "/design/app",
      name: "app-design",
      component: () => import("../views/Design/App.vue"),
    },
    {
      path: "/design/graphic",
      name: "graphic-design",
      component: () => import("../views/Design/Graphic.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/locations",
      name: "locations",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Locations.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Contact.vue"),
    },
  ],
});

export default router;
