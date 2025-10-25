<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import tabBarData from "@/assets/data/tab-bar"

const router = useRouter();

const curActive = ref("home");

function tabClick(item) {
  curActive.value = item.key
  router.push({
    path: item.path
  })
}
</script>

<template>
  <ul class="tab-bar">
    <li v-for="item in tabBarData" 
        :key="item.key" 
        class="item" 
        :class="{active: curActive === item.key}" 
        @click="tabClick(item)">
      <img :src="curActive === item.key ? item.activeImage : item.image" />
      <span class="text">
        {{ item.text }}
      </span>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid #f3f3f3;

  .item {
    flex: 0;
    text-align: center;

    &.active {
      color: orange;
    }
    img {
      width: 36px;
    }

    .text {
      font-size: 12px;
    }
  }  
}
</style>