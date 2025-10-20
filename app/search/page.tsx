"use client";

import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/app/lib/data';
import ProductCard from '@/app/components/ProductCard';
import ShopLayout from '@/app/components/ShopLayout';
import CategoryMenu from '@/app/components/home/CategoryMenu';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.shortDescription?.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ShopLayout sidebar={<CategoryMenu />}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for "{query}"
        </h1>
        {filteredProducts.length === 0 ? (
          <p>No products found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </ShopLayout>
  );
};

export default SearchPage;
