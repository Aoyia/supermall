<template>
  <div>
    <nav-bar>
      <div class="back" slot="left" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">
        <div
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: index == currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';

export default {
  name: 'DetailNavBar',
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0, // 当前选中
    };
  },
  methods: {
    // 监听title点击
    titleClick(index) {
      this.$emit('titleClick',index)
      // this.currentIndex = index;
    },
    // 监听back返回点击
    backClick(){
      this.$router.back()
    }
  },
};
</script>

<style scoped>
.back>img{
  margin-top: 6px;
  margin-left: 6px;
  width: 50%;
}
.title {
  display: flex;
  justify-content: space-evenly;
}
.active {
  color: var(--color-high-text);
}
</style>
