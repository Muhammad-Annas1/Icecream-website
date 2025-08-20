"use client";

import { categories, products } from "../data/products";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MenuPage() {
  const [active, setActive] = useState("icecream");
  const list = products.filter(p => p.category === active);

  // Parent container variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  // Child card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Menu</h1>

      <div className="flex gap-2 flex-wrap">
        {categories.map(c => (
          <button
            key={c.key}
            className={`btn ${active === c.key ? "bg-pink-500 text-white" : "btn-outline"}`}
            onClick={() => setActive(c.key)}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Product Grid with staggered animation */}
      <motion.div
        className="mt-6 grid-cards"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {list.map(p => (
          <motion.div key={p.id} variants={cardVariants}>
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
