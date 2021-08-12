<template>
  <div id="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{ cartLength }} )</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list class="cartList"></cart-list>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
import Scroll from '@/components/common/scroll/Scroll.vue';
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';

import { mapGetters } from 'vuex';
export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
  },
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.navbar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  font-weight: 700;
}
.cartList {
  margin-top: 44px;
}
</style>
