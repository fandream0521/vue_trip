<script setup>
defineProps({
  title: {
    type: String,
    default: "宏源旅途"
  }
})
</script>

<template>
  <div class="nav-bar">
    <div class="left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <h1 class="title">
      {{ title }}
    </h1>
    <div class="right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  height: 46px;
  border-bottom: 1px solid #f2f2f2;

  .title {
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-color);
  }

  .left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>