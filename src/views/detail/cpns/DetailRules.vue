<script setup>
import DetailSection from '@/components/detail-section/DetailSection.vue';
defineProps({
  rulesInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
  <div class="rules">
    <DetailSection title="预订须知" more="查看说明">
      <ul class="rules-inner">
        <li v-for="(rule, idx) in rulesInfo.orderRules" :key="idx" class="item">
          <span class="title">
            {{ rule.title }}
          </span>
          <span class="introduction">
            {{ rule.introduction }}
          </span>
        </li>
      </ul>
    </DetailSection>
  </div>
</template>

<style lang="less" scoped>
.rules {
  .rules-inner {
    margin: 10px 0;
    color: #555;
    .item {
        display: flex;
        margin: 20px 0;
      
        .title {
          width: 80px;
        }
      }
  }
}
</style>