export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-white">Tech<span className="text-blue-400">Nova</span></h3>
          <p className="mt-4 max-w-md text-slate-300">
            Premium demo storefront for computers, components, and accessories. Built for client presentation and easy customization.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Company</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>About</li>
            <li>Categories</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Contact</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>hello@technova.demo</li>
            <li>+1 (800) 555-0109</li>
            <li>Mon - Sat, 9AM - 7PM</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} TechNova Demo Store. Visual prototype only.
      </p>
    </footer>
  )
}
