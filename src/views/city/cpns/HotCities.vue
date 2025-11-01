<script setup>
import { useCityStore } from '@/stores/modules/city';

defineProps({
  hotCities: {
    type: Array,
    require: true,
    default: () => ([])
  }
})

const { setCurCity } = useCityStore();
</script>

<template>
  <div class="hot-cities">
    <h3 class="title">热门</h3>
    <ul class="items">
      <li v-for="city in hotCities" :key="city.cityId" class="item" @click="setCurCity(city)">
        {{ city.cityName }}
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.hot-cities {
  .title {
    position: sticky;
    top: 0;
    background-color: white;
  }

  .items {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    margin: 10px 0;
    padding-right: 20px;
    .item {
      width: 70px;
      height: 28px;
      margin: 6px;
      line-height: 28px;
      text-align: center;
      border-radius: 14px;
      background-color: #fff4ec;
    }

  }
}
</style>