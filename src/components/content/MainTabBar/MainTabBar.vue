<template>
  <tab-bar>
    <!-- 不加动态绑定就只把里的内容当成字符串 -->
    <tab-bar-item path="/home" activeColor>
      <img src="@/assets/img/tabbar/home.svg" slot="item-icon" alt="" />
      <img src="@/assets/img/tabbar/home_active.svg" slot="item-icon-active" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor>
      <img src="@/assets/img/tabbar/category.svg" slot="item-icon" alt="" />
      <img src="@/assets/img/tabbar/category_active.svg" slot="item-icon-active" alt="" />
      <div slot="item-text">逛逛</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor>
      <img src="@/assets/img/tabbar/shopcart.svg" slot="item-icon" alt="" />
      <img src="@/assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor>
      <img src="@/assets/img/tabbar/profile.svg" slot="item-icon" alt="" />
      <img src="@/assets/img/tabbar/profile_active.svg" slot="item-icon-active" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/content/tabbar/TabBar';
import TabBarItem from '@/components/content/tabbar/TabBarItem.vue';

export default {
  components: { TabBar, TabBarItem },
};
</script>

<style></style>
