export const metadata = {
  title: "Chill & Swirl — Ice Cream Shop",
  description: "A delicious collection of ice cream flavors and more!",
};

import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "./state/CartContext";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tab icon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
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
