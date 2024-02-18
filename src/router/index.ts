import { createRouter, createWebHashHistory } from "vue-router";

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
    {
      path: "/riddles",
      name: "riddles",
      component: () => import("../views/PageRiddles.vue"),
    },
    {
      path: "/catch",
      name: "catch",
      component: () => import("../views/PageCatch.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/PageForm.vue"),
    },
    {
      path: "/megaCaptcha",
      name: "megaCaptcha",
      component: () => import("../views/PageHome.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/PageTest.vue"),
    },
    { path: "/:pathMatch(.*)*", component: () => import("../views/PageHome.vue") },
  ],
});

export default router;
