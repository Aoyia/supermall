<template>
  <div>
    <div class="recommended">推荐</div>
    <div class="goods">
      <goods-list-item v-for="item in goods" :key="item.acm" :goodsItem="item"></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommended{
  border-top: 1px solid #ccc;
  padding: 12px;

}
.goods {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
