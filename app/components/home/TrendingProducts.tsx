// app/components/home/TrendingProducts.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { products } from "@/app/lib/data";
import ProductCard from "../ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TrendingProducts = () => {
  const trendingProducts = products.filter(p => p.rating && p.rating >= 4.7);

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Trending</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.5}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {trendingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingProducts;
