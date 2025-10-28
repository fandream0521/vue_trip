<script setup>

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功： ", res);
  }, err => {
    console.log("获取位置失败：", err);
  })
}
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city">杭州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  color: red;

  .location {
    display: flex;
    align-items: center;

    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;

      color: #333;
    }

    .position {
      width: 74px;

      font-size: 12px;

      .text {
        color: #666;
      }

      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}
</style>