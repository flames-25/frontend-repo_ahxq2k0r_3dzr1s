import React from 'react';
import { ShoppingBag, Search, User } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
            <ShoppingBag className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Ethniq</span>
        </div>
        <div className="hidden max-w-md flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 sm:flex">
          <Search className="h-4 w-4" />
          <input className="w-full bg-transparent outline-none" placeholder="Search kurtis, lehengas, co-ords..." />
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
            <User className="mr-2 inline-block h-4 w-4" /> Sign in
          </button>
          <button className="relative rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
            Cart
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-slate-900 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
