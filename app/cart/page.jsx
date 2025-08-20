"use client";

import Link from "next/link";
import CartItemRow from "../../components/CartItemRow";
import { useCart } from "../state/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { items, total, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCheckout(false);
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {orderPlaced ? (
        <div className="card text-center p-6">
          <h2 className="text-xl font-semibold text-green-600">
            ✅ Your order has been placed!
          </h2>
          <p className="mt-2 text-slate-600">Thank you for shopping with us 🎉</p>
          <Link className="btn-primary mt-4" href="/menu">
            Continue Shopping
          </Link>
        </div>
      ) : items.length === 0 ? (
        <div className="card text-center">
          <p>Your cart is empty.</p>
          <Link className="btn-primary mt-3" href="/menu">
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="card">
            {items.map((i) => (
              <CartItemRow key={i.id} item={i} />
            ))}
            <div className="mt-4 flex items-center justify-between">
              <button className="btn-outline" onClick={clearCart}>
                Clear Cart
              </button>
              <div className="text-right">
                <div className="text-sm text-slate-600">Subtotal</div>
                <div className="text-2xl font-extrabold">
                  PKR {total.toLocaleString()}
                </div>
                <button
                  className="btn-primary mt-3"
                  onClick={() => setShowCheckout(true)}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>

          {/* Checkout Form Modal */}
          <AnimatePresence>
            {showCheckout && (
              <motion.div
                className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.form
                  className="bg-white p-6 rounded-xl shadow-lg w-96 space-y-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-xl font-bold text-center">Checkout</h2>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                  <textarea
                    name="address"
                    placeholder="Delivery Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input h-20 resize-none"
                    required
                  />

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Payment Method:</label>
                    <select
                      name="payment"
                      value={formData.payment}
                      onChange={handleChange}
                      className="input"
                    >
                      <option value="cod">Cash on Delivery</option>
                      <option value="visa">Visa</option>
                      <option value="easypaisa">EasyPaisa</option>
                    </select>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => setShowCheckout(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary">
                      Place Order
                    </button>
                  </div>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
