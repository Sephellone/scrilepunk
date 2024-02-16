import {createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/PageHome.vue"),
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("../views/PageRules.vue"),
    },
    {
      path: "/captcha",
      name: "captcha",
      component: () => import("../views/PageCaptcha.vue"),
    },
    {
      path: "/complete",
      name: "complete",
      component: () => import("../views/PageComplete.vue"),
      props: route => ({ quest: route.query.quest }),
    },
    {
      path: "/match",
      name: "match",
      component: () => import("../views/PageMatch.vue"),
    },
    {
      path: "/translate",
      name: "translate",
      component: () => import("../views/PageTranslate.vue"),
    },
  ],
});

export default router;
