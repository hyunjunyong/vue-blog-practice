import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/router1', component: () => import('../pages/VIfShow.vue') },
];

export default routes;
