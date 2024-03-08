import React from "react";
import Navbar from "./Navbar.tsx";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <div className="flex text-white">
      <Navbar />
      <div className="ml-[300px]">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
