import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("myCookieName");
    const headers: any = {};
    if (accessToken) {
      // headers.Authorization = "Bearer " + accessToken;
    }
    return { ...config, headers: { ...config.headers, ...headers } };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
