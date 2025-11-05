<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  more: String
})
</script>

<template>
  <div class="section">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="content">
      <slot>我是默认内容</slot>
    </div>
    <div class="footer" v-if="more">
      <span class="more" >
        {{ more }} 
      </span>
      <van-icon name="arrow" color="#ff9854" :size="12"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.section {
  border-top: 2px solid #f1f1f1;
  padding: 5px 20px;
  .header {
    font-size: 16px;
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    margin: 10px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px 0;
    color: var(--primary-color);
    font-size: 14px;
    .more {      
      margin-right: 3px;
    }
  }
}
</style>