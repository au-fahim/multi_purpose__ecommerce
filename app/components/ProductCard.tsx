// app/components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/lib/data"; // Import our Product type

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group"
    >
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {product.salePrice ? (
          <>
            <span className="text-red-500">${product.salePrice.toFixed(2)}</span>
            <span className="line-through ml-2 text-gray-500">${product.price.toFixed(2)}</span>
          </>
        ) : (
          `$${product.price.toFixed(2)}`
        )}
      </p>
    </Link>
  );
};

export default ProductCard;
