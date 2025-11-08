<script setup>
import DetailSection from '@/components/detail-section/DetailSection.vue';
defineProps({
  commentInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
  <div class="comment">
    <DetailSection title="热门评论" :more="`查看全部${commentInfo.totalCountStr}条评论`">
      <div class="comment-inner">
        <div class="score-info">
          <div class="overall">
            <div class="inner">
              <span class="text">
              {{ commentInfo.overall }}
            </span>
            </div>
          </div>
          <div class="score-title">
            <span class="title">
              {{ commentInfo.scoreTitle }}
            </span>
            <span class="count">
              {{ commentInfo.totalCountStr }}条评论
            </span>
            <van-rate v-model="commentInfo.overall" readonly allow-half :size="12" color="#ff9854"/>
          </div>
          <ul class="sub-scores">
            <li v-for="(item, idx) in commentInfo.subScores" :key="idx" class="item">{{ item }}</li>
          </ul>
        </div>
        <ul class="comment-tags">
          <li v-for="(tag, idx) in commentInfo.commentTagVo" :style="{backgroundColor: tag.backgroundColor, color: tag.color}" :key="idx" class="item">
            <span class="text">
              {{ tag.text }}
            </span>
          </li>
        </ul>
        <div class="comment-detail" v-if="commentInfo.comment">
          <div class="header">
            <div class="avatar">
              <img :src="commentInfo.comment.userAvatars" alt="">
            </div>
            <div class="user-info">
              <span class="name">
                {{ commentInfo.comment.userName }}
              </span>
              <span class="time">
                {{ commentInfo.comment.checkInDate }}
              </span>
            </div>
          </div>
          <p class="content">
            {{ commentInfo.comment.commentDetail }}
          </p>
        </div>
      </div>
    </DetailSection>
  </div>
</template>

<style lang="less" scoped>
.comment {
  .comment-inner {
    margin: 10px 0;
    padding-top: 10px;
    font-size: 12px;
    color: #666;

    .score-info {
      display: flex;

      .overall {
        
        flex: 2;
        display: flex;
        justify-content: center;
        font-size: 56px;
        font-weight: 600;
        color: black;
        text-align: center;

        .inner {
          position: relative;
          .text {
            position: relative;
            z-index: 2;
          }

          &::after {
            content: "";
            display: inline-block;
            position: absolute;
            bottom: 10px;
            left: -4px;
            right: 6px;
            background-color: var(--primary-color);
            height: 6px;
            border-radius: 3px;
          }
        }

        
      }

      .score-title {
        flex: 3;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;

        padding: 8px 0 8px 5px;
      }

      .sub-scores {
        flex: 4;
        display: flex;
        flex-flow: wrap;
        justify-content: flex-end;
        
        padding: 6px 0;
        font-size: 13px;

        .item {
          margin-left: 4px;
        }
      }
    }

    .comment-tags {
      display: flex;
      flex-flow: wrap;

      .item {

        padding: 4px 8px;
        border-radius: 10px;
        margin: 6px 10px 3px 0;
        margin-right: 10px;
        margin-top: 6px;
      }
    }
    .comment-detail {
      padding: 10px;
      margin: 15px 0;
      background-color: #f9f9f9;
      .header {
        display: flex;

        .avatar {
          width: 36px;

          img {
            width: 100%;
          }
        }
        .user-info {
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          margin-left: 6px;

          padding: 5px;

          .name {
            font-size: 14px;
            font-weight: 600;
            color: black;
          }

          .time {
            margin-top: 3px;
            font-size: 12px;
            color: #aaa;
          }
        }
      }

      .content {
        margin-top: 10px;
        margin-bottom: 0;
        color: #444;
        line-height: 1.5;
      }
    }
  }
}
</style>