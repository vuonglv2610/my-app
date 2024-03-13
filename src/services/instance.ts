import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("myCookieName");
    const headers: any = {};
    if (accessToken) {
      headers.Authorization = "Bearer " + accessToken;
    }
    return { ...config, ...headers };
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
