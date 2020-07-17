import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/job/:id',
    name: 'Job',
    component: () => import(/* webpackChunkName: "job" */ '../views/Job.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
