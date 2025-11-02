<script setup>
import HomeSearchBox from './cpns/HomeSearchBox.vue';
import HomeDateRange from './cpns/HomeDateRange.vue';
import { useHomeStore } from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);
const { loadHotSuggests } = homeStore;
loadHotSuggests();
</script>

<template>
  <div class="home">
    <div class="nav-bar">
      <h1 class="title">
        宏源旅途
      </h1>
    </div>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" />
    </div>

    <div class="info">
      <HomeSearchBox />
      <HomeDateRange class="bottom-gray-line"/>
      <div class="price-counter bottom-gray-line">
        <span class="start item">价格不限</span>
        <span class="item"></span>
        <span class="end item">人数不限</span>
      </div>
      <div class="keyword bottom-gray-line">
        关键字/位置/民宿名
      </div>
      <ul class="hot-suggest">
        <li v-for="(item, index) in hotSuggests" class="item" :key="index" :style="{ color: item.tagText.color, background: item.tagText.background.color}">
          <a :href="item.tagLink" >
            {{ item.tagText.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 46px;
    border-bottom: 1px solid #f2f2f2;

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-color);
    }
  }

  .banner {
    img {
      width: 100%;
    }
  }

  .info {
    padding: 0 20px;
    

    .price-counter {
      display: flex;
      justify-content: space-between;

      height: 44px;
      line-height: 44px;

      color: #aaa;
      font-size: 14px;
      .item {
        flex: 1;
      }
    }

    .keyword {
      height: 44px;
      line-height: 44px;
      color: #aaa;
      font-size: 14px;
    }

    .hot-suggest {
      display: flex;
      flex-flow: wrap;

      margin: 10px 0;
      .item {
        padding: 3px 6px;
        margin: 4px;
        border-radius: 10px;
      }
    }
  }
}
</style>