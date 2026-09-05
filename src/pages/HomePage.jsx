import { motion } from 'framer-motion'
import { ArrowLeft, ShieldCheck, Star, Truck, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import SectionTitle from '../components/SectionTitle'
import { categoriesGrid, featuredDeals, homeCategories, products, reviews, trustedBrands, whyChooseUs } from '../data/products'

export default function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 md:px-8 md:pt-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/70 shadow-[0_30px_90px_rgba(15,23,42,0.8)]">
          <img
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1800&q=80"
            alt="إعداد ألعاب مستقبلي"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.35),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.35),transparent_40%),linear-gradient(125deg,rgba(2,6,23,0.9),rgba(15,23,42,0.5))]" />
          <div className="relative grid items-center gap-10 p-7 md:grid-cols-[1.2fr,0.8fr] md:p-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-cyan-300">متجر تقني فاخر</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
                اصنع مستقبلك التقني مع أقوى حلول الألعاب والإبداع
              </h1>
              <p className="mt-5 max-w-2xl text-slate-200 md:text-lg">
                اكتشف أجهزة عالية الأداء ولابتوبات احترافية ومكوّنات ذكية وملحقات متقدمة صُممت لعشاق التقنية والمحترفين.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:brightness-110"
                >
                  تصفح المنتجات
                </Link>
                <a
                  href="#deals"
                  className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  اكتشف العروض
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-1"
            >
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs tracking-[0.1em] text-blue-200">مؤشر الأداء</p>
                <p className="mt-3 text-4xl font-semibold text-white">98.7</p>
                <p className="mt-1 text-sm text-slate-200">جودة بصرية احترافية جاهزة للمتاجر الفعلية</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-xs tracking-[0.1em] text-blue-200">موثوق من عشاق التقنية</p>
                <div className="mt-3 flex items-center gap-2 text-amber-300">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="mt-2 text-sm text-slate-200">متوسط تقييم تجربة المستخدم 4.9</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
          <p className="text-center text-xs tracking-[0.12em] text-slate-400">العلامات الموثوقة</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-6">
            {trustedBrands.map((brand) => (
              <div key={brand} className="rounded-xl border border-white/10 bg-slate-900/70 px-3 py-3 text-sm font-semibold text-slate-200">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deals" className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionTitle
          eyebrow="عروض اليوم"
          title="العروض المميزة"
          subtitle="باقات محدودة المدة بصياغة تجارية ذكية ترفع الإقبال وتعزز قرار الشراء."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {featuredDeals.map((deal, index) => (
            <motion.article
              key={deal.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/70"
            >
              <img src={deal.image} alt={deal.title} className="h-52 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute right-4 top-4 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-100">
                {deal.badge}
              </div>
              <div className="absolute bottom-0 p-5">
                <p className="text-xs tracking-[0.12em] text-cyan-300">{deal.discount}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{deal.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{deal.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle
          eyebrow="أبرز التصنيفات"
          title="الأقسام المميزة"
          subtitle="استكشف أقسامًا مختارة بعناية تناسب مختلف احتياجات الأداء."
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

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle title="منتجات مميزة" subtitle="مجموعة مختارة بعرض احترافي يعكس جودة متجر تقني متقدم." />
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200">
            عرض الكل <ArrowLeft size={15} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle title="لماذا تك نوفا؟" subtitle="تجربة شراء فاخرة مصممة لبناء الثقة وزيادة التحويلات." />
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
        <SectionTitle title="آراء العملاء" subtitle="تقييمات واقعية تمنح الزوار شعورًا بالثقة والموثوقية." />
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
          <h3 className="text-3xl font-semibold text-white">اشترك في نشرة تك نوفا</h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            احصل على أحدث الإطلاقات والعروض الحصرية ونصائح اختيار أفضل القطع التقنية.
          </p>
          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-blue-400"
            />
            <button type="button" className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400">
              اشترك الآن
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-8">
        <SectionTitle title="تسوق حسب الأقسام الأساسية" subtitle="بطاقات أقسام واضحة تساعد المستخدم على الوصول السريع للمنتجات." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoriesGrid.map((category) => (
            <div key={category} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <h4 className="text-lg font-semibold text-white">{category}</h4>
              <p className="mt-2 text-sm text-slate-300">اكتشف خيارات احترافية ضمن قسم {category}.</p>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}
