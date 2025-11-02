import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { getHomeCategories, getHotSuggests, getHouseList } from '@/service/modules/home';

export const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref([]);
  const categories = ref([]);
  const houseList = ref([])
  const curPage = ref(1);

  async function loadHotSuggests() {
    const result = await getHotSuggests();
    hotSuggests.value = result.data;
  }

  async function loadCategories() {
    const result = await getHomeCategories();
    categories.value = result.data;
  }

  watch(curPage, async (page) => {
    const res = await getHouseList(page);
    houseList.value = houseList.value.concat(res.data);
    console.log(houseList.value)
  }, {
    immediate: true
  })



  return { 
    curPage,
    hotSuggests, 
    categories, 
    houseList, 
    loadHotSuggests, 
    loadCategories,
  }
})
