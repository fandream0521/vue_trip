<script setup>

</script>

<template>
  <div class="home">
    <div class="nav-bar">
      <h1 class="title">
        宏源旅途
      </h1>
    </div>
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" />
    </div>

    <div class="location">
      <div class="city">杭州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 46px;
    border-bottom: 1px solid #f2f2f2;

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-color);
    }
  }

  .banner {
    img {
      width: 100%;
    }
  }

  .location {
    display: flex;
    align-items: center;

    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
    }

    .position {
      width: 74px;

      font-size: 12px;

      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}
</style>