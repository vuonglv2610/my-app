import React from "react";
import TableManage from "../components/TableManage.tsx";

const Dashboard = () => {
  return (
    <div>
      <TableManage url="/products" />
    </div>
  );
};

export default Dashboard;
