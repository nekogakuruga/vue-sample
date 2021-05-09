import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },

  {
    path: "/article",
    name: "Article",
    component: () => import("../views/Article.vue"),
  },
  {
    path: "/article/data:id",
    name: "ArticleContents",
    component: () => import("../views/ArticleContents.vue"),
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
