// app/components/home/ShopLayout.tsx
import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">{children}</div>
    </div>
  );
};

export default ShopLayout;
