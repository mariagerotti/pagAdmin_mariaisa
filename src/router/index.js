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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/editoras",
      name: "editoras",
      component: () => import("../views/EditorasView.vue"),
    },
    {
      path: "/livros",
      name: "livros",
      component: () => import("../views/LivrosView.vue"),
    },
    {
      path: "/autores",
      name: "autores",
      component: () => import("../views/AutoresView.vue"),
    },
    {
      path: "/categorias",
      name: "categorias",
      component: () => import("../views/CategoriasView.vue"),
    },
  ],
});

export default router;
