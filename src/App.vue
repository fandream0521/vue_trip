<script setup>
import { RouterView } from 'vue-router';
import TabBarVant from './components/tab-bar/TabBarVant.vue';

import Loading from './views/loading/Loading.vue';
</script>

<template>
  <TabBarVant class="tab-bar"/>
  <!-- <TabBar class="tab-bar"/> -->
  <RouterView />
  <Loading />
</template>

<style scoped>
.tab-bar {
  --van-tabbar-item-icon-margin-bottom: 3px;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
}
</style>
