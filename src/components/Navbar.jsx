import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const links = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Categories', to: '/#categories' },
  { name: 'About', to: '/#about' },
  { name: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totals } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-white">
          Tech<span className="text-blue-400">Nova</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative rounded-xl border border-white/10 p-2 text-slate-200 hover:text-white">
            <ShoppingCart size={18} />
            {totals.quantity > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-blue-500 px-1.5 text-xs font-semibold text-white">
                {totals.quantity}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink key={link.name} to={link.to} onClick={() => setOpen(false)} className="text-sm text-slate-300">
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
