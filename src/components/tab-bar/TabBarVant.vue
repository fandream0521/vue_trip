<script setup>
import tabBarData from "@/assets/data/tab-bar"

</script>

<template>
<van-tabbar route active-color="#ff9853">
  <van-tabbar-item v-for="item in tabBarData" :name="item.key" :key="item.key" :to="item.path">
    <span>{{ item.text }}</span>
    <template #icon="props">
      <img :src="props.active ? item.activeImage : item.image" />
    </template>
  </van-tabbar-item>
</van-tabbar>
</template>

<style lang="less" scoped>

:deep(.van-tabbar-item__icon) img {
  width: 36px;
  height: auto;
}
</style>