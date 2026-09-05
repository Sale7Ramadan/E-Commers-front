import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function CategoryCard({ title, description, icon }) {
  const Icon = Icons[icon] ?? Icons.Layers

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-xl backdrop-blur-xl"
    >
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-3 text-cyan-200">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </motion.div>
  )
}
