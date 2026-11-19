import { motion } from 'framer-motion'
import { techStack } from '@/data/portfolio'
import type { Tech } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useSpotlight } from '@/hooks/useSpotlight'
import { fadeUp, stagger, viewportOnce } from '@/utils/animations'

function TechPill({ tech, i }: { tech: Tech; i: number }) {
  const Icon = tech.icon
  return (
    <motion.li
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className="group/pill flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.05]"
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] transition-transform duration-500 group-hover/pill:scale-110"
        style={{ animationDelay: `${i * 0.3}s` }}
      >
        <Icon className="h-4 w-4 opacity-80 transition-opacity group-hover/pill:opacity-100" style={{ color: tech.color }} aria-hidden />
      </span>
      <span className="text-[13px] text-zinc-300 group-hover/pill:text-zinc-50">{tech.name}</span>
    </motion.li>
  )
}

const marquee = techStack.flatMap((g) => g.items).filter((t, i, a) => a.findIndex((x) => x.name === t.name) === i)

export function Stack() {
  const onMove = useSpotlight<HTMLDivElement>()

  return (
    <section id="stack" className="section" aria-label="Tech stack">
      <div className="container-site">
        <SectionHeading
          index="02"
          eyebrow="Tech stack"
          title="A full-stack toolkit, centred on .NET."
          description="The languages, frameworks and platforms I use to design, build, ship and operate production software."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-6"
        >
          {techStack.map((group, gi) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              onMouseMove={onMove}
              className={`spotlight panel p-6 ${gi < 2 ? 'lg:col-span-3' : 'lg:col-span-2'} ${gi === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium text-zinc-50">{group.title}</h3>
                <p className="font-mono text-[11px] text-zinc-600">{group.caption}</p>
              </div>
              <motion.ul variants={stagger(0.04)} className="grid grid-cols-2 gap-2 sm:grid-cols-2 xl:grid-cols-2">
                {group.items.map((t, i) => (
                  <TechPill key={t.name} tech={t} i={i} />
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ambient marquee */}
      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 motion-reduce:animate-none">
          {[...marquee, ...marquee].map((t, i) => {
            const Icon = t.icon
            return (
              <span key={i} className="flex items-center gap-2.5 whitespace-nowrap font-display text-2xl font-medium text-zinc-700">
                <Icon className="h-5 w-5" />
                {t.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
