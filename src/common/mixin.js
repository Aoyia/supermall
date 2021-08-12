import BackTop from '@/components/content/backTop/BackTop.vue';

export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    };
  },
  methods: {
    // 点击回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 200); //通过$refs.scroll获取到了组件对象，然后访问组件里面的内容
    },
    listenShowBackTop(position) {
      if (position && position.y < -800) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
  },
};
