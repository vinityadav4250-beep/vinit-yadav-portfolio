import { motion } from 'framer-motion'
import { HiOutlineLockClosed, HiOutlineSparkles } from 'react-icons/hi2'
import { projects } from '@/data/portfolio'
import type { Project } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { EASE, fadeUp, stagger } from '@/utils/animations'
import { ProjectVisual } from './ProjectVisual'

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <motion.article
      className="group grid items-center gap-8 [&>*]:min-w-0 lg:grid-cols-2 lg:gap-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      aria-labelledby={`${project.id}-title`}
    >
      <motion.div
        className={flip ? 'lg:order-2' : ''}
        variants={{
          hidden: { clipPath: 'inset(12% 12% 12% 12% round 28px)', opacity: 0, scale: 1.04 },
          visible: { clipPath: 'inset(0% 0% 0% 0% round 22px)', opacity: 1, scale: 1, transition: { duration: 1.2, ease: EASE } },
        }}
      >
        <ProjectVisual project={project} />
      </motion.div>

      <motion.div variants={stagger(0.07, 0.15)} className={flip ? 'lg:order-1' : ''}>
        <motion.div variants={fadeUp} className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="text-violet-400">{project.index}</span>
          <span className="h-px w-6 bg-white/15" aria-hidden />
          <span className="text-zinc-500">{project.kind}</span>
          {project.status && (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">
              <HiOutlineSparkles aria-hidden /> {project.status}
            </span>
          )}
        </motion.div>

        <motion.h3 variants={fadeUp} id={`${project.id}-title`} className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          {project.title}
        </motion.h3>
        <motion.p variants={fadeUp} className="mt-2 font-mono text-xs text-zinc-600">
          {project.period}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-5 leading-relaxed text-zinc-400">
          {project.summary}
        </motion.p>

        <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={fadeUp} className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h4 className="eyebrow mb-3">Key features</h4>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-violet-400" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-3">Architecture</h4>
            <ul className="space-y-2">
              {project.architecture.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-zinc-400">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-aqua-400" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-xs text-zinc-500">
          <HiOutlineLockClosed className="shrink-0" aria-hidden />
          {project.note}
        </motion.p>
      </motion.div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section" aria-label="Featured projects">
      <div className="container-site">
        <SectionHeading
          index="04"
          eyebrow="Featured work"
          title="Platforms I've helped build and scale."
          description="Enterprise systems from my work at EBIXCASH, plus an independent product I'm building. Previews are illustrative — the production systems are confidential."
        />
        <div className="space-y-28 md:space-y-36">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
