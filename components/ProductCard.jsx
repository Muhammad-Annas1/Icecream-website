"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../app/state/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [showChoice, setShowChoice] = useState(false);

  const handleAdd = (choice) => {
    addToCart({ ...product, choice: choice || null });
    setShowChoice(false);
  };

  const isIceCream = product.category === "icecream";
  const isCoffeeOrShake =
    product.category === "coffee" || product.category === "shakes"; 

  return (
    <motion.div
      className="card flex flex-col relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="aspect-square bg-gradient-to-br from-pink-100 via-amber-50 to-white rounded-xl flex items-center justify-center overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-6xl">{product.emoji}</span>
        )}
      </div>

      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-slate-600">{product.description}</p>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">PKR {product.price.toLocaleString()}</span>
        {(isIceCream || isCoffeeOrShake) ? (
          <button className="btn-primary" onClick={() => setShowChoice(true)}>
            Add to Cart
          </button>
        ) : (
          <button className="btn-primary" onClick={() => handleAdd()}>
            Add to Cart
          </button>
        )}
      </div>

      {/* Choice Modal with AnimatePresence */}
      <AnimatePresence>
        {(isIceCream || isCoffeeOrShake) && showChoice && (
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-5 rounded-xl shadow-lg space-y-4 w-64 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h4 className="font-semibold text-lg">Choose an option</h4>

              {/* Ice Cream Options */}
              {isIceCream && (
                <div className="flex gap-3 justify-center">
                  <button
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                    onClick={() => handleAdd("Cone")}
                  >
                    🍦 Cone
                  </button>
                  <button
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                    onClick={() => handleAdd("Cup")}
                  >
                    🥤 Cup
                  </button>
                </div>
              )}

              {/* Coffee / Shakes Options */}
              {isCoffeeOrShake && (
                <div className="flex gap-3 justify-center flex-wrap">
                  <button
                    className="px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                    onClick={() => handleAdd("Small")}
                  >
                    Small
                  </button>
                  <button
                    className="px-3 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                    onClick={() => handleAdd("Medium")}
                  >
                    Medium
                  </button>
                  <button
                    className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    onClick={() => handleAdd("Large")}
                  >
                    Large
                  </button>
                </div>
              )}

              <button
                className="text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setShowChoice(false)}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
