<script setup>
import loadingImg from "@/assets/imgs/home/full-screen-loading.gif"
</script>

<template>
  <div class="loading">
    <div class="bg">
      <img :src="loadingImg" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; 
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, .6);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 300px;

    background: url('@/assets/imgs/home/loading-bg.png') center center no-repeat;

    img {
      position: relative;
      top: -5px;
      width: 80px;
    }
  }
}
</style>