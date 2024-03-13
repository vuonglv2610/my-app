import instance from "./instance.ts";

export const get = async (url, options = {}) => {
  const response = await instance.get(url, options);
  return response.data;
};

export const post = async (url, data, options = {}) => {
  const response = await instance.post(url, data, options);
  return response.data;
};

export const put = async (url, data, options = {}) => {
  const response = await instance.put(url, data, options);
  return response.data;
};

export const remove = async (url, options = {}) => {
  const response = await instance.delete(url, options);
  return response.data;
};
