import React from "react";
import Navbar from "./Navbar.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.tsx";

const ClientLayout = () => {
  return (
    <>
      <div className="flex text-white">
        <Navbar />
        <div className="ml-[300px] w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClientLayout;
