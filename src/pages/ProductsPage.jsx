import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import SectionTitle from '../components/SectionTitle'
import { products } from '../data/products'

export default function ProductsPage() {
  const [category, setCategory] = useState('الكل')
  const [loading, setLoading] = useState(true)

  const categories = useMemo(() => ['الكل', ...new Set(products.map((product) => product.category))], [])

  const filteredProducts = useMemo(
    () => (category === 'الكل' ? products : products.filter((product) => product.category === category)),
    [category],
  )

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <SectionTitle
        eyebrow="كتالوج المنتجات"
        title="المنتجات"
        subtitle="استكشف مجموعة فاخرة من الأجهزة واللابتوبات والمكوّنات والملحقات المتقدمة."
      />
      <div className="mt-7 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              item === category
                ? 'bg-blue-500 text-white'
                : 'border border-white/20 bg-white/5 text-slate-200 hover:border-blue-400 hover:text-blue-300'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500" />
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </motion.main>
  )
}
