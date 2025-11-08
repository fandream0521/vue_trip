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

const categoryMap = ['', '客厅', '卧室', '厨房', '卫生间', '', '', '', '', '其他']

const pictureMap = computed(() => {
  const map = new Map();
  for (const pic of props.swipeData) {
    let curArr = map.get(pic.enumPictureCategory);
    if (!curArr) {
      curArr = []
    }
    curArr.push(pic);
    map.set(pic.enumPictureCategory, curArr);
  }
  return map;
})

const titleMap = computed(() => {
  const map = new Map();
  for (const pic of props.swipeData) {
    map.set(pic.orderIndex, formatTitle(pic.title));
  }
  console.log(map);
  return map;
})

const titleReg = /【(.*)】/;
const formatTitle = (title) => {
  return titleReg.exec(title)[1];
}
const curPictureTitle = computed(() => props.swipeData[props.curActive]?.enumPictureCategory);
</script>

<template>
  <ul class="indicator">
    <li v-for="[category, arr] in pictureMap" :class="{active: category === curPictureTitle}" class="item">
      <span class="title">{{ category === curPictureTitle ? titleMap.get(curActive) : categoryMap[category] }}</span>
      <span v-if="category === curPictureTitle" class="count">
        {{ curActive - arr[0].orderIndex + 1 }}/{{ arr.length }}
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
    

    .title {
      margin: 0 3px;
    }

    .count {
      width: 28px;
      text-align: center;
    }
  }

  .active {
    background-color: white;
    color: #444;
    border-radius: 10px;
    padding: 1px 1px;
  }
}
</style>