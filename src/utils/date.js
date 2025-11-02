import dayjs from "dayjs";

export function today() {
  return dayjs();
}

export function formatDate(date, format = "MM月DD日") {
  return dayjs(date).format(format)
}


export function diffDate(startDate, endDate) {
  startDate = dayjs(startDate);
  endDate = dayjs(endDate);
  return endDate.diff(startDate, "day")
}