import React from "react";
import MainInfor from "./MainInfor.tsx";
import { useGetQuery } from "../hooks/useGetQuery.ts";
import Cookies from "js-cookie";
import { useAuthProvider } from "../contexts/AuthContext.tsx";

const HomePage = () => {
  const accessToken = Cookies.get("accessToken");
  const { userInfo, logout } = useAuthProvider();
  const user: any = userInfo;
  const data: any = useGetQuery("/comments", {}, false, !!accessToken);
  return (
    <div className="flex-grow px-4 bg-main-infor w-full">
      <h1>{user?.fullname}</h1>
      {user && <button onClick={logout}>logout</button>}
      <MainInfor />
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} className="h-[250px]" data-aos="flip-right">
              {item.text}
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
