<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('path', route.path, route.fullPath);
console.log("hhhhhh")
</script>

<template>
  <div class="favor">
    <h2>favor</h2>
  </div>
</template>

<style lang="less" scoped>
.favor {
  color: red;
}
</style>