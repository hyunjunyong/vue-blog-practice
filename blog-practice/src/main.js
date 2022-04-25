import Vue from 'vue';
import App from './App.vue';
import router from 'vue-router';
Vue.config.productionTip = false;

// 라우터 인스턴스 생성
var router = new VueRouter({
  // 라우터 옵션
});

// 인스턴스에 라우터 인스턴스를 등록

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');
