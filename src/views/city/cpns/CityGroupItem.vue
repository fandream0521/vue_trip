<script setup lang='ts'>
import { useCityStore } from '@/stores/modules/city';

defineProps({
  cityGroup: {
    type: Object,
    require: true,
    default: () => ({})
  }
})

const { setCurCity } = useCityStore();
</script>

<template>
  <dl class="city-group">
    <dt class="group">{{ cityGroup.group }}</dt>
    <dd v-for="city in cityGroup.cities" :key="city.cityId" class="item" @click="setCurCity(city)">{{ city.cityName }}</dd>
  </dl>
</template>

<style lang="less" scoped>
.city-group {
  position: relative;
  margin: 10px 0;
  .group {
    position: sticky;
    top: 0;
    font-size: 18px;
    background-color: white;
  }
  .item {
    line-height: 35px;
    color: #666;
    border-bottom: 1px solid #ddd;
  }
}
</style>