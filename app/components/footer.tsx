// app/components/footer.tsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">LAOBAAN</h2>
            <p className="text-gray-400">House 50, Road 01, Sector 05, Uttara, Dhaka, Bangladesh</p>
            <p className="text-gray-400 mt-2">info.laobaan@gmail.com</p>
            <p className="text-gray-400 mt-2">+8801811509999</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">My Account</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Track Order</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Returns & Exchanges</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Business</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Become a Supplier</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-white">Affiliate Program</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} LAOBAAN. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;