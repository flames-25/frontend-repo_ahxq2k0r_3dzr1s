import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'kurti-1',
    title: 'Pastel Embroidered Kurti',
    price: 1299,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b72?q=80&w=1200&auto=format&fit=crop',
    tag: 'Kurti',
  },
  {
    id: 'lehenga-1',
    title: 'Festive Silk Lehenga',
    price: 5499,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1621122675249-2b1c1ff717a9?q=80&w=1200&auto=format&fit=crop',
    tag: 'Lehenga',
  },
  {
    id: 'coord-1',
    title: 'Cotton Co-ord Set',
    price: 1699,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1592878904946-b3cd0d2d82cb?q=80&w=1200&auto=format&fit=crop',
    tag: 'Girls Co-ord',
  },
  {
    id: 'kurti-2',
    title: 'A-line Printed Kurti',
    price: 1499,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1200&auto=format&fit=crop',
    tag: 'Kurti',
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-xl">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2 py-1 text-xs text-slate-700 backdrop-blur">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-900">{product.title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold tracking-tight">₹{product.price.toLocaleString()}</p>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm text-slate-600">{product.rating}</span>
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Handpicked for you</h2>
          <p className="mt-1 text-slate-600">Explore fresh arrivals across kurtis, lehengas and co-ords.</p>
        </div>
        <nav className="hidden gap-2 sm:flex">
          {['All', 'Kurtis', 'Lehengas', 'Girls Co-ords'].map((f) => (
            <button key={f} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
              {f}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
