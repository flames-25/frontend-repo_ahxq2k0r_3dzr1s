import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShoppingCart } from 'lucide-react';

const Hero = ({ onShopNow }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for text readability - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-white/0" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700 backdrop-blur">
            New season • Festive Collections
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-6xl">
            Elevate Your Ethnic Style
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Curated kurtis, elegant lehengas, and comfy girls co-ords — crafted for modern wardrobes
            with a timeless touch. Secure checkout with UPI, cards, and Razorpay.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onShopNow}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:translate-y-[-1px] hover:bg-slate-800"
            >
              <ShoppingCart className="h-5 w-5" /> Start shopping
            </button>
            <span className="text-sm text-slate-500">Free shipping on orders over ₹999</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
