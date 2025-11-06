<script setup>
import NavBar from '@/components/nav-bar/NavBar.vue';
import { useRoute, useRouter } from 'vue-router';
import { useDetailStore } from '@/stores/modules/detail';
import { storeToRefs } from 'pinia';
import DetailSwipe from './cpns/DetailSwipe.vue';
import DetailInInfos from './cpns/DetailInInfos.vue';
import DetailFacility from './cpns/DetailFacility.vue';
import DetailLandLord from './cpns/DetailLandLord.vue';
import DetailComment from './cpns/DetailComment.vue';
import DetailRules from './cpns/DetailRules.vue';
import DetailMap from './cpns/DetailMap.vue';
import DetailIntro from './cpns/DetailIntro.vue';
const router = useRouter();
const backClick = () => {
  router.back();
}

const route = useRoute();
const detailStore = useDetailStore();
const { detail, housePicture, topModule, introductionModule, dynamicModule } = storeToRefs(detailStore);
const { loadDetail } = detailStore;
loadDetail(route.params.houseId).then(() => {
  console.log(detail)
})
</script>

<template>
  <div class="detail top-page" v-if="dynamicModule">
    <NavBar title="房屋详情">
      <template #left>
        <div class="back" @click="backClick">
          <van-icon name="arrow-left" color="#ff9854" :size="15"/>
          <span class="text">路途</span>
        </div>
      </template>
    </NavBar>
    <div class="main">
      <DetailSwipe :swipe-data="housePicture?.housePics"/>
      <DetailInInfos :top-info="topModule"/>
      <DetailFacility :house-facility="dynamicModule.facilityModule?.houseFacility"/>
      <DetailLandLord :land-lord-info="dynamicModule.landlordModule"/>
      <DetailComment :comment-info="dynamicModule.commentModule" />
      <DetailRules :rules-info="dynamicModule.rulesModule" />
      <DetailMap :map-info="dynamicModule.positionModule"/>
      <DetailIntro :intro-info="introductionModule" v-if="introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/imgs/detail/icon_ensure.png" alt="">
      <div class="text">宏源旅途, 永无止境!</div>
    </div>
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

  .footer {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>