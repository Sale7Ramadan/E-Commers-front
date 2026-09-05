import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import RatingStars from '../components/RatingStars'
import { products } from '../data/products'
import { useCart } from '../context/useCart'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((item) => item.id === id)
  const currency = (value) => `${new Intl.NumberFormat('ar-SA').format(value)} ر.س`

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
        <h1 className="text-3xl font-semibold text-white">المنتج غير متوفر</h1>
        <Link to="/products" className="mt-6 inline-block text-blue-300 hover:text-blue-200">
          العودة إلى المنتجات
        </Link>
      </main>
    )
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200">
        <ArrowRight size={16} /> العودة إلى المنتجات
      </Link>

      <section className="mt-6 grid gap-8 lg:grid-cols-2">
        <img src={product.image} alt={product.name} className="h-[420px] w-full rounded-3xl object-cover" />
        <div>
          <p className="text-xs tracking-[0.12em] text-blue-300">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{product.name}</h1>
          <p className="mt-5 text-slate-300">{product.description}</p>
          <div className="mt-4">
            <RatingStars rating={product.rating} />
          </div>
          <p className="mt-5 text-3xl font-semibold text-white">{currency(product.price)}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-6 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400"
          >
            أضف إلى السلة
          </button>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-white">المواصفات</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {product.specifications.map((spec) => (
                  <li key={spec}>• {spec}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">المزايا</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {product.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-semibold text-white">منتجات ذات صلة</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </motion.main>
  )
}
