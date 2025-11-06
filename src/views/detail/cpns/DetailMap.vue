<script setup>
import DetailSection from '@/components/detail-section/DetailSection.vue';
import { onMounted, ref, watch } from 'vue';
const props = defineProps({
  mapInfo: {
    type: Object,
    default: () => ({})
  }
})

const mapRef = ref();

onMounted(() => {
  var map = new BMapGL.Map(mapRef.value); // 创建Map实例
  let point = new BMapGL.Point(props.mapInfo.longitude, props.mapInfo.latitude);
  const marker = new BMapGL.Marker(point);
  map.centerAndZoom(point, 20); // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放
  map.addOverlay(marker);
})
// watch(() => props.mapInfo, () => {

// }, {deep: true})

</script>

<template>
  <div class="map">
    <DetailSection title="地图周边" more="查看更多周边信息">
      <div id="container" ref="mapRef"></div>
    </DetailSection>
  </div>
</template>

<style lang="less" scoped>
.map {
  .baidu {
    margin: 10px 0;
  }

  #container {
    overflow: hidden;
    width: 100%;
    height: 200px;
    margin: 0;
    font-family: "微软雅黑";
  }

  
}
</style>