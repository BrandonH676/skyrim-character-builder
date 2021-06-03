import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mage",
    name: "Mage",
    component: () =>
      import("../views/Mage.vue"),
  },
  {
    path: "/thief",
    name: "Thief",
    component: () =>
      import("../views/Thief.vue"),
  },
  {
    path: "/warrior",
    name: "Warrior",
    component: () =>
      import("../views/Warrior.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
