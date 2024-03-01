import React from "react";
import Navbar from "./Navbar.tsx";

const ClientLayout = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">Client site</div>
    </div>
  );
};

export default ClientLayout;
