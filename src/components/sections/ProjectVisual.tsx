import { useState } from 'react'
import type { Project } from '@/data/portfolio'

/**
 * Project preview: an illustrative stock photo (the real systems are confidential),
 * tinted with the project's accent and framed like a product shot.
 */

const tints: Record<Project['accent'], string> = {
  violet: 'rgba(124,58,237,0.38)',
  cyan: 'rgba(34,211,238,0.28)',
  blue: 'rgba(59,130,246,0.34)',
  emerald: 'rgba(16,185,129,0.30)',
}

export function ProjectVisual({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false)
  const tint = tints[project.accent]

  return (
    <figure className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-ink-900 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
      <img
        src={`${import.meta.env.BASE_URL}${project.image}`}
        alt={project.imageAlt}
        width={1400}
        height={962}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-[transform,opacity,filter] duration-[1200ms] ease-out group-hover:scale-[1.04] ${
          loaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
        }`}
      />

      {/* accent tint + vignette so photos sit inside the dark palette */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-color transition-opacity duration-700 group-hover:opacity-60"
        style={{ background: `linear-gradient(135deg, ${tint}, transparent 70%)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0.05)_30%,rgba(5,5,7,0.85)_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-white/[0.06]" aria-hidden />

      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">
          <span className="text-zinc-500">{project.index} /</span> {project.title}
        </span>
        <span className="shrink-0 rounded-full border border-white/15 bg-ink-950/60 px-2.5 py-1 font-mono text-[10px] text-zinc-400 backdrop-blur">
          Illustrative photo
        </span>
      </figcaption>
    </figure>
  )
}
