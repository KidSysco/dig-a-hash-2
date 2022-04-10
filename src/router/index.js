import Vue from "vue";
import VueRouter from "vue-router";
import VueScrollTo from "vue-scrollto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      VueScrollTo.scrollTo(to.hash, 700);
      return {
        selector: to.hash,
      };
    }

    return { x: 0, y: 0 };
  },
});

export default router;
