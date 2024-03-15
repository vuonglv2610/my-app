import { useState } from "react";
import { post } from "../services/api";
import { toast } from "react-toastify";

export const useCreateQuery = async (
  url,
  params,
  options,
  isShowToast = true
) => {
  const [data, setData] = useState({});

  const response = await post(url, params);
  if (response) {
    setData(data);
    if (isShowToast) {
      toast.success("Successfully created!");
    }
  } else {
    toast.success("failed create!");
  }
  return data;
};
