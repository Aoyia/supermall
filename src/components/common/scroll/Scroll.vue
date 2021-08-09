<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { throttle } from '@/common/utils';
export default {
  props: {
    probeType: { type: Number, default: 0 },
    pullUpLoad: { type: Boolean, default: false },
  },
  data() {
    return {
      bs: null,
    };
  },
  mounted() {
    this.bs = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      probeType: this.probeType, //控制监听scroll的方式
      click: true,
      observeDOM: true,
      observeImage: true, //动态根据图片加载刷新refresh,解决了图片加载慢导致滑动长度不够
    });

    this.bs.on('pullingUp', () => {
      this.$emit('getMove');
      setTimeout(() => {
        this.bs.finishPullUp();
      }, 400);
    });

    const throttleScroll = throttle(position => {
      this.$emit('scroll', position);
    }, 40);

    if (this.probeType == 2 || this.probeType == 3) {
      this.bs.on('scroll', position => {
        throttleScroll(position);
      });
    }
  },
  methods: {
    backTop(x, y, time = 200) {
      this.bs.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
