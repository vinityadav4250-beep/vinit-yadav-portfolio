import { motion } from 'framer-motion'
import { HiArrowUpRight, HiOutlineCheckBadge } from 'react-icons/hi2'
import { FaLinkedinIn, FaMicrosoft } from 'react-icons/fa6'
import { certifications } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useSpotlight } from '@/hooks/useSpotlight'
import { fadeUp, stagger, viewportOnce } from '@/utils/animations'

export function Certifications() {
  const onMove = useSpotlight<HTMLAnchorElement>()

  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container-site">
        <SectionHeading
          index="05"
          eyebrow="Certifications"
          title="Investing in AI, the Microsoft way."
          description="Professional learning paths from Microsoft and LinkedIn — focused on generative AI, Azure AI services and responsible AI practices."
        />

        <motion.ul variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <motion.li key={cert.title} variants={fadeUp}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={onMove}
                aria-label={`View certificate: ${cert.title} by ${cert.issuer} (opens in a new tab)`}
                className="spotlight panel group flex h-full flex-col overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1 md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px opacity-60" style={{ background: 'var(--grad)' }} aria-hidden />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <FaMicrosoft className="h-4 w-4 text-zinc-200" aria-hidden />
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <FaLinkedinIn className="h-4 w-4 text-[#4ea3e6]" aria-hidden />
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    <HiOutlineCheckBadge className="h-3.5 w-3.5" aria-hidden />
                    Completed
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold leading-snug tracking-tight text-zinc-50 md:text-2xl">{cert.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {cert.issuer} · {cert.platform}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills covered">
                  {cert.skills.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-1 font-mono text-[11px]">
                    <dt className="text-zinc-600">Issued</dt>
                    <dt className="text-zinc-600">Duration</dt>
                    <dd className="text-zinc-300">
                      <time dateTime={cert.isoDate}>{cert.date}</time>
                    </dd>
                    <dd className="text-zinc-300">{cert.duration}</dd>
                  </dl>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm text-zinc-300 transition-colors group-hover:text-zinc-50">
                    View
                    <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
                <p className="mt-4 truncate font-mono text-[10px] text-zinc-700">Credential ID {cert.credentialId}</p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
