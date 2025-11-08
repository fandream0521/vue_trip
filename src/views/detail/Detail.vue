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
import TabControl from '@/components/tab-control/TabControl.vue';
import { computed, watch, ref, useTemplateRef } from 'vue';
import useScrollData from '@/hooks/useScrollData';
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

const detailRef = useTemplateRef("detailRef");
const mainRef = useTemplateRef("main");
const { scrollTop } = useScrollData(detailRef);

const isShowTabBar = computed(() => {
  return scrollTop.value > 300;
})

const sectionEls = ref({});
const getSelectionEl = (value) => {
  if (value) {
    const el = value.$el;
    const name = el.getAttribute("name");
    sectionEls.value[name] = el;
  }
}

const tabClick = (index) => {
  let instance = sectionEls.value[titles.value[index]].offsetTop;
  if (index !== 0) {
    instance -= 42;
  }
  detailRef.value.scrollTo({
    top: instance,
    behavior: 'smooth'
  })
}


const titles = ref([])

watch(mainRef, () => {
  if (mainRef.value) {
    const children = Array.prototype.slice.call(mainRef.value.children);
    titles.value = children.map(item => item.getAttribute('name')).filter(item  => item !== null);
    console.log(titles.value)
  }
})



const scrollTopList = computed(() => {
  const list = [];
  for (let title of titles.value) {
    list.push(sectionEls.value[title].offsetTop - 42)
  }
  list.push(10000000);
  console.log(list);
  return list;
})

const active = computed(() => {
  let finalI = 0;
  for (let i = 0; i < scrollTopList.value.length; i++) {
    if (scrollTop.value > scrollTopList.value[i]) {
      finalI = i;
    } else {
      break
    }
  }
  return finalI;
})
</script>

<template>
  <div class="detail top-page"  ref="detailRef">
    <NavBar title="房屋详情">
      <template #left>
        <div class="back" @click="backClick">
          <van-icon name="arrow-left" color="#ff9854" :size="15"/>
          <span class="text">路途</span>
        </div>
      </template>
    </NavBar>
    <TabControl :titles="titles" :model-value="active" v-if="isShowTabBar" @click="tabClick"/>
    <div class="main" v-if="dynamicModule" ref="main" v-memo="[dynamicModule]">
      <DetailSwipe :swipe-data="housePicture?.housePics"/>
      <DetailInInfos :ref="getSelectionEl" name="描述" :top-info="topModule"/>
      <DetailFacility :ref="getSelectionEl" name="设施" :house-facility="dynamicModule.facilityModule?.houseFacility"/>
      <DetailLandLord :ref="getSelectionEl" name="房东" :land-lord-info="dynamicModule.landlordModule"/>
      <DetailComment :ref="getSelectionEl" name="评论" :comment-info="dynamicModule.commentModule" />
      <DetailRules :ref="getSelectionEl" name="须知" :rules-info="dynamicModule.rulesModule" />
      <DetailMap :ref="getSelectionEl" name="周边" :map-info="dynamicModule.positionModule"/>
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