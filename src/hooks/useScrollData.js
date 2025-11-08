import { onMounted, onUnmounted, ref } from "vue";

export default function(elRef) {
  let el = window;
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
    if (el === window) {
      // 兼容性处理
      scrollTop.value =
      document.documentElement.scrollTop || document.body.scrollTop;
      clientHeight.value =
      document.documentElement.clientHeight || window.innerHeight;
      scrollHeight.value = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    } else {
      scrollTop.value = el.scrollTop;
      clientHeight.value = el.clientHeight;
      scrollHeight.value = el.scrollHeight
    }
    
    // 核心判断逻辑
    const distanceToBottom = scrollHeight.value - (scrollTop.value + clientHeight.value);
    isAtBottom.value = distanceToBottom <= 2;
    if (isAtBottom.value) {
      console.log('到底了底部')
    }
  };

  const debounceFn = debounce(updateScrollData, 10)

  onMounted(() => {
    if (elRef) el = elRef.value;
    el.addEventListener("scroll", debounceFn);
    el.addEventListener("resize", debounceFn);
  })

  onUnmounted(() => {
    el.removeEventListener("scroll", debounceFn);
    el.removeEventListener("resize", debounceFn);
  })

  return {
    clientHeight,
    scrollTop,
    scrollHeight,
    isAtBottom
  }
}