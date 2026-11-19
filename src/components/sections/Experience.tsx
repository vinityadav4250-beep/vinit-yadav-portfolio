import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { experience } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EASE, fadeUp, stagger, viewportOnce } from '@/utils/animations'

export function Experience() {
  const trackRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 75%', 'end 60%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="container-site">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Four years shipping production systems."
          description="One company, three platforms, steadily growing scope — from feature work to API design and cross-team contracts."
        />

        <div className="grid gap-12 [&>*]:min-w-0 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Role card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="lg:sticky lg:top-28 lg:self-start">
            <div className="panel overflow-hidden p-7">
              <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--grad)' }} aria-hidden />
              <p className="font-mono text-xs text-violet-400">{experience.period}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">{experience.company}</h3>
              <p className="mt-1 text-zinc-300">{experience.role}</p>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-zinc-500">
                <HiOutlineMapPin aria-hidden /> {experience.location}
              </p>

              <div className="hairline my-7" />

              <p className="eyebrow mb-4">Career progression</p>
              <ol ref={trackRef} className="relative space-y-6 pl-7">
                <span className="absolute bottom-2 left-[5px] top-2 w-px bg-white/[0.08]" aria-hidden />
                <motion.span
                  className="absolute left-[5px] top-2 w-px origin-top"
                  style={{ scaleY: progress, bottom: '0.5rem', background: 'linear-gradient(#a78bfa,#60a5fa,#67e8f9)' }}
                  aria-hidden
                />
                {experience.progression.map((step, i) => (
                  <motion.li
                    key={step.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
                    className="relative"
                  >
                    <span
                      className={`absolute -left-7 top-1.5 h-[11px] w-[11px] rounded-full border-2 ${
                        i === experience.progression.length - 1
                          ? 'border-aqua-300 bg-aqua-300 shadow-[0_0_14px_rgba(103,232,249,0.7)]'
                          : 'border-violet-400 bg-ink-900'
                      }`}
                      aria-hidden
                    />
                    <p className="font-mono text-xs text-zinc-500">{step.year}</p>
                    <p className="mt-0.5 font-medium text-zinc-100">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">{step.text}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Responsibilities */}
          <motion.ul variants={stagger(0.06)} initial="hidden" whileInView="visible" viewport={viewportOnce} aria-label="Key responsibilities">
            {experience.responsibilities.map((r, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="group flex gap-5 border-b border-white/[0.06] py-5 first:pt-0"
              >
                <span className="mt-1 font-mono text-xs text-zinc-600 transition-colors group-hover:text-violet-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="leading-relaxed text-zinc-300 transition-colors group-hover:text-zinc-50">{r}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
