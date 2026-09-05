import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, ShoppingCart, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/useCart'
import { megaMenuCategories } from '../data/products'

const links = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'Categories', to: '/#categories' },
  { name: 'About', to: '/#about' },
  { name: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const { totals } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
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
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button type="button" className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 transition hover:text-white">
              Collections <ChevronDown size={15} />
            </button>
            <div
              className={`absolute right-0 top-full mt-5 w-[740px] rounded-3xl border border-white/15 bg-slate-900/85 p-6 shadow-[0_20px_80px_rgba(14,165,233,0.2)] backdrop-blur-2xl transition ${
                megaMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs uppercase tracking-[0.26em] text-blue-300">Mega Menu</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-200">
                  <Sparkles size={13} /> Premium Picks
                </span>
              </div>
              <div className="grid grid-cols-4 gap-5">
                {megaMenuCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="text-sm font-semibold text-white">{category.title}</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {category.items.map((item) => (
                        <li key={item} className="transition hover:text-blue-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:text-white">
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
        <div className="border-t border-white/10 bg-slate-900/90 px-4 py-4 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {megaMenuCategories.map((category) => (
              <div key={category.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <h4 className="text-sm font-semibold text-white">{category.title}</h4>
                <ul className="mt-2 space-y-1 text-xs text-slate-300">
                  {category.items.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
