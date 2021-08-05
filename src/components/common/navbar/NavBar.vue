!
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.nav-bar {
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  line-height: 44px;
  box-shadow: 0 1px 5px #ccc;

}
.left,
.right {
  width: 60px;
}
.center {
  text-align: center;
  flex: 1;
}
</style>
