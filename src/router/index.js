import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/UserLayout.vue"),
      children: [
        {
          path: "/",
          name: "user-home",
          component: () => import("../views/users/HomeView.vue"),
        },
        {
          path: "complete-user",
          name: "user-complete-user",
          component: () => import("../views/users/UserFormView.vue"),
        },
        {
          path: "complete-data",
          name: "user-data",
          component: () => import("../views/users/CompleteDataView.vue"),
        },
      ],
    },
  ],
});

export default router;
