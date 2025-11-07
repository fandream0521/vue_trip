<script setup>
defineProps({
  titles: {
    type: Array,
    default: () => ([])
  }
})

const emit = defineEmits(["click"]);

const onClick = (index) => {
  active.value = index;
  emit("click", index);
}

const active = defineModel({default: 0});
</script>

<template>
  <ul class="tab-control">
    <li v-for="(title, index) in titles" :key="title" class="item" :class="{active: active === index}">
      <span class="text" @click="() => onClick(index)">
        {{ title }}
      </span>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  display: flex;

  .item {
    flex: 1;
    text-align: center;

    .text {
      display: inline-block;
      padding: 0 8px;
      line-height: 40px;
      border-top: 3px solid transparent;
    }

    &.active .text {
      color: var(--primary-color);
      border-bottom: 3px solid var(--primary-color);
    }
  }
}
</style>