import { ref } from "vue";
import { defineStore } from "pinia";
import { diffDate, today } from '@/utils/date';
import dayjs from "dayjs";

export const useMainStore = defineStore("main", () => {
  const curDate = today();
  const nextDate = curDate.add(1, "day");

  const startDate = ref(curDate);
  const endDate = ref(nextDate);
  const diffDay = ref(1);
  
  const updateDate = (start, end) => {
    startDate.value = dayjs(start);
    endDate.value = dayjs(end);
    diffDay.value = diffDate(start, end)
  }

  const isLoading = ref(false);

  function start() {
    isLoading.value = true;
  }

  function end() {
    setTimeout(() => {
      isLoading.value = false;
    }, 400)
  }

  return {
    startDate,
    endDate,
    diffDay,
    isLoading,
    start,
    end,
    updateDate
  }
})



