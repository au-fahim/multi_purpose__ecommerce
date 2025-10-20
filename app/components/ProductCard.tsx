// app/components/ProductCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/lib/data";
import { Eye, ShoppingCart, Heart } from "lucide-react";
import useCart from "@/app/hooks/useCart";
import useWishlist from "@/app/hooks/useWishlist";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to cart clicked for product:", product.title);
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Toggle wishlist clicked for product:", product.title);
    toggleWishlist(product.id);
  };

  const isLiked = isInWishlist(product.id);

  return (
    <div className="group relative">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={400}
            height={400}
            className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
          />
        </Link>
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={handleToggleWishlist}
            className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-200"
          >
            <Heart
              size={20}
              className={isLiked ? "fill-red-500 text-red-500" : ""}
            />
          </button>
        </div>
      </div>
      <Link href={`/product/${product.slug}`} className="block mt-4">
        <h3 className="text-sm text-gray-700">{product.title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  product.rating && i < product.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.817 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          {product.reviewsCount && (
            <p className="ml-2 text-sm text-gray-500">
              ({product.reviewsCount})
            </p>
          )}
        </div>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.salePrice ? (
            <>
              <span className="text-red-500">
                ${product.salePrice.toFixed(2)}
              </span>
              <span className="line-through ml-2 text-gray-500">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            `$${product.price.toFixed(2)}`
          )}
        </p>
        {product.unitsSold && (
          <p className="mt-1 text-sm text-gray-500">{product.unitsSold} sold</p>
        )}
      </Link>
      <div className="mt-4">
        <button
          onClick={handleAddToCart}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
