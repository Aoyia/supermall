<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: currentIndex == index }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // 子向父传值
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #fff;
}
.tab-control .active {
  background-color: rgb(255, 237, 240);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: var(--color-high-text);
  border-color: var(--color-high-text);
  border-top-color: var(--color-high-text);
  border-bottom-color: rgb(0, 0, 0, 0);
}
.tab-control > div {
  line-height: 40px;
  text-align: center;
  padding: 0 26px;
  border: 1px solid rgb(0, 0, 0, 0);
  border-top: 3px solid rgb(0, 0, 0, 0);
}
</style>
