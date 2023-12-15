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
      path: "/tabela-korisnika",
      name: "tabela-korisnika",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/KorisniciView.vue"),
    },
    {
      path: "/update/:id",
      name: "update",
      component: () => import("../views/UpdateView.vue"),
      props: true,
    },
    {
      path: "/pokemoni",
      name: "pokemoni",
      component: () => import("@/views/PokemonView.vue"),
    },
  ],
});

export default router;
