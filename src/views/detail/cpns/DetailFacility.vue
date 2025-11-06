<script setup>
import DetailSection from '@/components/detail-section/DetailSection.vue';
import { computed } from 'vue';
const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})

const showFacilityList = computed(() => props.houseFacility.houseFacilitys?.filter((val, idx) => props.houseFacility.facilitySort.includes(idx)))
</script>
<template>
  <div class="facility">
    <DetailSection title="房屋设置" more="查看全部设施">
      <div class="facility-inner">
        <ul class="facility-list">
          <template v-for="facility in showFacilityList" :key="facility.groupId">
            <li class="facility-item">
              <div class="left">
                <img :src="facility.icon" alt="">
                <span class="text">{{ facility.groupName }}</span>
              </div>
              <div class="right">
                <div class="item" v-for="item in facility.facilitys.slice(0, 4)">
                  <van-icon name="passed" color="#ff9854" :size="12"/>
                  <span class="text" >
                  {{ item.name }}
                </span>
                </div>
                
              </div>
            </li>
          </template>
        </ul>
      </div>
    </DetailSection>
  </div>
</template>

<style lang="less" scoped>
.facility {
  .facility-inner {
    background-color: #f9f9f9;

    .facility-list {
      display: flex;
      flex-flow: column nowrap;

      padding: 10px;

      .facility-item {
        display: flex;
        margin: 10px 0;
        .left {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;
          padding: 0 20px 0 10px;
          width: 70px;
          font-size: 14px;

          
          img {
            width: 28px;
            margin-bottom: 3px;
          }
        }

        .right {
          flex: 1;
          display: flex;
          align-items: center;
          flex-flow: wrap;

          .item {
            width: 50%;

            .text {
              margin-left: 4px;
              font-size: 12px;
              color: #222;
            }
          }
        }
      }

    }
  }
}
</style>