<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      v-show="isTabFixed"
      class="tab-control-top"
      ref="tabControl1"
      @tabClick="tabClick"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <scroll
      ref="scroll"
      :pullUpload="true"
      :probeType="2"
      @scroll="contentScroll"
      @getMove="getMove"
      class="content"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        @tabClick="tabClick"
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 页面子组件
import HomeSwiper from './childComps/HomeSwiper.vue';
import HomeRecommendView from './childComps/HomeRecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';

// 公共组件
import Scroll from '@/components/common/scroll/Scroll.vue';
import NavBar from '@/components/common/navbar/NavBar.vue';
import BackTop from '@/components/content/backTop/BackTop.vue';
import TabControl from '@/components/content/tabControl/TabControl.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue';

// 数据请求
import { getHomeMultidata, getHomeGoods } from '../../network/home';

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,

    Scroll,
    NavBar,
    BackTop,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 当前分类
      currentType: 'pop',
      // 控制backTop显示隐藏
      isShowBackTop: false,
      // 控制tabControl吸顶
      isTabFixed: false,
      //保存当前y轴位置
      saveY: 0,
    };
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {},
  // 进来时活跃
  activated() {
    this.$refs.scroll.backTop(0, this.saveY, 0);
    console.log('activated');
  },
  // 离开后不活跃
  deactivated() {
    //组件设置了 keep-alive所以变量不会销毁
    this.saveY = this.$refs.scroll.bs.y;
    console.log('deactivated', this.$refs.scroll.bs.y);
  },
  methods: {
    /*
     *事件监听相关的方法
     */
    // tab-control 控制选项变换
    tabClick(index) {
      let i = 0;
      for (const key in this.goods) {
        if (i == index) {
          this.currentType = key;
        }
        i++;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 点击回到顶部
    backClick() {
      this.$refs.scroll.backTop(0, 0, 200); //通过$refs.scroll获取到了组件对象，然后访问组件里面的内容
    },
    // 显示隐藏回到顶部
    contentScroll(position) {
      if (position && position.y < -800) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }

      // 吸顶显示隐藏
      if (this.$refs.tabControl2.$el.offsetTop <= -position.y) {
        this.isTabFixed = true;
      } else {
        this.isTabFixed = false;
      }
    },
    /*
     *网络请求相关的方法
     */
    // 1. 请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // 每次拿到新数据就push保存
        this.goods[type].list.push(...res.data.list);
        // 页码数加一
        this.goods[type].page++;
      });
    },
    // 上拉加载更多
    getMove() {
      this.getHomeGoods(this.currentType);
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  padding-bottom: 49px;
  height: 100vh;
}
.content {
  height: 100%;
}
.home-nav {
  background-color: var(--color-tint);
  color: whitesmoke;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control-top {
  position: absolute;
  top: 44px;
  z-index: 9;
}
</style>
