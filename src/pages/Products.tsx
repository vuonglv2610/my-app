import React from "react";
import Card from "../components/Card.tsx";

const ProductsList = () => {
  return (
    <div className="grid grid-cols-3 gap-[40px]">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ProductsList;
