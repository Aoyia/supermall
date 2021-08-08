<template>
  <div class="goods-item">
    <a href="">
      <img :src="goodsItem.show.img" alt="" />
    </a>
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}￥</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goods-item {
  float: left;
  width: 46%;
  padding: 2px;
  padding-bottom: 10px;
  background-color: #f4f4f4;
}
.goods-item img {
  width: 100%;
  border-radius: 4px;
}
.goods-info {
  text-align: center;
}
.goods-info > p {
  text-align: left;
  display: -webkit-box;
  width: 100%;
  line-height: 1.5;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.goods-info > .price {
  padding:0 4px ;
  color: var(--color-tint);
}
.goods-info > .collect::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
