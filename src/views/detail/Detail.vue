<script setup>
import NavBar from '@/components/nav-bar/NavBar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useDetailStore } from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import DetailSwipe from './cpns/DetailSwipe.vue';
const router = useRouter();
const backClick = () => {
  router.back();
}

const route = useRoute();
const detailStore = useDetailStore();
const { detail, housePicture } = storeToRefs(detailStore);

const { loadDetail } = detailStore;
loadDetail(route.params.houseId).then(() => {
  console.log(detail)
})
</script>

<template>
  <div class="detail top-page">
    <NavBar title="房屋详情">
      <template #left>
        <div class="back" @click="backClick">
          <van-icon name="arrow-left" color="#ff9854" :size="15"/>
          <span class="text">路途</span>
        </div>
      </template>
    </NavBar>
    <DetailSwipe :swipe-data="housePicture?.housePics"/>
  </div>
</template>

<style lang="less" scoped>
.detail {

  .back {
    display: flex;
    align-items: center;
    padding: 0 5px;
    .text {
      color: var(--primary-color);
      font-size: 14px;
      margin-left: 3px;
    }
  }


  
}
</style>