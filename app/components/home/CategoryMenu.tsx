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
import { ChevronRight, ChevronDown } from "lucide-react";

const CategoryMenu = () => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const parentCategories = categories.filter((category) => !category.parentId);

  const handleToggleSubMenu = (categoryId: string) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
  };

  const renderSubCategories = (subCategories: Category[]) => {
    if (subCategories.length === 0) return null;
    return (
      <ul className="ml-4 mt-1 space-y-1">
        {subCategories.map((subCategory) => (
          <li key={subCategory.id}>
            <Link
              href={`/shop/${subCategory.slug}`}
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              {subCategory.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className="relative w-full bg-gray-50 p-4 rounded-lg"
    >
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-1">
        {parentCategories.map((category) => {
          const subCategories = getCategoriesByParentId(category.id);
          const isOpen = openCategoryId === category.id;

          return (
            <li
              key={category.id}
              className="relative"
            >
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-200">
                <Link
                  href={`/shop/${category.slug}`}
                  className="flex items-center flex-grow"
                >
                  <Image
                    src={category.image || "/images/placeholder.svg"}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-md mr-3"
                  />
                  <span className="font-medium text-gray-700">{category.name}</span>
                </Link>
                {subCategories.length > 0 && (
                  <button
                    onClick={() => handleToggleSubMenu(category.id)}
                    className="p-1 rounded-full hover:bg-gray-300"
                  >
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                )}
              </div>
              {isOpen && renderSubCategories(subCategories)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryMenu;
