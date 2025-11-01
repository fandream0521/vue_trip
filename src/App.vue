<script setup>
import { RouterView, useRoute } from 'vue-router';
import TabBarVant from './components/tab-bar/TabBarVant.vue';
import { useLoadingStore } from './stores/modules/loading';
import { storeToRefs } from 'pinia';
import Loading from './views/loading/Loading.vue';


const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
</script>

<template>
  <TabBarVant class="tab-bar"/>
  <RouterView />
  <Loading v-if="isLoading" />
</template>

<style scoped>
.tab-bar {
  --van-tabbar-item-icon-margin-bottom: 3px
}
</style>
