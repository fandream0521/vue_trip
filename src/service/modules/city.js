import tripRequest from "@/service/request"

export function getAllCity() {
  return tripRequest.get({
    url: "/city/all"
  });
}