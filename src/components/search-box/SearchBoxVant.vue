<script setup>

import { useRouter } from 'vue-router';


const searchVal = defineModel()
const router = useRouter()
const cancelClick = () => {
  router.back();
}
</script>

<template>
  <div class="search-box">
    <van-search
      v-model="searchVal"
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="cancelClick"
    />
  </div>
</template>

<style lang="less" scoped>
.search-box {
  color: red;
}
</style>