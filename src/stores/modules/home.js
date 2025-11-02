import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getHotSuggests } from '@/service/modules/home';

export const useHomeStore = defineStore('home', () => {
  const hotSuggests = ref([]);
  async function loadHotSuggests() {
    const result = await getHotSuggests();
    hotSuggests.value = result.data;
  }

  return { hotSuggests, loadHotSuggests }
})
