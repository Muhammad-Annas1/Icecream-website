"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "./data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds intro
    return () => clearTimeout(timer);
  }, []);

  const featured = products.filter((p) => p.category === "icecream").slice(0, 4);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const heroVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* Intro Screen */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-amber-100 to-white overflow-hidden z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
            <div className="absolute w-56 h-56 bg-amber-200 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-pink-700 drop-shadow-lg tracking-wide animate-bounce">
              Chill & Swirl
            </h1>
            <p className="mt-6 text-xl text-gray-700 font-medium flex items-center gap-2">
              Loading
              <span className="flex gap-1">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:0ms]"></span>
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Landing Page Content */}
      <AnimatePresence>
        {!showIntro && (
          <motion.div
            key="landing"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: {} }}
          >
            {/* Hero Section */}
            <motion.section
              className="mt-6"
              variants={heroVariants}
              initial="hidden"
              animate="show"
            >
              <div className="rounded-3xl bg-gradient-to-r from-pink-100 via-amber-100 to-white p-8 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600">
                  Feel the Chill. Taste the Swirl.
                </h1>
                <p className="mt-2 text-slate-600">
                  Fresh scoops, cakes, shakes, coffee & snacks all in one place.
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  <Link className="btn-primary" href="/menu">
                    Explore Menu
                  </Link>
                  <Link className="btn-outline" href="/about">
                    About Us
                  </Link>
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
                <Link href="/menu" className="nav-link">
                  See all
                </Link>
              </div>

              <motion.div className="grid-cards">
                {featured.map((p) => (
                  <motion.div key={p.id} variants={cardVariants}>
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
