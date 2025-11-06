<script setup>
defineProps({
  introInfo: {
    type: Object,
    default: () => ({})
  }
})

</script>

<template>
  <div class="intro">
    <h4 class="title">
      {{ introInfo.title }}
    </h4>
    <p class="introduction">
      {{ introInfo.introduction }}
    </p>
  </div>
</template>

<style lang="less" scoped>
.intro {
  border-top: 3px solid #f1f1f1;
  padding: 20px;
  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .introduction {
    color: #666;
    font-size: 14px;
  }
}
</style>