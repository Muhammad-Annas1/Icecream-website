"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) setItems(JSON.parse(raw));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
        return copy;
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const decrementItem = (id) => setItems((prev) => prev.map(i => i.id===id ? {...i, quantity: Math.max(1, i.quantity-1)}: i));
  const incrementItem = (id) => setItems((prev) => prev.map(i => i.id===id ? {...i, quantity: i.quantity+1}: i));
  const clearCart = () => setItems([]);

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);
  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  const value = { items, addToCart, removeFromCart, decrementItem, incrementItem, total, totalItems, clearCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);