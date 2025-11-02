import tripRequest from "@/service/request"

export function getHotSuggests() {
  return tripRequest.get({
    url: "/home/hotSuggests"
  });
}