<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot v-show="isActive" name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 属性父向子传值
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    },
  },

  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
  computed: {
    //  控制图标的显示隐藏,由 当前路由 控制
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : { color: this.activeColor };
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  margin-top: 4px;
  flex: 0 0 50px;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
}
</style>
