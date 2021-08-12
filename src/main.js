import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload';

import toast from './components/common/toast/index';
// 安装toast插件
Vue.use(toast);
Vue.config.productionTip = false;

//图片懒加载
Vue.use(VueLazyload,{
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
