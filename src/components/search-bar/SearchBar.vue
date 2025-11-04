<script setup>
import { useMainStore } from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
import { formatDate } from '@/utils/date';
import useCalendar from '@/hooks/useCalendar';
import { useCityStore } from '@/stores/modules/city';
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
const { show, onConfirm, formatter } = useCalendar();
const { curCity } = storeToRefs(useCityStore())
</script>

<template>
  <div class="search-bar">
    <div class="left"></div>
    <div class="m-content">
      <div class="city">
        {{ curCity.cityName }}
      </div>
      <div class="select-time" @click="show = true">
        <div class="top">
          <span class="text">住</span>
          <span class="time">{{ formatDate(startDate, "MM.DD") }}</span>
        </div>
        <div class="bottom">
          <span class="text">离</span>
          <span class="time">{{ formatDate(endDate, "MM.DD") }}</span>
        </div>
      </div>
      <div class="search-input">
        搜索广州的景点、地标、房源
      </div>
      <van-icon name="search" class="search"/>
    </div>
    <div class="right"></div>
    <div class="calendar">
      <VanCalendar v-model:show="show" type="range" @confirm="onConfirm" color="#ff9854" :formatter="formatter"
        :show-confirm="false" :round="false"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
  
  z-index: 100;

  display: flex;
  align-items: center;


  background-color: white;

  .m-content {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #f0f3f6;

    height: 35px;
    margin: 10px 0;
    border-radius: 3px;
    
    .city {
      color: #999;
      font-size: 12px;
      padding: 0 5px;
      border-right: 1px solid white;
      line-height: 35px;
    }
    .select-time {
      position: relative;
      font-size: 10px;
      padding-top: 3px;
      padding-right: 11px;
      padding: 6px 11px 6px 6px;
      border-right: 1px solid white;

      .text {
        color: #999;
      }

      .time {
        margin: 0 2px;
        color: #333;
      }

      &::after {
        content: "";
        width: 0;
        height: 0;
        border: 4px solid #666;
        border-color: transparent transparent transparent #666;
        position: absolute;
        bottom: 4px;
        right: 0;

        transform: rotate(45deg);
      }
    }

    .search-input {
      flex: 1;
      color: #999;
      font-size: 12px;
      padding: 0 5px;
      line-height: 35px;
      border-right: 1px solid white;
      
    }

    .search {
      font-size: 25px;
      color: #999;
      padding: 0 5px;
    }
  }

  .calendar {
    --van-calendar-popup-height: 100% !important;
  }
}
</style>