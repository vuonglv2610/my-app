import React from "react";
import SwiperComponent from "./Swiper.tsx";
import GalleryItem from "./GalleryItem.jsx";

const Gallery = () => {
  return (
    <>
      <SwiperComponent />
      <div className="flex flex-wrap">
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />
       <GalleryItem />
      </div>
    </>
  );
};

export default Gallery;
