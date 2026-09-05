import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="text-center"
      >
        <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500" />
        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Loading TechNova</p>
      </motion.div>
    </div>
  )
}
