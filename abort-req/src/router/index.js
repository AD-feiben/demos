import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/home.vue"),
    },
    {
      path: "/about",
      component: () => import("../pages/about.vue"),
    },
  ],
});

export default router;
