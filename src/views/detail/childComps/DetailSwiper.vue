<template>
  <swiper>
    <swiper-item class="swiper-item" v-for="(item, index) in weiperData" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index.js';

export default {
  name: 'DetailSwiper',
  props: {
    weiperData: {
      type: Array,
      default() {
        return [];
      },
      require: true,
    },
  },
  components: {
    SwiperItem,
    Swiper,
  },
};
</script>

<style scoped></style>
