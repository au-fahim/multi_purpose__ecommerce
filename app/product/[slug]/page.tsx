"use client";

import { useState } from "react";
import { getProductBySlug, products, Product } from "@/app/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Heart, ShoppingCart } from "lucide-react";
import ShopLayout from "@/app/components/ShopLayout";
import CategoryMenu from "@/app/components/home/CategoryMenu";
import ProductCard from "@/app/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductTabs = ({ product }: { product: Product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab("description")}
            className={`${
              activeTab === "description"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("specification")}
            className={`${
              activeTab === "specification"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Specification
          </button>
          <button
            onClick={() => setActiveTab("warranty")}
            className={`${
              activeTab === "warranty"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Warranty
          </button>
        </nav>
      </div>
      <div className="mt-6">
        {activeTab === "description" && (
          <p className="text-gray-700">{product.description}</p>
        )}
        {activeTab === "specification" && (
          <div>
            <h3 className="font-bold">Specification</h3>
            <ul className="list-disc list-inside mt-2">
              {product.attributes &&
                Object.entries(product.attributes).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-semibold">{key}:</span> {value}
                  </li>
                ))}
            </ul>
          </div>
        )}
        {activeTab === "warranty" && (
          <div>
            <h3 className="font-bold">Warranty</h3>
            <p>Standard 1-year warranty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(
    product ? product.images[0] : ""
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );
  const recentlyViewedProducts = products.slice(0, 3);

  return (
    <ShopLayout sidebar={<CategoryMenu />}>
      {/* Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="mb-4">
            <Image
              src={selectedImage}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(image)}>
                <Image
                  src={image}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className={`w-20 h-20 object-cover rounded-lg border-2 ${
                    selectedImage === image
                      ? "border-indigo-500"
                      : "border-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          {/* Color and Size options can be added here */}
          <div className="flex items-center space-x-4 mb-4">
            <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              <Heart className="mr-2" size={20} />
              Save
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Buy Now
            </button>
          </div>
          <p className="text-sm text-gray-500">Product Code: {product.id}</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductTabs product={product} />
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Recently Viewed Products</h2>
          <div className="space-y-4">
            {recentlyViewedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.5}
          navigation
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {relatedProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ShopLayout>
  );
}