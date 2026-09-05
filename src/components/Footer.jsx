export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-white">تك <span className="text-blue-400">نوفا</span></h3>
          <p className="mt-4 max-w-md text-slate-300">
            متجر تقني احترافي للأجهزة والمكوّنات والملحقات، بتجربة استخدام فاخرة مصممة لإقناع العملاء من أول زيارة.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-[0.12em] text-blue-300">الشركة</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>من نحن</li>
            <li>الأقسام</li>
            <li>الدعم</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-[0.12em] text-blue-300">تواصل معنا</h4>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>hello@taknova.demo</li>
            <li>+966 50 123 4567</li>
            <li>من السبت إلى الخميس، 9 صباحًا - 7 مساءً</li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} متجر تك نوفا. جميع الحقوق محفوظة.
      </p>
    </footer>
  )
}
