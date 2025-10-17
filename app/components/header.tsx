// app/components/header.tsx
"use client";

import Link from "next/link";
import { ShoppingBag, Heart, User } from "lucide-react";
import useCart from "@/app/hooks/useCart";
import useAuth from "@/app/hooks/useAuth";
import SearchBar from "./searchbar";

const Header = () => {
  const { cartCount } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                Store
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 relative"
              >
                <Heart className="h-6 w-6" />
              </Link>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 relative"
              >
                <ShoppingBag className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 relative"
              >
                <User className="h-6 w-6" />
                {isAuthenticated && (
                  <span className="absolute -top-1 -right-1 bg-green-500 rounded-full h-3 w-3" />
                )}
              </Link>
            </div>
          </div>
          <div className="py-2">
            <SearchBar />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Store
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-xl mx-4">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 relative"
            >
              <Heart className="h-6 w-6" />
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 relative"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 relative"
            >
              <User className="h-6 w-6" />
              {isAuthenticated && (
                <span className="absolute -top-1 -right-1 bg-green-500 rounded-full h-3 w-3" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
