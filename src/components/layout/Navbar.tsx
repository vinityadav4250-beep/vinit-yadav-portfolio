import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineArrowDownTray } from 'react-icons/hi2'
import { navLinks, personalInfo } from '@/data/portfolio'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { scrollToSection } from '@/utils/scrollTo'
import { EASE } from '@/utils/animations'

const sectionIds = navLinks.map((l) => l.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(href)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.nav
        aria-label="Primary"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className={`mx-auto flex h-14 max-w-site items-center justify-between rounded-full border px-3 pl-5 transition-all duration-500 ${
          scrolled
            ? 'border-white/[0.08] bg-ink-900/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#home" onClick={go('#home')} className="font-display text-lg font-semibold tracking-tight text-zinc-50" aria-label="Vinit Yadav — back to top">
          vinit<span className="text-gradient">.</span>dev
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={go(link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300 ${
                    isActive ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            download={personalInfo.resumeFileName}
            className="hidden items-center gap-1.5 rounded-full bg-zinc-50 px-4 py-1.5 text-[13px] font-medium text-ink-950 transition-colors hover:bg-white sm:inline-flex"
          >
            <HiOutlineArrowDownTray className="h-3.5 w-3.5" aria-hidden />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
          >
            <span className={`absolute h-px w-4 bg-zinc-100 transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
            <span className={`absolute h-px w-4 bg-zinc-100 transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="panel-glass mx-auto mt-2 max-w-site overflow-hidden p-2 lg:hidden"
          >
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: EASE }}
                >
                  <a
                    href={link.href}
                    onClick={go(link.href)}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] text-zinc-200 hover:bg-white/[0.05]"
                  >
                    {link.label}
                    <span className="font-mono text-[11px] text-zinc-600">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-zinc-50 px-4 py-3 text-sm font-medium text-ink-950"
            >
              <HiOutlineArrowDownTray aria-hidden /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
