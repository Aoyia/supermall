<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
#tab-bar {
  width: 100%;
  height: 49px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 5px #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 12px;
  text-align: center;
}
</style>
