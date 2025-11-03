<script setup>
import useScrollData from '@/hooks/useScrollData';
import HomeContent from './cpns/HomeContent.vue';
import HomeSearchBox from './cpns/HomeSearchBox.vue';
import { computed } from 'vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';

const { scrollTop } = useScrollData();

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 450;
})
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
    <HomeSearchBox />
    <HomeContent />

    <SearchBar  v-if="isShowSearchBar"/>
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


}
</style>