import { createApp } from "vue";
import * as vueRouter from "vue-router";
import App from "./App.vue";
import Home from "./pages/index/index.vue";
import About from "./pages/about/index.vue";

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
createApp(App).use(router).mount("#app");
