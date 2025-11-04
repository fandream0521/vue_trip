import tripRequest from "@/service/request"

export function getDetailInfos(houseId) {
  return tripRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  });
}