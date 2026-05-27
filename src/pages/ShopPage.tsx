import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Product } from '../lib/database.types';
import ProductCard from '../components/ProductCard';
import { AlertCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const sizeFilters = ['all', 'A5', 'A4', 'A3'] as const;
type SizeFilter = (typeof sizeFilters)[number];

const categoryFilters = ['all', 'Watercolour', 'Fineliner', 'Watercolour & Fineliner'] as const;
type CategoryFilter = (typeof categoryFilters)[number];

interface ProductWithCategory extends Product {
  categories: { name: string } | null;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ShopPage() {
  const [products, setProducts] = useState<ProductWithCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*, categories(name)')
        .eq('is_available', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to load products';
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = products.filter((p) => {
    if (sizeFilter !== 'all' && p.size !== sizeFilter) return false;
    if (categoryFilter !== 'all' && p.categories?.name !== categoryFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.categories?.name && p.categories.name.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <AnimatedSection className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-serif text-brown dark:text-sage text-center mb-4"
        >
          Our Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 font-noto mb-12 max-w-2xl mx-auto"
        >
          <span className="font-script text-sage text-2xl">Each piece is crafted with care, bringing together the fluidity of watercolour and the precision of fine detail work.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
        >
          <div className="flex justify-center gap-4 flex-wrap">
            {sizeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSizeFilter(filter)}
                aria-pressed={sizeFilter === filter}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  sizeFilter === filter
                    ? 'bg-sage text-cream'
                    : 'bg-cream dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-sage/20 dark:hover:bg-sage/30'
                }`}
              >
                {filter === 'all' ? 'All Sizes' : filter === 'A5' ? 'Small (A5)' : filter === 'A4' ? 'Medium (A4)' : 'Large (A3)'}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-cream dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-sage/30 focus:outline-none focus:ring-2 focus:ring-sage w-full md:w-64"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setCategoryFilter(filter)}
              aria-pressed={categoryFilter === filter}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                categoryFilter === filter
                  ? 'bg-brown text-cream'
                  : 'bg-cream dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-brown/20 dark:hover:bg-brown/30'
              }`}
            >
              {filter === 'all' ? 'All Categories' : filter}
            </button>
          ))}
        </motion.div>

        {loading && (
          <div className="text-center py-12" role="status" aria-label="Loading products">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="inline-block rounded-full h-12 w-12 border-b-2 border-sage"
            ></motion.div>
            <p className="mt-4 font-noto text-gray-600 dark:text-gray-400">Loading products...</p>
          </div>
        )}

        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <AlertCircle size={48} className="mx-auto text-red-500 mb-4" />
            <p className="font-noto text-gray-700 dark:text-gray-300 mb-4">{error}</p>
            <button
              onClick={fetchProducts}
              className="bg-sage hover:bg-brown text-cream px-6 py-2 rounded-full font-medium transition-all"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="font-noto text-gray-600 dark:text-gray-400 text-lg">
              No products match your current filters.
            </p>
            <button
              onClick={() => { setSizeFilter('all'); setCategoryFilter('all'); setSearchQuery(''); }}
              className="mt-4 bg-sage hover:bg-brown text-cream px-6 py-2 rounded-full font-medium transition-all"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
}
