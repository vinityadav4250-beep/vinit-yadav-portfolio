import { motion } from 'framer-motion'
import { EASE } from '@/utils/animations'

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE } }}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-3xl font-semibold tracking-tightest text-zinc-50"
        >
          VY<span className="text-gradient">.</span>
        </motion.div>
        <div className="h-px w-40 overflow-hidden bg-white/10">
          <motion.div
            className="h-full w-full origin-left"
            style={{ background: 'var(--grad)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
        </div>
      </div>
    </motion.div>
  )
}
