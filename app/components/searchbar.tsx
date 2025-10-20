// app/components/searchbar.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '@/app/lib/data'; // Import products

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim()) {
        const filteredProducts = products.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.shortDescription?.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredProducts);
        setShowResults(true);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
      setShowResults(false); // Hide results after submission
    }
  };

  const handleResultClick = () => {
    setShowResults(false); // Hide results when a result is clicked
  };

  return (
    <div className="relative w-full max-w-md" ref={searchBarRef}>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && searchResults.length > 0 && setShowResults(true)}
          placeholder="Search for products..."
          className="w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full px-4 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </form>

      {showResults && searchResults.length > 0 && (
        <div className="absolute z-20 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
          {searchResults.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              onClick={handleResultClick}
              className="flex items-center p-2 hover:bg-gray-100"
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                width={40}
                height={40}
                className="w-10 h-10 object-cover rounded-md mr-3"
              />
              <span className="text-sm text-gray-800">{product.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;