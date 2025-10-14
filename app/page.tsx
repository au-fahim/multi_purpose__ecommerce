// app/page.tsx
import { products } from "./lib/data";
import ProductCard from "./components/ProductCard";
import CategoryList from "./components/CategoryList";
import ShopLayout from "./components/ShopLayout";

export default function Home() {
  const featuredProducts = products.slice(0, 4); // Display first 4 products as featured

  return (
    <ShopLayout>
      <div>
        {/* Hero Section */}
        <div className="text-center py-16 bg-gray-50 rounded-lg mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Discover Your Style
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            High-quality bags, shoes, and jewelry to complete your look.
          </p>
        </div>

        <CategoryList />

        {/* Featured Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
