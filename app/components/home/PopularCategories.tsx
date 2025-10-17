// app/components/home/PopularCategories.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/lib/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const PopularCategories = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Categories</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <Link
              href={`/shop/${category.slug}`}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition-colors">
                <Image
                  src={category.image || "/images/placeholder.svg"}
                  alt={category.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-2 font-medium text-gray-700 group-hover:text-red-500">{category.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCategories;
