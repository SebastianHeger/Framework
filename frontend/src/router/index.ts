import { createWebHistory, createRouter } from "vue-router"
import { useAuthStore } from '../stores/auth'
import { Notify } from 'quasar'

import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Login from "../components/Login.vue"
import Hidden from "../components/Hidden.vue"

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
    path: "/hidden",
    name: "Hidden",
    component: Hidden,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore()
      if(authStore.user!==null) {
        next()
      } else {
        Notify.create({
          message: 'Sorry, access denied!',
          color: 'negative',
          actions: [
              { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
          ]
      })
        next({ name: 'Home' }) 
      }
    },
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