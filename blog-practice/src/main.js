import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './router/index';
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
