<script setup>
import { computed } from 'vue';
import DetailIndicator from './DetailIndicator.vue';

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => ([])
  }
})

const sortedData = computed(() => {
  const data = props.swipeData.sort((a, b) => a.enumPictureCategory - b.enumPictureCategory);
  for (let i = 0; i < data.length; i++) {
    data[i].orderIndex = i;
  }
  console.log('sorted', data);
  return data;
})

</script>

<template>
  <van-swipe class="swipe-list">
    <van-swipe-item class="item" v-for="picture in sortedData">
      <img :src="picture.url" />
    </van-swipe-item>
    <template #indicator="{ active }">
      <DetailIndicator :swipe-data="sortedData" :cur-active="active" class="custom-indicator"/>
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