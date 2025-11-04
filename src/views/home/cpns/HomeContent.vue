 <script setup>
import useScrollData from '@/hooks/useScrollData';
import { useHomeStore } from '@/stores/modules/home';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import HouseItemV3 from '@/components/house-item-v3/HouseItemV3.vue';
import HouseItemV9 from '@/components/house-item-v9/HouseItemV9.vue';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore();
const { houseList, curPage } = storeToRefs(homeStore);

const { isAtBottom } = useScrollData();

watch(isAtBottom, (val) => {
  if (val) {
    curPage.value += 1;
  }
})

const router = useRouter();

const itemClick = (houseId) => {
  router.push({
    path: `/detail/${houseId}`
  })
}

</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="house-list">
      <ul class="list">
        <li v-for="house in houseList" :key="house.data.houseId" class="item">
          <HouseItemV3 v-if="house.discoveryContentType == 3" :item="house.data" @click="itemClick(house.data.houseId)"/>
          <HouseItemV9 v-if="house.discoveryContentType == 9" :item="house.data" @click="itemClick(house.data.houseId)"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  padding: 10px 5px;
  margin-bottom: 50px;
  .title {
    font-size: 22px;
    padding: 10px;
  }

  .house-list {
    .list {
      display: flex;
      flex-flow: wrap;

      .item {
        box-sizing: border-box;
        width: 50%;
        height: 280px;
        padding: 5px;
      }
    }
  }


}
</style>