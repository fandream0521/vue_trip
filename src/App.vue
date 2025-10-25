<script setup>
import { RouterView } from 'vue-router';
import TabBar from './components/tab-bar/TabBar.vue';

</script>

<template>
  <TabBar class="tab-bar"/>
  
  <RouterView />
</template>

<style scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
}
</style>
