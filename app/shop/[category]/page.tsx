// app/shop/[category]/page.tsx
import { getProductsByCategory, categories } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import { notFound } from "next/navigation";
import ShopLayout from "@/app/components/ShopLayout";
import SubCategoryList from "@/app/components/SubCategoryList";
import CategoryMenu from "@/app/components/home/CategoryMenu";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const products = getProductsByCategory(category);
  const currentCategory = categories.find(c => c.slug === category);

  if (!currentCategory) {
    notFound();
  }

  return (
    <ShopLayout sidebar={<CategoryMenu />}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 capitalize">
          SHOWING RESULTS FOR "{currentCategory?.name || category}"
        </h2>
        {/* Add sorting and view mode options here */}
      </div>

      <SubCategoryList parentCategorySlug={category} />

      {products.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
      {/* Add pagination here */}
    </ShopLayout>
  );
}