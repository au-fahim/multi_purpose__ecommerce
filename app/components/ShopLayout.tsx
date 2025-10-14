// app/components/ShopLayout.tsx
import CategoryMenu from "./CategoryMenu";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <aside className="w-1/6">
        <CategoryMenu />
      </aside>
      <main className="w-5/6 p-8">{children}</main>
    </div>
  );
};

export default ShopLayout;
