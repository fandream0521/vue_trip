<script setup>
import { useRouter } from 'vue-router';


const searchVal = defineModel()
const router = useRouter()
const cancelClick = () => {
  router.back();
}
const clearClick = () => {
  searchVal.value = ""
}
</script>

<template>
  <div class="search-box">
    <div class="search-input">
      <van-icon name="search" color="#ff9854" class="search-icon"/>
      <input type="text" class="input" placeholder="城市/区域/位置" v-model="searchVal">
      <van-icon name="clear" color="#bbb"  class="clear-icon" @click="clearClick"/>
    </div>
    <span class="cancel" @click="cancelClick">取消</span>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  display: flex;
  align-items: center;
  
  .search-input {
    flex: 1;
    display: flex;
    align-items: center;

    height: 35px;
    margin: 10px;
    background-color: #f2f2f2;
    border-radius: 20px;
    .search-icon {
      margin: 0 4px 0 10px;
    }

    .clear-icon {
      margin: 0 8px;
    }

    .input {
      flex: 1;
      border: none;
      background: none;
      outline: none;
      margin-right: 15px;

      &::placeholder {
        color: #c6c6ce;
      }
    }
  }

  .cancel {
    margin-right: 10px;
  }
  
}
</style>