import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import { useLoadingStore } from "@/stores/modules/loading";

const loadingStore = useLoadingStore();
const { start, end } = loadingStore;

class TripRequest {
  constructor(baseURL = BASE_URL, timeout = TIMEOUT) {
    this.instance = axios.create({
      baseURL,
      timeout
    }) 

    this.instance.interceptors.request.use(config => {
      start();
      const token = this.getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    }, error => {
      return Promise.reject(error);
    })

    this.instance.interceptors.response.use(response => {
      const { data, status } = response;
      end();
      if (status >= 200 && status < 300) {
        return this.handleResponse(data);
      }
      return Promise.reject(new Error(`Request failed with status code ${status}`));
    }, error => {
      end();
      return this.handleError(error)
    })
  }

  handleResponse(data) {
    return data;
  }

  handleError(error) {
    return Promise.reject(new Error(error))
  }

  // 获取token
  getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token') || '';
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(resolve).catch(reject)
    })
  }

  get(config) {
    return this.request({ ...config, method: "GET"})
  }


  post(config) {
    return this.request({ ...config, method: "POST"})
  }
}

export default new TripRequest();