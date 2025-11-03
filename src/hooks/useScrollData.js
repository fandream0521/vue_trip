import { onActivated, onMounted, onUnmounted, ref } from "vue";

export default function() {
  const scrollTop = ref(0);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const isAtBottom = ref(false);

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


  const updateScrollData = () => {
    console.log(scrollTop.value)
    // 兼容性处理
    scrollTop.value =
      document.documentElement.scrollTop || document.body.scrollTop;
    clientHeight.value =
      document.documentElement.clientHeight || window.innerHeight;
    scrollHeight.value = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    // 核心判断逻辑
    const distanceToBottom = scrollHeight.value - (scrollTop.value + clientHeight.value);
    isAtBottom.value = distanceToBottom <= 2;
    console.log('是否到底底部:', isAtBottom.value)
  };

  const debounceFn = debounce(updateScrollData, 10)

  onMounted(() => {
    window.addEventListener("scroll", debounceFn);
    window.addEventListener("resize", debounceFn);
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", debounceFn);
    window.removeEventListener("resize", debounceFn);
  })

  return {
    clientHeight,
    scrollTop,
    scrollHeight,
    isAtBottom
  }
}