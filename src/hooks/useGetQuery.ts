import { useEffect, useState } from "react";
import { get } from "../services/api.ts";
import { toast } from "react-toastify";

export const useGetQuery = (
  url,
  params = {},
  isShowToast = true,
  isAuth = false
) => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const urlConfig = isAuth ? `/664${url}` : url;
    try {
      const res = await get(urlConfig, params);
      if (res) {
        setData(res.data);
        if (isShowToast) {
          toast.success("Get successfully!");
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data;
};
