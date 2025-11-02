<script setup>
import { useCityStore } from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import HomeDateRange from './HomeDateRange.vue';
import { useHomeStore } from '@/stores/modules/home';

const router = useRouter()
const homeStore = useHomeStore();

const { hotSuggests, categories } = storeToRefs(homeStore);
const { loadHotSuggests, loadCategories } = homeStore;

const cityStore = useCityStore();
const { curCity } = storeToRefs(cityStore)

const cityClick = () => {
  router.push({
    path: "/city"
  })
}
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功： ", res);
  }, err => {
    console.log("获取位置失败：", err);
  })
}
const searchClick = () => {
  router.push({
    path: "/search"
  })
}


loadHotSuggests();
loadCategories();
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{ curCity.cityName ?? '杭州' }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" />
      </div>
    </div>
    <HomeDateRange class="bottom-gray-line" />
    <div class="price-counter bottom-gray-line">
      <span class="start item">价格不限</span>
      <span class="item"></span>
      <span class="end item">人数不限</span>
    </div>
    <div class="keyword bottom-gray-line">
      关键字/位置/民宿名
    </div>
    <ul class="hot-suggest">
      <li v-for="(item, index) in hotSuggests" class="item" :key="index"
        :style="{ color: item.tagText.color, background: item.tagText.background.color }">
        <a :href="item.tagLink">
          {{ item.tagText.text }}
        </a>
      </li>
    </ul>

    <div class="search" @click="searchClick">
      开始搜索
    </div>

    <div class="categories">
      <ul class="list">
        <li v-for="category in categories" :key="category.id" class="item">
          <img :src="category.pictureUrl" :title="category.title" />
          <span class="text">{{ category.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  padding: 0 20px;

  .location {
    display: flex;
    align-items: center;
    height: 44px;

    .city {
      flex: 1;
      color: #333;
    }

    .position {
      width: 74px;
      font-size: 12px;

      .text {
        color: #666;
      }

      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }

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

  .search {
    height: 38px;
    line-height: 38px;
    margin: 20px 0;
    text-align: center;

    font-size: 20px;
    font-weight: 400;
    color: #fff;

    border-radius: 20px;
    background: var(--theme-linear-gradient);
  }

  .categories {
    overflow-x: auto;

    scrollbar-width: none;

    .list {
      display: flex;

      .item {
        flex: none;
        display: flex;
        flex-flow: column;
        align-items: center;

        width: 70px;
        padding: 0 5px;

        img {
          width: 32px;
          height: 32px;
        }

        .text {
          font-size: 12px;
          margin-top: 8px;
        }
      }
    }
  }
}
</style>