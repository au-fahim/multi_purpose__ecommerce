// app/components/home/CategoryMenu.tsx
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/lib/data";

const CategoryMenu = () => {
  const mainCategories = categories.filter(category => !category.parentId);

  return (
    <div className="fixed top-20 self-start h-screen">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
      <div className="max-h-[80vh] overflow-y-auto pr-4">
        <ul className="space-y-2">
          {mainCategories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/shop/${category.slug}`}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
              >
                <Image
                  src={category.image || "/images/placeholder.svg"}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover rounded-md mr-3"
                />
                <span className="font-medium text-gray-700">
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
