<script setup>
defineProps({
  indexList: {
    type: Array,
    require: true,
    default: () => ([])
  }
})
</script>

<template>
  <ul class="side-index">
    <li v-for="index in indexList" :key="index" class="item">
      {{ index }}
    </li>
  </ul>
</template>

<style lang="less" scoped>
.side-index {
  display: flex;
  flex-flow: column nowrap;

  .item {
    margin: 1px;
  }
}
</style>