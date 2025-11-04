<script setup>
import loadingImg from "@/assets/imgs/home/full-screen-loading.gif"
import { useMainStore } from "@/stores/modules/main";
const mainStore = useMainStore();
</script>

<template>
  <div class="loading" @click="mainStore.isLoading = false" v-if="mainStore.isLoading">
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

  background-color: rgba(0, 0, 0, .4);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 104px;
    height: 104px;

    background: url('@/assets/imgs/home/loading-bg.png') center center no-repeat;

    img {
      width: 80px;
    }
  }
}
</style>