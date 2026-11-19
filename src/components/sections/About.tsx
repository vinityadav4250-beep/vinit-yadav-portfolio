import { motion } from 'framer-motion'
import { about, personalInfo } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '@/utils/animations'

export function About() {
  return (
    <section id="about" className="section" aria-label="About">
      <div className="container-site">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineer of the systems behind the screens."
        />

        <div className="grid gap-14 [&>*]:min-w-0 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6 text-[17px] leading-[1.75] text-zinc-400"
          >
            {about.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className={i === 0 ? 'text-zinc-200' : ''}>
                {p}
              </motion.p>
            ))}

            <motion.dl variants={fadeUp} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] pt-0 sm:grid-cols-4">
              {[
                ['Experience', `${personalInfo.yearsOfExperience}+ years`],
                ['Company', personalInfo.company],
                ['Based in', 'Noida, IN'],
                ['Focus', '.NET + React'],
              ].map(([k, v]) => (
                <div key={k} className="bg-ink-950 px-4 py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">{k}</dt>
                  <dd className="mt-1 text-sm text-zinc-200">{v}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.ul
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
            aria-label="What I focus on"
          >
            {about.focus.map((f, i) => (
              <motion.li
                key={f.title}
                variants={fadeUp}
                className="group grid grid-cols-[2.5rem_1fr] gap-2 border-t border-white/[0.06] py-5 last:border-b"
              >
                <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-violet-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-zinc-100 transition-transform duration-500 group-hover:translate-x-1">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">{f.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
