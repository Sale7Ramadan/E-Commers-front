export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300 md:max-w-2xl">{subtitle}</p>}
    </div>
  )
}
