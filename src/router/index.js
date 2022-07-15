import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "menu",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MenuView.vue"),
      children: [
        {
          path: "food",
          name: "food",
          component: () => import("../views/sub-views/FoodMenu.vue"),
        },
        {
          path: "drinks",
          name: "drinks",
          component: () => import("../views/sub-views/DrinksMenu.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Error",
      component: () => import("../views/ErrorView.vue"),
    },
  ],
});

export default router;
