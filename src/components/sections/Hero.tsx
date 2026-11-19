import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { HiOutlineArrowDownTray, HiArrowRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { hero, personalInfo } from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { SplitText } from '@/components/ui/SplitText'
import { EASE, fadeUp, stagger } from '@/utils/animations'
import { scrollToSection } from '@/utils/scrollTo'

function RotatingRole() {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % hero.roles.length), 2600)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <span className="relative inline-flex h-[1.5em] overflow-hidden align-bottom" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={hero.roles[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-block whitespace-nowrap text-zinc-100"
        >
          {hero.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const code: { t: string; c?: string }[][] = [
  [{ t: '[ApiController]', c: 'text-aqua-300' }],
  [{ t: '[Authorize', c: 'text-aqua-300' }, { t: '(Roles = ' }, { t: '"Admin,Agent"', c: 'text-amber-200' }, { t: ')]', c: 'text-aqua-300' }],
  [{ t: 'public class ', c: 'text-violet-400' }, { t: 'PolicyController', c: 'text-azure-400' }, { t: ' : ControllerBase' }],
  [{ t: '{' }],
  [{ t: '  [HttpGet', c: 'text-aqua-300' }, { t: '(' }, { t: '"{id}"', c: 'text-amber-200' }, { t: ')]', c: 'text-aqua-300' }],
  [{ t: '  public async ', c: 'text-violet-400' }, { t: 'Task<IActionResult> ', c: 'text-azure-400' }, { t: 'Get(int id)' }],
  [{ t: '  {' }],
  [{ t: '    var ', c: 'text-violet-400' }, { t: 'policy = ' }, { t: 'await ', c: 'text-violet-400' }, { t: '_service.GetAsync(id);' }],
  [{ t: '    return ', c: 'text-violet-400' }, { t: 'policy ' }, { t: 'is null', c: 'text-violet-400' }, { t: ' ? NotFound() : Ok(policy);' }],
  [{ t: '  }' }],
  [{ t: '}' }],
]

function CodeWindow({ ready }: { ready: boolean }) {
  return (
    <div className="panel-glass overflow-hidden shadow-[0_40px_120px_-30px_rgba(124,58,237,0.45)]">
      {/* profile strip */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-azure-500 to-aqua-400 p-[1.5px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-ink-900 font-display text-sm font-semibold text-zinc-50">
            {personalInfo.initials}
          </div>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-zinc-100">{personalInfo.name}</p>
          <p className="truncate text-xs text-zinc-500">
            {personalInfo.title} · {personalInfo.company}
          </p>
        </div>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Open to work
        </span>
      </div>

      {/* editor chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.015] px-5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 font-mono text-[11px] text-zinc-500">PolicyController.cs</span>
      </div>

      <pre className="overflow-x-auto px-5 py-5 font-mono text-[11.5px] leading-[1.8] text-zinc-300 sm:text-[12.5px]" aria-label="Sample ASP.NET Core controller">
        <code>
          {code.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, x: -6 }}
              animate={ready ? { opacity: 1, x: 0 } : undefined}
              transition={{ delay: 0.9 + i * 0.07, duration: 0.4, ease: EASE }}
            >
              <span className="mr-4 inline-block w-4 select-none text-right text-zinc-700">{i + 1}</span>
              {line.map((tok, j) => (
                <span key={j} className={tok.c}>
                  {tok.t}
                </span>
              ))}
            </motion.span>
          ))}
        </code>
      </pre>

      <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.06] px-5 py-3 font-mono text-[11px] text-zinc-500">
        <span className="text-emerald-300">● build passed</span>
        <span className="text-zinc-700">/</span>
        <span>C# · ASP.NET Core · EF Core</span>
      </div>
    </div>
  )
}

export function Hero({ ready = true }: { ready?: boolean }) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2])

  return (
    <section ref={ref} id="home" aria-label="Introduction" className="relative flex min-h-[100svh] items-center pb-16 pt-32 md:pt-36">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div className="min-w-0" variants={stagger(0.09, 0.35)} initial="hidden" animate={ready ? 'visible' : 'hidden'}>
          <motion.div variants={fadeUp} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pl-1.5 pr-3 text-xs text-zinc-300">
              <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                Available
              </span>
              for full-time & remote opportunities
              <span className="hidden text-zinc-600 sm:inline">·</span>
              <span className="hidden text-zinc-500 sm:inline">{personalInfo.location}</span>
            </span>
          </motion.div>

          <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-tightest sm:text-6xl lg:text-[4.4rem]">
            <SplitText text={hero.heading} highlight={hero.highlight} immediate play={ready} delay={0.2} />
          </h1>

          <motion.p variants={fadeUp} className="mt-7 font-mono text-sm text-zinc-500 sm:text-base">
            <span className="text-violet-400">~/</span> <RotatingRole />
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {hero.subheading}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={personalInfo.resumeUrl} download={personalInfo.resumeFileName} external={false}>
              <HiOutlineArrowDownTray className="h-4 w-4" aria-hidden />
              Download Resume
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              external={false}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#projects')
              }}
            >
              View Projects
              <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Button>
            <div className="flex items-center gap-1 pl-1">
              <Button href={personalInfo.linkedin} variant="ghost" className="!px-3" ariaLabel="LinkedIn profile" magnetic={0.4}>
                <FaLinkedinIn className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={personalInfo.github} variant="ghost" className="!px-3" ariaLabel="GitHub profile" magnetic={0.4}>
                <FaGithub className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
            {hero.proof.map((p, i) => (
              <li key={p} className="flex items-center gap-5">
                {i > 0 && <span className="h-3 w-px bg-white/15" aria-hidden />}
                <span className={i === 0 ? 'text-zinc-200' : ''}>{p}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div style={{ y, opacity }} className="relative min-w-0 [perspective:1200px]">
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            animate={ready ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
            transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent)] blur-2xl" aria-hidden />
            <CodeWindow ready={ready} />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600 hover:text-zinc-300 md:flex"
        aria-label="Scroll to About section"
      >
        Scroll
        <span className="relative h-9 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-violet-400"
            animate={reduce ? undefined : { y: [-12, 36] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.button>
    </section>
  )
}
