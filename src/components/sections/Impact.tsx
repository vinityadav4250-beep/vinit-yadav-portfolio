import { motion } from 'framer-motion'
import { metrics } from '@/data/portfolio'
import { CountUp } from '@/components/ui/CountUp'
import { fadeUp, stagger, viewportOnce } from '@/utils/animations'

export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="relative py-16 md:py-20">
      <div className="container-site">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 id="impact-title" className="eyebrow">
            <span className="text-violet-400">↳</span> Measured impact at EBIXCASH
          </h2>
          <p className="hidden font-mono text-[11px] text-zinc-600 sm:block">Figures as stated on my resume</p>
        </div>
        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-5"
        >
          {metrics.map((m, i) => (
            <motion.li
              key={m.label}
              variants={fadeUp}
              className={`group relative bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900 md:p-7 ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <p className="font-display text-5xl font-semibold tracking-tightest text-zinc-50 md:text-[3.4rem]">
                <span className="text-gradient">
                  <CountUp to={m.value} suffix={m.suffix} />
                </span>
              </p>
              <p className="mt-3 text-sm font-medium text-zinc-200">{m.label}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-zinc-500">{m.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
