<script setup>
import { computed } from 'vue';

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => ([])
  },
  curActive: {
    type: Number,
    default: 0
  }
})

const pictureMap = computed(() => {
  const map = new Map();
  for (const pic of props.swipeData) {
    let curArr = map.get(pic.title);
    if (!curArr) {
      curArr = []
    }
    curArr.push(pic);
    map.set(pic.title, curArr);
  }
  return map;
})

const curPictureTitle = computed(() => props.swipeData[props.curActive]?.title)
</script>

<template>
  <ul class="indicator">
    <li v-for="[title, arr] in pictureMap" :class="{active: title === curPictureTitle}" class="item">
      <span class="title">{{ title.replace("：", "") }}</span>
      <span v-if="title === curPictureTitle" class="count">
        {{ curActive - arr[0].orderIndex + 1 }} / {{ arr.length }}
      </span>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.indicator {
  display: flex;
  align-items: center;

  color: white;

  .item {
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .active {
    background-color: white;
    color: #444;
    border-radius: 10px;
    padding: 1px 3px;
  }
}
</style>