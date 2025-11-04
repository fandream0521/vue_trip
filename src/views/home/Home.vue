<script setup>
import useScrollData from '@/hooks/useScrollData';
import HomeContent from './cpns/HomeContent.vue';
import HomeSearchBox from './cpns/HomeSearchBox.vue';
import { computed } from 'vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import NavBar from '@/components/nav-bar/NavBar.vue';

const { scrollTop } = useScrollData();

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 450;
})
</script>

<template>
  <div class="home">
    <NavBar title="宏源旅途"/>
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
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>