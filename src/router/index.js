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
        {
          path: "make-cv",
          name: "user-make-cv",
          component: () => import("../views/users/MakeCvView.vue"),
        },
        {
          path: "templates",
          name: "user-templates",
          component: () => import("../views/users/TemplatesView.vue"),
        },
        {
          path: "contact",
          name: "user-contact",
          component: () => import("../views/users/TemplatesView.vue"),
        },
      ],
    },
  ],
});

export default router;
