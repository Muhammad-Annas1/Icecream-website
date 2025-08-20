"use client";

import { useCart } from "../app/state/CartContext";

export default function CartItemRow({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-3">
      <div>
        <h3 className="font-semibold">
          {item.name}{" "}
          {item.choice && (
            <span className="text-sm text-gray-500">
              ({item.choice})
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold">PKR {item.price}</span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
