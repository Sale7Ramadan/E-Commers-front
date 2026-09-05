import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import SectionTitle from '../components/SectionTitle'
import { categoriesGrid, homeCategories, products, reviews, whyChooseUs } from '../data/products'

export default function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top_right,#3b82f650,transparent_40%),linear-gradient(145deg,#0f172a,#020617)] p-8 shadow-2xl md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">Premium Computer Store</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Power Your Future With Premium Technology
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300 md:text-lg">
            Discover high-performance computers, laptops, components, and accessories crafted for gamers, creators, and professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400">
              Browse Products
            </Link>
            <a href="#deals" className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-blue-400 hover:text-blue-300">
              Explore Deals
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle
          eyebrow="Top Collections"
          title="Featured Categories"
          subtitle="Explore curated categories tailored for every performance need."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeCategories.map((category) => (
            <CategoryCard
              key={category.name}
              title={category.name}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </section>

      <section id="deals" className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <SectionTitle title="Featured Products" subtitle="Demo products displayed for premium storefront showcase." />
          <Link to="/products" className="hidden items-center gap-2 text-sm text-blue-300 hover:text-blue-200 md:inline-flex">
            View all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle title="Why Choose TechNova" subtitle="A visual buying experience designed to inspire trust and conversion." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const icons = [Zap, ShieldCheck, Truck]
            const Icon = icons[index]
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <Icon className="text-blue-300" size={24} />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle title="Customer Reviews" subtitle="Realistic testimonials for a convincing client presentation." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-slate-200">“{review.comment}”</p>
              <p className="mt-4 font-semibold text-white">{review.name}</p>
              <p className="text-sm text-blue-300">{review.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md md:p-12">
          <h3 className="text-3xl font-semibold text-white">Join the TechNova Newsletter</h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Get updates on upcoming launches, bundle offers, and hardware insights.
          </p>
          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-blue-400"
            />
            <button type="button" className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-8">
        <SectionTitle title="Shop By Core Categories" subtitle="Showcase-ready category cards for complete catalog navigation." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoriesGrid.map((category) => (
            <div key={category} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <h4 className="text-lg font-semibold text-white">{category}</h4>
              <p className="mt-2 text-sm text-slate-300">Explore premium options in {category.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}
