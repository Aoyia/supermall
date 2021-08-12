import mutation_types from './mutation-types.js';
// 用来解决异步流程来改变state数据。
// 而matution是直接进行同步操作的，如果你在mutations里进行异步操作，你会发现没用，并不会起任何效果
// 只有通过action=>mutations=>states,这个流程进行操作
export default {
  addCart({ state, commit }, payload) {
    let target = state.cartList.find(item => item.iid == payload.iid);

    if (target) {
      commit(mutation_types.ADD_COUNTER, target);
    } else {
      payload.count = 1;
      commit(mutation_types.ADD_TO_CART, payload);
    }
  },
};
