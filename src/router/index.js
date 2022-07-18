import { createRouter, createWebHistory } from "vue-router";
import Eventlist from "../views/EventList.vue";
import About from "../views/AboutT.vue";


const routes = [
  {
    path: "/",
    name: "EventList",
    component: Eventlist,
  },
  {
    path: "/about",
    name: "About", 
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
