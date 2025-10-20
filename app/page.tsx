"use client";
import { useState } from "react";
import BannerCarousel from "./components/home/BannerCarousel";
import ShopLayout from "./components/home/ShopLayout";
import CategoryMenu from "./components/home/CategoryMenu";
import MostSoldItems from "./components/home/MostSoldItems";
import PopularCategories from "./components/home/PopularCategories";
import TrendingProducts from "./components/home/TrendingProducts";
import Footer from "./components/footer";

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <ShopLayout>
      <div className="lg:col-span-1">
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMenuVisible(!isMenuVisible)}
            className="w-full p-2 bg-gray-200 rounded-md"
          >
            Menu
          </button>
        </div>

        <div
          className={`${isMenuVisible ? "block" : "hidden"} lg:block sticky top-20`}
        >
          <CategoryMenu />
        </div>
      </div>
      <div className="lg:col-span-5">
        <BannerCarousel />
        <PopularCategories />
        <TrendingProducts />
        <MostSoldItems />
        <Footer />
      </div>
    </ShopLayout>
  );
}
