<script setup>
import { useMainStore } from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
import { formatDate } from '@/utils/date';
import useCalendar from '@/hooks/useCalendar';

const mainStore = useMainStore();
const { startDate, endDate, diffDay } = storeToRefs(mainStore);

const { show, onConfirm, formatter } = useCalendar();

</script>

<template>
  <div class="date-range">
    <div class="show" @click="show = true">
      <div class="start item">
        <span class="name">入住</span>
        <span class="date">{{ formatDate(startDate) }}</span>
      </div>
      <div class="stay item">
        <span>共 {{ diffDay }} 晚</span>
      </div>
      <div class="end item">
        <span class="name">离店</span>
        <span class="date">{{ formatDate(endDate) }}</span>
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