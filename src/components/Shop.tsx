import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Product } from '../lib/database.types';
import ProductCard from './ProductCard';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_available', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.size === filter);

  return (
    <section id="shop" className="py-20 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-brown text-center mb-4">
          Our Collection
        </h2>
        <p className="text-center text-gray-600 font-noto mb-12 max-w-2xl mx-auto">
          Each piece is crafted with care, bringing together the fluidity of watercolour
          and the precision of fine detail work.
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'all'
                ? 'bg-sage text-cream'
                : 'bg-cream text-gray-700 hover:bg-sage/20'
            }`}
          >
            All Sizes
          </button>
          <button
            onClick={() => setFilter('A5')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'A5'
                ? 'bg-sage text-cream'
                : 'bg-cream text-gray-700 hover:bg-sage/20'
            }`}
          >
            Small (A5)
          </button>
          <button
            onClick={() => setFilter('A4')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'A4'
                ? 'bg-sage text-cream'
                : 'bg-cream text-gray-700 hover:bg-sage/20'
            }`}
          >
            Medium (A4)
          </button>
          <button
            onClick={() => setFilter('A3')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'A3'
                ? 'bg-sage text-cream'
                : 'bg-cream text-gray-700 hover:bg-sage/20'
            }`}
          >
            Large (A3)
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-sage"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
