// app/components/home/BannerCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerImages = [
  "/images/bag1.jpg",
  "/images/shoe1.jpg",
  "/images/jewelry1.jpg",
];

const BannerCarousel = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {bannerImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-64 md:h-96">
              <Image
                src={src}
                alt={`Banner image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
