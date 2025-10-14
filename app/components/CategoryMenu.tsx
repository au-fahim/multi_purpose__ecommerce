// app/components/CategoryMenu.tsx
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/lib/data";

const CategoryMenu = () => {
  const parentCategories = categories.filter((category) => !category.parentId);

  return (
    <div className="w-full h-full bg-gray-50 p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {parentCategories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/shop/${category.slug}`}
              className="flex items-center p-2 rounded-lg hover:bg-gray-200"
            >
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-md object-cover mr-3"
                />
              )}
              <span>{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
