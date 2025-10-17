// app/components/FilterSidebar.tsx
import React from "react";
import { categories } from "@/app/lib/data";

const FilterSidebar = () => {
  const parentCategories = categories.filter((category) => !category.parentId);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-bold mb-4">Category</h3>
        <ul className="space-y-2">
          {parentCategories.map((category) => (
            <li key={category.id}>
              <a
                href={`/shop/${category.slug}`}
                className="text-gray-600 hover:text-gray-900"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-bold mb-4">Price</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="price-1"
              name="price[]"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="price-1" className="ml-3 text-sm text-gray-600">
              $0 - $50
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="price-2"
              name="price[]"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="price-2" className="ml-3 text-sm text-gray-600">
              $50 - $100
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="price-3"
              name="price[]"
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="price-3" className="ml-3 text-sm text-gray-600">
              $100 - $200
            </label>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-lg font-bold mb-4">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <input
                id={`rating-${rating}`}
                name="rating[]"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`rating-${rating}`}
                className="ml-3 text-sm text-gray-600"
              >
                {rating} stars & up
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
