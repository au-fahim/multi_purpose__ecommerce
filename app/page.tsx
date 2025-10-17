// app/page.tsx
import BannerCarousel from "./components/home/BannerCarousel";
import ShopLayout from "./components/home/ShopLayout";
import CategoryMenu from "./components/home/CategoryMenu";
import MostSoldItems from "./components/home/MostSoldItems";
import PopularCategories from "./components/home/PopularCategories";
import TrendingProducts from "./components/home/TrendingProducts";
import Footer from "./components/footer";

export default function Home() {
  return (
    <ShopLayout>
      <div className="lg:col-span-1">
        <CategoryMenu />
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
