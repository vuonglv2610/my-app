import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.HOST,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const url = "http://localhost:3000/comments";

export const getAPI = () => {
  return instance.get(url);
};
