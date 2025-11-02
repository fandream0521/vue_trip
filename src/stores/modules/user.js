import { ref } from "vue";
import { defineStore } from "pinia";
import { formatDate, diffDate, today } from '@/utils/date';

export const useUserStore = defineStore("user", () => {
  const curDate = today();
  const nextDate = curDate.add(1, "day");

  const startDate = ref(formatDate(curDate));
  const endDate = ref(formatDate(nextDate));
  const diffDay = ref(1);
  
  const updateDate = (start, end) => {
    startDate.value = formatDate(start)
    endDate.value = formatDate(end)
    diffDay.value = diffDate(start, end)
  }

  return {
    startDate,
    endDate,
    diffDay,
    updateDate
  }
})



