import mutation_types from './mutation-types.js';

// 存放对state里面的变量进行操作的相关函数 
// Vuex给我们提供修改仓库 store中的状态的唯一办法就是通过提交mutation
export default {
  [mutation_types.ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [mutation_types.ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  },
};
