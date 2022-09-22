import { createRouter, createWebHashHistory } from "vue-router";
import VuexView from "../views/VuexView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: VuexView,
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PiniaView.vue"),
    },
    {
      path: "/other",
      name: "other",
      component: () => import("../views/OtherComponent.vue"),
    },
    {
      // 对于那些没有匹配到的路由，我们通常会匹配到固定的某个页面
      // 注意：
      // 1. "/:pathMatch(.*)" 会匹配到不存在的路由地址
      // 2. 我们可以通过 $route.params.pathMatch 获取到传入的参数：
      // 3. 还有一种写法："/:pathMatch(.*)*"，就是后面多了个*号，区别在于获取参数时会以 / 号为分隔符，组成一个数组
      path: "/:pathMatch(.*)",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
