<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
  padding: 10px 0 20px 0;
  border-bottom: 12px solid #eee;
}
.recommend > div {
  text-align: center;
  flex: 1;
}
.recommend > div img {
  margin-bottom: 8px;
  width: 68px;
  height: 68px;
}
</style>
