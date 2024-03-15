import { useEffect, useState } from "react";
import { get } from "../services/api.ts";
import { toast } from "react-toastify";

export const useGetQuery = (url, params = {}, isShowToast = true) => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const res = await get(url, params);
      if (res) {
        setData(res);
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
