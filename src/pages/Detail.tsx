import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetQuery } from "../hooks/useGetQuery.ts";

const DetailPage = () => {
  const { id } = useParams();
  const dataDetail = useGetQuery("/comments/2");
  console.log("dataDetail", dataDetail);
  return (
    <div>
      <img
        width={730}
        height={400}
        src="https://preview.colorlib.com/theme/elen/images/image_1.jpg.webp"
        alt="#"
      />
      <Link to="#" className="text-[12px] text-[#f05d23]">
        TECHNOLOGY
      </Link>
      <div className="text-[28px] mb-[24px]">
        The Newest Technology On This Year 2019 The {id}
      </div>
      <div className="text-[#999999]">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </div>
    </div>
  );
};

export default DetailPage;
