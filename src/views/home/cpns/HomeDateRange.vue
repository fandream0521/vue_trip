<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/modules/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { startDate, endDate, diffDay } = storeToRefs(userStore);
const { updateDate } = userStore;

const show = ref(false);
const onConfirm = (values) => {
  const [start, end] = values;
  updateDate(start, end);
  show.value = false;
};

const formatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
};

</script>

<template>
  <div class="date-range">
    <div class="show" @click="show = true">
      <div class="start item">
        <span class="name">入住</span>
        <span class="date">{{ startDate }}</span>
      </div>
      <div class="stay item">
        <span>共 {{ diffDay }} 晚</span>
      </div>
      <div class="end item">
        <span class="name">离店</span>
        <span class="date">{{ endDate }}</span>
      </div>
    </div>
    <div class="calendar">
      <VanCalendar v-model:show="show" type="range" @confirm="onConfirm" color="#ff9854" :formatter="formatter"
        :show-confirm="false" :round="false"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.date-range {
  height: 44px;
  .show {
    display: flex;
    align-items: center;

    .item {
      flex: 1;
      color: #666;

      .name {
        font-size: 12px;
        color: #aaa;
      }

      .date {
        font-size: 14px;

      }
    }

    .start,
    .end {
      display: flex;
      flex-flow: column nowrap;
    }

    .stay {
      font-size: 13px;
    }
  }

  .calendar {
    --van-calendar-popup-height: 100% !important;
  }
}
</style>