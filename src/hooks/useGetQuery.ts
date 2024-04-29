import { useEffect, useState } from "react";
import { get } from "../services/api.ts";
import { toast } from "react-toastify";

export const useGetQuery = (
  url,
  params = {},
  isShowToast = true,
  isAuth = false
) => {
  const [data, setData] = useState<any>();
  const [totals, setTotal] = useState<any>();
  const fetchData = async () => {
    const urlConfig = isAuth ? `/664${url}` : url;
    try {
      const res = await get(urlConfig, params);
      if (res) {
        setData(res.data);
        setTotal(res.headers["x-total-count"]);
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
  return { data, totals ,fetchData };
};
