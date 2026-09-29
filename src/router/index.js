import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    //если "" оставить пустой будет главная страница
    path: "",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "Главная страница" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
    meta: { title: "О нас" },
  },

  {
    path: "/users/:id(\\d+)",
    name: "users",
    component: () => import("@/views/UserView.vue"),
    meta: { title: "Юзеры" },
  },
  {
    path:"/posts",
    name: "posts",
    component: () => import("@/views/PostsView.vue"),
    meta: {title: "Посты"}
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const title = to.meta.title;
  if (title) {
    document.title = title;
  }
});

export default router;
