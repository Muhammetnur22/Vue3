import { createRouter, createWebHistory } from "vue-router";
import Eventlist from "../views/EventList.vue";
import EventLayout from "../views/event/LayouT.vue"
import EventDetails from "../views/event/DetailS.vue"
import EventRegister from "../views/event/RegisteR.vue"
import EventEdit from "../views/event/EdiT.vue"
import About from "../views/AboutT.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";


const routes = [
  {
    path: "/",
    name: "EventList",
    component: Eventlist,
    props: route => ({ page: parseInt(route.query.page) || 1})
  },
  {
    path: "/events/:id",
    name: "EventLayout", 
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails", 
        component: EventDetails
      },
      {
        path: "register",
        name: "EventRegister", 
        component: EventRegister
      },
      {
        path: "edit",
        name: "EventEdit", 
        component: EventEdit
      },
    ]
  },
  {
    path: "/event/:afterEvent(.*)",
    redirect: to =>{
      return { path: '/events/'+ to.params.afterEvent}
    }
  },
  {
    path: "/about-us",
    name: "About", 
    component: About,
    alias: '/about'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
