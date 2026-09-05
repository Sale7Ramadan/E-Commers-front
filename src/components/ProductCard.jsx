import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import RatingStars from './RatingStars'
import { useCart } from '../context/useCart'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md"
    >
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-300">{product.category}</p>
        <Link to={`/products/${product.id}`} className="block text-xl font-semibold text-white transition hover:text-blue-300">
          {product.name}
        </Link>
        <p className="text-sm text-slate-300">{product.shortDescription}</p>
        <RatingStars rating={product.rating} />
        <div className="flex items-center justify-between pt-1">
          <p className="text-2xl font-semibold text-white">${product.price}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            <ShoppingCart size={16} /> Add to cart
          </button>
        </div>
      </div>
    </motion.article>
  )
}
