// app/components/home/MostSoldItems.tsx
import { products } from "@/app/lib/data";
import ProductCard from "../ProductCard";

const MostSoldItems = () => {
  const mostSoldProducts = [...products].sort((a, b) => (b.unitsSold || 0) - (a.unitsSold || 0)).slice(0, 8);

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Sold Items</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {mostSoldProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostSoldItems;
