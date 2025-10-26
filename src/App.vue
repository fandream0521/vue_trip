<script setup>
import { RouterView } from 'vue-router';
import TabBarVant from './components/tab-bar/TabBarVant.vue';

</script>

<template>
  <TabBarVant class="tab-bar"/>
  <RouterView />
</template>

<style scoped>
.tab-bar {
  --van-tabbar-item-icon-margin-bottom: 3px
}
</style>
