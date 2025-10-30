<script setup>
import SearchBox from '@/components/search-box/SearchBox.vue';
import SearchBoxVant from '@/components/search-box/SearchBoxVant.vue';
import { getCurrentInstance, ref } from 'vue';

const searchVal = ref("");
const active = ref();
console.log(getCurrentInstance())
</script>

<template>
  <div class="city top-page">
    <!-- <SearchBox v-model="searchVal"/> -->
      <SearchBoxVant v-model="searchVal" />
      <van-tabs v-model:active="active" color="#ff9854">
      <van-tab title="国内.港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
.style {
  --van-tabs-line-height: 36px !important;
}
</style>