<template>
  <div>
    <scroll class="content" >
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue';
export default {
  name: 'Category',
  components: {
    Scroll
  },
  data() {
    return {
      // bs: null,
    };
  },
};
</script>

<style scoped>
.content {
  height: 300px;
  background-color: pink;
}
</style>
