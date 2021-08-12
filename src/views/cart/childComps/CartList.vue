<template>
  <div class="cart_list">
    <scroll class="content" ref="scroll">
      <div>
        <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll';
import CartListItem from './CartListItem';
import { mapGetters } from 'vuex';

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem,
  },

  computed: {
    ...mapGetters(['cartList']),
  },
  //进入购物车时刷新可滚动高度
  activated() {
    this.$refs.scroll.bs.refresh();
  },
};
</script>

<style scoped>
.cart_list {
  height: calc(100% - 44px - 49px - 50px + 10px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
