import React, { useEffect } from "react";
import Swiper from "swiper";

const Gallery = () => {
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      direction: "horizontal",
      slidesPerView: "auto",
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div>
      <div className="swiper overflow-hidden w-[800px]">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-red-600 h-[400px] text-center flex items-center">
              Slide 2
            </div>
            <div className="swiper-slide bg-red-600 h-[400px] text-center flex items-center">
              Slide 3
            </div>
            <div className="swiper-slide bg-red-600 h-[400px] text-center flex items-center">
              Slide 1
            </div>
            <div className="swiper-slide bg-red-600 h-[400px] text-center flex items-center">
              Slide 1
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
        <div className="gallery-item relative w-[400px] h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://preview.colorlib.com/theme/elen/images/image_3.jpg.webp"
            alt="Gallery"
          />
          <div className="absolute top-1/2 left-1/3">Gallery-name</div>
          <div className="absolute top-1/3 left-1/2">Gallery-desc</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
