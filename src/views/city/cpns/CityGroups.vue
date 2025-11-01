<script setup>
import CityGroupItem from './CityGroupItem.vue';
defineProps({
  cityGroups: {
    type: Array,
    require: true,
    default: () => ([])
  }
})
</script>

<template>
  <div class="city-groups">
    <CityGroupItem v-for="cityGroup in cityGroups" :key="cityGroup.group" :city-group="cityGroup"/>
  </div>
</template>

<style lang="less" scoped>

</style>