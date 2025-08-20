"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-6 prose prose-pink"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-4xl font-bold mb-4" variants={itemVariants}>
        About Us
      </motion.h1>

      <motion.p className="mb-4 text-lg" variants={itemVariants}>
        At <strong>Chill & Swirl</strong>, we serve happiness in scoops! From
        classic kulfi to decadent chocolate fudge, our menu is crafted with love.
      </motion.p>

      <motion.p className="mb-4 text-lg" variants={itemVariants}>
        Our mission is simple: to bring smiles, joy, and unforgettable taste
        experiences to every customer. We carefully select fresh, seasonal
        ingredients and craft every scoop, shake, and dessert with care and
        creativity. Whether you're visiting for a quick treat, a family outing,
        or a special celebration, <strong>Chill & Swirl</strong> is your go-to
        spot for sweet delights.
      </motion.p>

      <motion.ul className="list-disc pl-6 space-y-2" variants={itemVariants}>
        <motion.li variants={itemVariants}>Fresh ingredients</motion.li>
        <motion.li variants={itemVariants}>Seasonal specials</motion.li>
        <motion.li variants={itemVariants}>Custom cakes and party orders</motion.li>
      </motion.ul>
    </motion.div>
  );
}
