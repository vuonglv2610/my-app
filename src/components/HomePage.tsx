import React from "react";
import MainInfor from "./MainInfor.tsx";
import { useGetQuery } from "../hooks/useGetQuery.ts";
import Cookies from "js-cookie";

const HomePage = () => {
  const data: any = useGetQuery("/comments", {}, false);
  const dataDetail = useGetQuery("/comments/2");

  console.log("dataDetail", dataDetail);

  Cookies.set("myCookieName", "cookieValue");

  return (
    <div className="flex-grow px-4 bg-main-infor w-full">
      <h1>Client site</h1>
      <MainInfor />
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} className="h-[250px]" data-aos="fade-up">
              {item.text}
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
