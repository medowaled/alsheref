import { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PRODUCTS } from '../data';
import { ProductCard } from './ProductCard';
import { Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const activeCategory = categoryParam;

  const setActiveCategory = (category: string) => {
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.categoryId === activeCategory);
  }, [activeCategory]);

  // Smooth scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  return (
    <div className="bg-industrial-50 min-h-screen">
      {/* Dark Hero Header */}
      <div className="bg-industrial-950 relative overflow-hidden pt-16 pb-14">
        <div className="absolute inset-0 bg-mesh-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-teal/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
          >
            تشكيلتنا الكاملة
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight"
          >
            منتجاتنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-industrial-300 max-w-2xl mx-auto leading-relaxed"
          >
            تصفح تشكيلتنا الواسعة من خزانات البولي إيثيلين وحواجز الأمان بأعلى المواصفات القياسية لتلبي كافة احتياجاتك.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 md:hidden text-industrial-600 font-bold">
            <Filter size={20} />
            <span>تصفية حسب الفئة:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-full border border-industrial-200/60 max-w-fit mx-auto shadow-sm">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all relative border-none outline-none cursor-pointer ${
                activeCategory === 'all'
                  ? 'text-white'
                  : 'text-industrial-600 hover:text-industrial-900'
              }`}
            >
              {activeCategory === 'all' && (
                <motion.span
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-accent-teal rounded-full shadow-[0_4px_15px_rgba(14,165,233,0.3)] z-0"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">الكل</span>
            </button>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all relative border-none outline-none cursor-pointer ${
                  activeCategory === category.id
                    ? 'text-white'
                    : 'text-industrial-600 hover:text-industrial-900'
                }`}
              >
                {activeCategory === category.id && (
                  <motion.span
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-accent-teal rounded-full shadow-[0_4px_15px_rgba(14,165,233,0.3)] z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-industrial-500 font-semibold">لا توجد منتجات في هذا القسم حالياً.</p>
          </div>
        )}

      </div>
    </div>
  );
}
