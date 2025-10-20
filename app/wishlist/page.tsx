'use client';

import useWishlist from '@/app/hooks/useWishlist';
import { products } from '@/app/lib/data';
import ProductCard from '@/app/components/ProductCard';

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  const likedProducts = products.filter(product => wishlist.includes(product.id));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {likedProducts.length === 0 ? (
        <p>You haven't liked any products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {likedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
