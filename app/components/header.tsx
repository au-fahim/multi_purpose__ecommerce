// app/components/header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Heart, User } from "lucide-react";
import useCart from "@/app/hooks/useCart";
import useAuth from "@/app/hooks/useAuth";
import useWishlist from "@/app/hooks/useWishlist";
import SearchBar from "./searchbar";
import { useCartStore } from "@/app/store/cartStore";
import { useWishlistStore } from "@/app/store/wishlistStore";

const Header = () => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartHasHydrated = useCartStore.persist.hasHydrated();
  const wishlistHasHydrated = useWishlistStore.persist.hasHydrated();

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
                href="/wishlist"
                className="text-gray-500 hover:text-gray-700 relative"
              >
                <Heart className="h-6 w-6" />
                {wishlistHasHydrated && wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                className="text-gray-500 hover:text-gray-700 relative"
              >
                <ShoppingBag className="h-6 w-6" />
                {cartHasHydrated && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
                  >
                    <span>Hello, {user?.name?.split(' ')[0]}</span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Login
                </Link>
              )}
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
              href="/wishlist"
              className="text-gray-500 hover:text-gray-700 relative"
            >
              <Heart className="h-6 w-6" />
              {wishlistHasHydrated && wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="text-gray-500 hover:text-gray-700 relative"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartHasHydrated && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
                >
                  <span>Hello, {user?.name?.split(' ')[0]}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="text-gray-500 hover:text-gray-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
