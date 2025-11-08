<script setup>
import useScrollData from '@/hooks/useScrollData';
import HomeContent from './cpns/HomeContent.vue';
import HomeSearchBox from './cpns/HomeSearchBox.vue';
import { computed, onActivated, useTemplateRef } from 'vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import NavBar from '@/components/nav-bar/NavBar.vue';
defineOptions({
  name: 'home'
})

const homeRef = useTemplateRef("homeRef")

const { scrollTop, isAtBottom } = useScrollData(homeRef);

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 450;
})

onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

</script>

<template>
  <div class="home" ref="homeRef">
    <NavBar title="宏源旅途"/>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" />
    </div>
    <HomeSearchBox />
    <HomeContent :isAtBottom="isAtBottom"/>

    <SearchBar  v-if="isShowSearchBar"/>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>