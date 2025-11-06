<script setup>
import DetailSection from '@/components/detail-section/DetailSection.vue';
defineProps({
  landLordInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
  <div class="land-lord">
    <DetailSection title="房东介绍" more="查看房东主页">
      <div class="top-scroll" v-if="landLordInfo.topScroll">
        <img :src="landLordInfo.topScroll" alt="scroll">
      </div>
      <div class="hotel-info">
        <div class="left">
          <div class="logo">
            <img :src="landLordInfo.hotelLogo" alt="">
          </div>
          <div class="name-tags" v-if="landLordInfo.hotelTags">
            <h3 class="name">{{ landLordInfo.hotelName }}</h3>
            <ul class="tags">
              <template v-for="(tag, index) in landLordInfo.hotelTags" :key="index">
                <li class="item" :style="{color: tag.tagText.color}">{{ tag.tagText.text }}</li>
                <li class="item sep" v-if="index < landLordInfo.hotelTags.length - 1">|</li>
              </template>
            </ul>
          </div>
        </div>
        <div class="right">
          <span class="contact">联系房东</span>
        </div>
      </div>

      <ul class="hotel-summary" v-if="landLordInfo.hotelSummary">
        <li v-for="(summary, index) in landLordInfo.hotelSummary" :key="index" class="item">
          <span class="title">{{ summary.title }}</span>
          <span class="introduction">{{ summary.introduction }}</span>
          <span class="tip">{{ summary.tip }}</span>
        </li>
      </ul>
    </DetailSection>
  </div>
</template>

<style lang="less" scoped>
.land-lord {
  .top-scroll {
    img {
      width: 100%;
    }
  }

  .hotel-info {
    display: flex;
    justify-content: space-between;

    margin: 10px 0;
    .left {
      display: flex;

      .logo {
        width: 50px;
        img {
          width: 100%;
        }
      }

      .name-tags {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        padding: 3px 0;
        margin: 0 4px;
        .tags {
          display: flex;
          font-size: 12px;

          .sep {
            margin: 0 4px;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .contact {
        padding: 5px 10px;
        background-color: var(--primary-color);
        border-radius: 5px;
        color: white;
        font-size: 12px;
        line-height: 1;
      }
    }
  }

  .hotel-summary {
    display: flex;

    margin:  50px 0 30px 0;
    .item {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;

      padding: 0 10px;

      .title {
        font-size: 12px;
        color: #999;
      }

      .introduction {
        font-size: 16px;
        font-weight: 600;
        margin: 5px 0;
      }

      .tip {
        font-size: 12px;
        color: #888;
      }
    }
  }
}
</style>