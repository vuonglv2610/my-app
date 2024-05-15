import React from "react";
import TableManage from "../components/TableManage.tsx";
import { useQuery } from '@tanstack/react-query';
import { get } from "../services/api.ts";
import LoadingComponent from "../components/Loading.tsx";


const Dashboard = () => {
  const query = useQuery({ queryKey: ['/products'],queryFn: () => get('/products')})

  return (
    <div>
      {query?.isLoading && <LoadingComponent className="fixed z-10 top-0 left-0 bg-slate-100" />} 
      <TableManage url="/products" isShowFooter />
    </div>
  );
};

export default Dashboard;
