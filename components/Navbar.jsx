"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../app/state/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-amber-50/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="container-max py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Chill & Swirl Logo" width={40} height={40} className="rounded-full" />
          <span className="font-extrabold text-2xl tracking-tight text-pink-600">Chill & Swirl</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/menu" className="text-gray-700 font-medium hover:text-pink-600 transition">Menu</Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-pink-600 transition">About Us</Link>
          <Link href="/reviews" className="text-gray-700 font-medium hover:text-pink-600 transition">Reviews</Link>
          <Link href="/cart" aria-label="Cart" className="relative inline-flex items-center">
            <ShoppingCart size={24} className="text-gray-700 hover:text-pink-600 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
