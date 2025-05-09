import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import('../views/BlogView.vue'),
    },
    {
      // testing dynamic routing
      path: "/blog/:post",
      name: "destination.show",
      component: () => import('@/views/BlogPostView.vue'),
    },
  ],
});

export default router;
