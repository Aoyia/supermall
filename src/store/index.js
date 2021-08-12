import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
// 安装插件
Vue.use(Vuex);

// 创建store对象
const state = {
  //  购物车数据
  cartList: [],
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

// 挂在vue实例上
export default store;
