// app/components/SubCategoryList.tsx
import Link from "next/link";
import { Category, categories, getCategoriesByParentId } from "@/app/lib/data";

interface SubCategoryListProps {
  parentCategorySlug: string;
}

const SubCategoryList = ({ parentCategorySlug }: SubCategoryListProps) => {
  const parentCategory = categories.find(c => c.slug === parentCategorySlug);
  if (!parentCategory) return null;

  const subCategories = getCategoriesByParentId(parentCategory.id);

  if (subCategories.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex space-x-4">
        {subCategories.map((subCategory) => (
          <Link
            key={subCategory.id}
            href={`/shop/${subCategory.slug}`}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
          >
            {subCategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryList;
