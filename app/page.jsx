"use client";

import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "./data/products";
import { motion } from "framer-motion";

export default function HomePage() {
  const featured = products.filter(p => p.category === "icecream").slice(0, 4);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="mt-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-3xl bg-gradient-to-r from-pink-100 via-amber-100 to-white p-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600">
            Feel the Chill. Taste the Swirl.
          </h1>
          <p className="mt-2 text-slate-600">
            Fresh scoops, cakes, shakes, coffee & snacks all in one place.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link className="btn-primary" href="/menu">Explore Menu</Link>
            <Link className="btn-outline" href="/about">About Us</Link>
          </div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        className="mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold">Popular Ice Creams</h2>
          <Link href="/menu" className="nav-link">See all</Link>
        </div>

        <motion.div className="grid-cards">
          {featured.map(p => (
            <motion.div key={p.id} variants={cardVariants}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
