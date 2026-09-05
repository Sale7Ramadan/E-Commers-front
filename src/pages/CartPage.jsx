import { motion } from 'framer-motion'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'

export default function CartPage() {
  const { items, totals, increment, decrement, removeFromCart } = useCart()

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <h1 className="text-4xl font-semibold text-white">Shopping Cart</h1>
      <p className="mt-3 text-slate-300">Visual checkout preview for your e-commerce prototype.</p>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-slate-300">Your cart is currently empty.</p>
          <Link to="/products" className="mt-4 inline-block rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <article key={item.id} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center">
                <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
                <div className="flex-1">
                  <p className="text-sm uppercase text-blue-300">{item.category}</p>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-slate-300">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => decrement(item.id)} className="rounded-lg border border-white/20 p-2 text-white">
                    <Minus size={14} />
                  </button>
                  <span className="min-w-8 text-center text-white">{item.quantity}</span>
                  <button type="button" onClick={() => increment(item.id)} className="rounded-lg border border-white/20 p-2 text-white">
                    <Plus size={14} />
                  </button>
                </div>
                <button type="button" onClick={() => removeFromCart(item.id)} className="rounded-lg border border-rose-500/40 p-2 text-rose-300">
                  <Trash2 size={16} />
                </button>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Order Summary</h2>
            <div className="mt-4 space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{totals.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$25</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${Math.round(totals.price * 0.08)}</span>
              </div>
            </div>
            <div className="mt-5 flex justify-between border-t border-white/10 pt-4 text-lg font-semibold text-white">
              <span>Total</span>
              <span>${totals.price + 25 + Math.round(totals.price * 0.08)}</span>
            </div>
            <button type="button" className="mt-5 w-full rounded-xl bg-blue-500 py-3 font-semibold text-white hover:bg-blue-400">
              Checkout (Demo)
            </button>
          </aside>
        </div>
      )}
    </motion.main>
  )
}
