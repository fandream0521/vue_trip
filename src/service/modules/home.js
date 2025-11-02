import tripRequest from "@/service/request"

export function getHotSuggests() {
  return tripRequest.get({
    url: "/home/hotSuggests"
  });
}

export function getHomeCategories() {
  return tripRequest.get({
    url: "/home/categories"
  });
}

export function getHouseList(page) {
  return tripRequest.get({
    url: "/home/houselist",
    params: {
      page
    }
  });
}
