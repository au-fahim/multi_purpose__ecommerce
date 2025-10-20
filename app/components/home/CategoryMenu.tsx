// app/components/home/CategoryMenu.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  categories,
  getCategoriesByParentId,
  Category,
} from "@/app/lib/data";
import { ChevronRight } from "lucide-react";

const CategoryMenu = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const parentCategories = categories.filter((category) => !category.parentId);

  const handleMouseEnter = (categoryId: string) => {
    setActiveCategoryId(categoryId);
  };

  const handleMouseLeave = () => {
    setActiveCategoryId(null);
  };

  const renderSubCategories = (subCategories: Category[]) => {
    if (subCategories.length === 0) return null;
    return (
      <div className="absolute left-full top-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
        <div className="py-1">
          {subCategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              href={`/shop/${subCategory.slug}`}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
            >
              {subCategory.name}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative w-full bg-gray-50 p-4 rounded-lg"
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-1">
        {parentCategories.map((category) => {
          const subCategories = getCategoriesByParentId(category.id);
          return (
            <li
              key={category.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(category.id)}
            >
              <Link
                href={`/shop/${category.slug}`}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200"
              >
                <div className="flex items-center">
                  <Image
                    src={category.image || "/images/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-md mr-3"
                  />
                  <span className="font-medium text-gray-700">{category.name}</span>
                </div>
                {subCategories.length > 0 && <ChevronRight size={16} />}
              </Link>
              {activeCategoryId === category.id &&
                renderSubCategories(subCategories)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryMenu;
