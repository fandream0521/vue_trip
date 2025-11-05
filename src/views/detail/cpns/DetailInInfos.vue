<script setup>
defineProps({
  topInfo: {
    type: Object,
    default: () => ({})
  }
})


</script>

<template>
  <div class="infos">
    <h2 class="name">{{ topInfo.houseName }}</h2>
    <div class="tags">
      <template v-for="tag in topInfo.houseTags" :key="tag.tagCode">
        <span class="tag"  :title="tag.tagDesc" v-if="tag.tagText" :style="{
        color: tag.tagText.color,
        backgroundColor: tag.tagText.background.color
      }">
        {{ tag.tagText.text }}
      </span>
      </template>
    </div>
    <div class="comment" v-if="topInfo.commentBrief">
      <div class="left">
        <span class="score">{{ topInfo.commentBrief.overall }}</span>
        <span class="text">{{ topInfo.commentBrief.scoreTitle }}</span>
        <span class="brief">"{{ topInfo.commentBrief.commentBrief }}"</span>
      </div>
      <div class="right">
        <span class="count">
          {{ topInfo.commentBrief.totalCount }}条评论
        </span>
        <van-icon name="arrow" color="#ff9854" :size="12"/>
      </div>
    </div>

    <div class="position" v-if="topInfo?.nearByPosition">
      <div class="left">
        <span class="address">
          {{ topInfo.nearByPosition.address }}
        </span>
      </div>
      <div class="right">
        <span class="map">
          地图·周边
        </span>
        <van-icon name="arrow" color="#ff9854" :size="12"/>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.infos {
  padding: 20px;
  .name {
    font-size: 23px;
  }

  .tags {
    display: flex;
    align-items: center;

    margin: 10px 0;

    .tag {
      padding: 2px;
      margin-right: 5px;
    }
  }

  .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    padding: 0 10px;
    margin: 10px 0;
    background-color: #f6f6f6;

    .left {
      .score {
        font-size: 20px;
        font-weight: 600;
      }

      .text {
        font-size: 16px;
        margin: 0 3px;
      }

      .brief {
        font-size: 14px;
        color: #666;
      }
    }

    .right {
      .count {
        color: var(--primary-color);
      }
    }
  }

  .position {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    padding: 0 10px;
    background-color: #f6f6f6;
    margin: 10px 0;
    .left {
      .address {
        font-size: 14px;
        font-weight: 600;
      }
    }

    .right {
      .map {
        color: var(--primary-color);
      }
    }
  }
}
</style>