import { useMainStore } from "@/stores/modules/main";
import { ref } from "vue";

export default function () {
  const show = ref(false);

  const mainStore = useMainStore();
  const { updateDate } = mainStore;

  const onConfirm = (values) => {
    const [start, end] = values;
    updateDate(start, end);
    show.value = false;
  };

  const formatter = (day) => {
    if (day.type === "start") {
      day.bottomInfo = "入住";
    } else if (day.type === "end") {
      day.bottomInfo = "离店";
    }

    return day;
  };

  return {
    show,
    onConfirm,
    formatter
  }
}
