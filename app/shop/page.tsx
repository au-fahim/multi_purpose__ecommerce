// app/shop/page.tsx
import { products } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import ShopLayout from "@/app/components/ShopLayout";
import FilterSidebar from "@/app/components/FilterSidebar";

export default function ShopPage() {
  return (
    <ShopLayout sidebar={<FilterSidebar />}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          All Products
        </h2>
        {/* Add sorting and view mode options here */}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
      {/* Add pagination here */}
    </ShopLayout>
  );
}