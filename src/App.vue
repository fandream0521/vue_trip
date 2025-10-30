<script setup>
import { RouterView, useRoute } from 'vue-router';
import TabBarVant from './components/tab-bar/TabBarVant.vue';
import { watch } from 'vue';

const route = useRoute();
watch(route, (newVal, oldVal) => {
  console.log(newVal)
}, {immediate: true})
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
