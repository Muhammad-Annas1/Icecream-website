"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../app/state/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-amber-50/80 backdrop-blur border-b border-amber-100">
      <div className="container-max py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍨</span>
          <span className="font-extrabold text-xl tracking-tight">Chill & Swirl</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="nav-link" href="/menu">Menu</Link>
          <Link className="nav-link" href="/about">About Us</Link>
          <Link className="nav-link" href="/cart" aria-label="Cart">
            <div className="relative inline-flex items-center">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 badge">{totalItems}</span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}