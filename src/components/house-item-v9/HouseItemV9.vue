<script setup>
import { ref } from 'vue';

const itemData = defineProps({
  item: {
    type: Object,
    require: true,
    default: () => ({})
  }
})

const score = ref(Number(itemData.item.commentScore));
</script>

<template>
  <div class="house-item">
    <img :src="item.image.url" alt="house">
    <div class="desc">
      <p class="summary">{{ item.summaryText }}</p>
      <h3 class="title">{{ item.houseName }}</h3>
      <div class="comment-price">
        <VanRate v-model="score" readonly allow-half color="#fff" :size="10" />
        <span class="price">￥{{ item.finalPrice }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.house-item {
  position: relative;

  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }

  .desc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 10px;

    color: white;


    .summary {
      font-size: 14px;
      margin: 0;
    }

    .title {
      margin: 6px 0;
      font-size: 16px;
      font-weight: 400;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;

    }


    .comment-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>