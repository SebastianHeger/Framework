import { createWebHistory, createRouter } from "vue-router"
import { useAuthStore } from '../stores'

import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Login from "../components/Login.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router