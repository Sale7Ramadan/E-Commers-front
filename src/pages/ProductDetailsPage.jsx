import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import RatingStars from '../components/RatingStars'
import { products } from '../data/products'
import { useCart } from '../context/useCart'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
        <h1 className="text-3xl font-semibold text-white">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block text-blue-300 hover:text-blue-200">
          Return to Products
        </Link>
      </main>
    )
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200">
        <ArrowLeft size={16} /> Back to products
      </Link>

      <section className="mt-6 grid gap-8 lg:grid-cols-2">
        <img src={product.image} alt={product.name} className="h-[420px] w-full rounded-3xl object-cover" />
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-blue-300">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{product.name}</h1>
          <p className="mt-5 text-slate-300">{product.description}</p>
          <div className="mt-4">
            <RatingStars rating={product.rating} />
          </div>
          <p className="mt-5 text-3xl font-semibold text-white">${product.price}</p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="mt-6 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400"
          >
            Add to Cart
          </button>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-white">Specifications</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {product.specifications.map((spec) => (
                  <li key={spec}>• {spec}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Features</h3>
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
        <h2 className="text-3xl font-semibold text-white">Related Products</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </motion.main>
  )
}
