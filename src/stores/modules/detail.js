import { getDetailInfos } from "@/service/modules/detail";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useDetailStore = defineStore("detail", () => {
  const detail = ref({});


  async function loadDetail(houseId) {
    const result = await getDetailInfos(houseId);
    detail.value = result.data;
  }
  const topModule = computed(() => detail.value?.mainPart?.topModule)
  const housePicture = computed(() => detail.value?.mainPart?.topModule?.housePicture);
  const dynamicModule = computed(() => detail.value?.mainPart?.dynamicModule)
  const introductionModule = computed(() => detail.value?.mainPart?.introductionModule)
  return {
    detail,
    topModule,
    housePicture,
    dynamicModule,
    introductionModule,
    loadDetail
  }
});

