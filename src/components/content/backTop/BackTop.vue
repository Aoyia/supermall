<template>
  <div class="back-top">  
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods:{
  }
};
</script>

<style scoped>
.back-top {
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 102px;
  right: 14px;
}
.back-top>img{
  width: 100%;
}
</style>
