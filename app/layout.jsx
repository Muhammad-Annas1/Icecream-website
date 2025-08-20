export const metadata = {
  title: "Chill & Swirl — Ice Cream Shop",
  description: "A sweet Next.js + Tailwind demo shop with cart in PKR",
};

import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "./state/CartContext";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="container-max py-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}