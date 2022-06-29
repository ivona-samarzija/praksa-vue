import { createRouter, createWebHistory } from "vue-router";
import prices from "@/components/Prices.vue";
import home from "@/components/home.vue"
import services from "@/components/services.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/price",
      name: "Cjenik",
      component: prices,
    },
    {
      path: "/services",
      name: "Usluge",
      component: services,
    },
    {
      path: "/",
      name: "Home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
