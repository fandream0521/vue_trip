<script setup>
import homeLocation from "@/assets/imgs/home/location.png";
defineProps({
  item: {
    type: Object,
    require: true,
    default: () => ({})
  }
})
</script>

<template>
  <div class="house-item">
    <img :src="item.image.url" alt="house">
      <div class="desc">
        <p class="location">
          <img :src="homeLocation" :alt="item.location">
          <span class="text">{{ item.location }}</span>
        </p>
        <h3 class="title">{{ item.houseName }}</h3>
        <p class="summary">{{ item.summaryText }}</p>
        
        <div class="comment-price">
          <span class="price">￥{{ item.finalPrice }}</span>
          <span class="product-price">￥{{ item.productPrice }}</span>
          <span class="price-tip">
            {{ item.priceTipBadge?.text }}
          </span>
        </div>
      </div>
  </div>
</template>

<style lang="less" scoped>
.house-item {
  position: relative;

  height: 100%;
  background-color: #fafafa;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
  }

  .desc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 10px;

    .location {
      font-size: 12px;
      margin: 0;
      img {
        width: 12px;
        transform: translateY(-3px);
      }
    }

    .summary {
      font-size: 14px;
      margin: 5px 0;
    }

    .title {
      margin: 5px 0;
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
      align-items: center;
      .price {
        color: var(--primary-color);
      }

      .product-price {
        text-decoration: line-through;
        color: #999;
        margin: 0 4px;
        font-size: 12px;
      }

      .price-tip {
        background-color: rgba(255, 69, 0, .5);
        color: white;
        border-radius: 10px;
        padding: 2px 3px;
        font-size: 13px;
        margin-left: 4px;
      }
    }
  }
}
</style>