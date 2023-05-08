import Landing from "views/Landing/index.vue";
import NewEntry from "views/NewEntry/index.vue";
import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: Landing },
  { path: "/new", component: NewEntry },
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
