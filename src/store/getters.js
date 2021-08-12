export default {
  // 购物车商品数量
  cartLength(state) {
    return state.cartList.length !== 0
      ? state.cartList.reduce((sum, item) => {
          return sum + item.count;
        }, 0)
      : 0;
  },
  cartList(state) {
    return state.cartList;
  },
};
