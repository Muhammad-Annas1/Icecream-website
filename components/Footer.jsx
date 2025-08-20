"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-amber-200 bg-gradient-to-r from-pink-50 via-amber-50 to-pink-50 py-10 animate-gradient-x">
      <div className="max-w-7xl mx-auto px-6 text-slate-700 text-sm">

        {/* Brand + Links + Contact + Map */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-pink-600">🍦 Chill & Swirl</h2>
            <p className="mt-2 text-slate-600">
              Indulge in <span className="text-amber-500 font-semibold">happiness</span> with every scoop, sip, and bite.  
              Discover our <span className="text-pink-500 font-semibold">delightful range</span> of ice creams, cakes, shakes, coffee, and snacks.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-700 transition transform hover:scale-125 hover:rotate-12" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition transform hover:scale-125 hover:rotate-12" />
              </Link>
              <Link href="https://wa.me/923001234567" target="_blank" aria-label="WhatsApp">
                <FaWhatsapp className="w-6 h-6 text-green-500 hover:text-green-700 transition transform hover:scale-125 hover:rotate-12" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-pink-600 transition hover:underline">
                  About Us ✨
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-pink-600 transition hover:underline">
                  Explore Menu 🍧
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-pink-600 transition hover:underline">
                  Your Cart 🛒
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Get in Touch 📬</h3>
            <p className="mb-1">📍 Tariq Road, Karachi, Pakistan</p>
            <p className="mb-1">📞 +92 300 1234567</p>
            <p>✉ hello@chillandswirl.com</p>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Visit Us 🗺️</h3>
            <div className="w-full h-40 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.321038954113!2d67.06541361500285!3d24.860734284054994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bbd6efc1b81%3A0xb37c22e5f97d2e0!2sTariq%20Road%2C%20Karachi!5e0!3m2!1sen!2s!4v1705148999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-amber-200 pt-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Chill & Swirl — Serving smiles 🍦 with every scoop
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
  );
}
