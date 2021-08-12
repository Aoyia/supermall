<template>
  <div id="detail">
    <detail-nav-bar ref="navBar" @titleClick="titleClick"></detail-nav-bar>
    <scroll ref="scroll" :probeType="2" @scroll="scroll" class="content">
      <detail-swiper
        ref="swiper"
        class="detail-swiper"
        :weiperData="detailSwiperData"
      ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-param-info ref="param" :paramInfo="paramsInfo"></detail-param-info>
      <detail-goods-info :detailInfo="goodsInfo"></detail-goods-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="list" :goods="recommendInfo"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import detailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';

import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';

import Scroll from '@/components/common/scroll/Scroll.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue';

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from '@/network/detail';
import { backTopMixin } from '@/common/mixin.js';

export default {
  name: 'Detail',
  components: {
    detailNavBar,
    DetailSwiper,

    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,

    Scroll,
    GoodsList,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      // 轮播图数据
      detailSwiperData: null,
      goods: {},
      shop: {},
      goodsInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      theme: ['swiper', 'param', 'comment', 'list'],
      themeY: [],
    };
  },
  created() {
    // console.log();
    // 1.保存传入的iid
    this.iid = this.$route.query.iid;

    // 2. 根据iid亲戚家详情数据
    getDetail(this.iid).then(res => {
      if (!res) {
        console.error('刷新重试');
        return;
      }
      // console.log(res);
      const data = res.result;
      // 1. 获取轮播图数据
      this.detailSwiperData = data.itemInfo.topImages;
      // console.log(this.detailSwiperData);

      // 2. 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 3. 获取店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      // 4. 保存商品的详细数据
      this.goodsInfo = data.detailInfo;

      // 5. 获取参数的信息
      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

      // 6. 获取评论的信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 7. 获取推荐信息
      getRecommend().then(res => {
        // console.log(res, '推荐');
        this.recommendInfo = res.data.list;
      });
    });
  },

  methods: {
    // 点击跳转到对应的内容
    titleClick(index) {
      let topY = this.theme[index];
      this.$refs.scroll.scrollTo(0, -this.$refs[topY].$el.offsetTop, 0);
    },
    //监听滚动，navbar显示对应的标题
    scroll(position) {
      // 创建navbar标题对应的内容的高度
      if (this.themeY.length === 0) {
        this.theme.reduce((all, val) => {
          all.push(-this.$refs[val].$el.offsetTop);
          return all;
        }, this.themeY);
        console.log(this.themeY);

        setTimeout(() => {
          this.themeY = [];
          this.theme.reduce((all, val) => {
            all.push(-this.$refs[val].$el.offsetTop);
            return all;
          }, this.themeY);
          console.log(this.themeY);
        }, 2500);
      }
      // 监听当前高度
      for (const i in this.themeY) {
        if (position.y <= this.themeY[i]) {
          this.$refs.navBar.currentIndex = i;
        }
      }
      /*
       *控制显示隐藏回到顶部
       */
      this.listenShowBackTop(position);
    },
    // 点击回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 200); //通过$refs.scroll获取到了组件对象，然后访问组件里面的内容
    },
    // 点击添加到购物车
    addToCart() {
      const product = {};
      product.image = this.detailSwiperData[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      console.log(product);
      // 将商品添加到购物车里
      this.$store.dispatch('addCart', product);
      console.log(this.$store.state.cartList);
    },
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.detail-swiper {
  height: 300px;
}
</style>
