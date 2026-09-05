import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import RatingStars from './RatingStars'
import { useCart } from '../context/useCart'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/70 shadow-[0_18px_40px_rgba(15,23,42,0.65)] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_40%)]" />
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-4 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{product.category}</p>
        <Link to={`/products/${product.id}`} className="block text-xl font-semibold leading-tight text-white transition hover:text-blue-300">
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm text-slate-300">{product.shortDescription}</p>
        <RatingStars rating={product.rating} />
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <p className="text-2xl font-semibold text-white">${product.price}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            <ShoppingCart size={16} /> Add to cart
          </button>
        </div>
      </div>
    </motion.article>
  )
}
