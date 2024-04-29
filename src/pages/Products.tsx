import React from "react";
import Card from "../components/Card.tsx";

const ProductsList = () => {
  return (
    <div className="flex flex-wrap gap-[25px] mx-auto my-12 w-fit">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ProductsList;
