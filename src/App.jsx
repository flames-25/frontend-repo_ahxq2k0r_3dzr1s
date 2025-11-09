import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import PaymentInfo from './components/PaymentInfo';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cart.length} />
      <Hero onShopNow={scrollToProducts} />
      <div id="products">
        <ProductGrid onAddToCart={handleAddToCart} />
      </div>
      <PaymentInfo />
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Ethniq • Secure payments via Razorpay, UPI, Cards
      </footer>
    </div>
  );
}

export default App;
