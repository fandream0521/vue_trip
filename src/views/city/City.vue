<script setup>
import SearchBoxVant from '@/components/search-box/SearchBoxVant.vue';
import useScrollToTop from '@/hooks/useScrollToTop';
import { useCityStore } from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import {  computed, ref, watch } from 'vue';
import CityGroups from './cpns/CityGroups.vue';
import HotCities from './cpns/HotCities.vue';
import SideIndex from './cpns/SideIndex.vue';

const searchVal = ref("");
const active = ref();
const contentRef = ref(null)

const cityStore = useCityStore();
const { allCity } = storeToRefs(cityStore);
const { loadAllCity } = cityStore;

loadAllCity();

const curCity = computed(() => allCity.value[active.value])
const indexList = computed(() => {
  const list = curCity.value?.cities?.map(group => group.group);
  list?.unshift("#")
  return list;
})

watch(active, () => {
  useScrollToTop(contentRef)
})
</script>

<template>
  <div class="city top-page">
    <!-- <SearchBox v-model="searchVal"/> -->
      <div class="top">
        <SearchBoxVant v-model="searchVal" />
        <VanTabs v-model:active="active" color="#ff9854">
          <VanTab v-for="(val, key) in allCity" :title="val.title" :key="key" :name="key"></VanTab>
        </VanTabs>
      </div>
      <div class="content" ref="contentRef">
        <HotCities :hot-cities="curCity?.hotCities" />
        <CityGroups :city-groups="curCity?.cities" />
        <SideIndex :index-list="indexList" class="index-list"/>
      </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  .top {
    --van-tabs-line-height: 40px !important;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

  }

  .content {
    height: calc(100vh - 100px);
    margin-top: 100px;
    padding: 0 20px;

    overflow-y: auto;

    .index-list {
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      margin: auto 0;
      z-index: 10;
    }
  }
}
</style>