import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function CategoryCard({ title, description, icon }) {
  const Icon = Icons[icon] ?? Icons.Layers

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md"
    >
      <div className="mb-4 inline-flex rounded-xl bg-blue-500/15 p-3 text-blue-300">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </motion.div>
  )
}
