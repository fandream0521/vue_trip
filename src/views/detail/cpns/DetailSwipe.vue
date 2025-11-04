<script setup>
import DetailIndicator from './DetailIndicator.vue';

defineProps({
  swipeData: {
    type: Array,
    default: () => ([])
  }
})
</script>

<template>
  <van-swipe class="swipe-list">
    <van-swipe-item class="item" v-for="picture in swipeData">
      <img :src="picture.url" />
    </van-swipe-item>
    <template #indicator="{ active }">
      <DetailIndicator :swipe-data="swipeData" :cur-active="active" class="custom-indicator"/>
    </template>
  </van-swipe>
</template>

<style lang="less" scoped>
.swipe-list {
  .item {
    img {
      width: 100%;
    }
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 4px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
  }
}
</style>