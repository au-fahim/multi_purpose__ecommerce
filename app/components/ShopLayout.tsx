// app/components/ShopLayout.tsx
import React from 'react';

const ShopLayout = ({ sidebar, children }: { sidebar?: React.ReactNode, children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-x-8 gap-y-10">
          {/* Filters */}
          {sidebar && (
            <div className="hidden lg:block sticky top-20 lg:col-span-2">
              {sidebar}
            </div>
          )}

          {/* Content */}
          <div className={sidebar ? "lg:col-span-6" : "lg:col-span-8"}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;