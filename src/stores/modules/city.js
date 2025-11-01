import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllCity } from '@/service';
import { useRouter } from 'vue-router';


export const useCityStore = defineStore('city', () => {
  const allCity = ref({});
  const curCity = ref({});
  const router = useRouter();

  async function loadAllCity() {
    console.log("loading all city ...")
    const result = await getAllCity();
    allCity.value = result.data;
  }

  function setCurCity(city) {
    curCity.value = city;
    console.log('curCity', curCity.value)
    router.back();
  }

  return { allCity, curCity, loadAllCity, setCurCity }
})
