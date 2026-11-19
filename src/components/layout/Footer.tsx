import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineEnvelope, HiArrowUp } from 'react-icons/hi2'
import { personalInfo } from '@/data/portfolio'
import { scrollToSection } from '@/utils/scrollTo'

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-site flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-semibold text-zinc-100">
            vinit<span className="text-gradient">.</span>dev
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & built with React, TypeScript and Framer Motion.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { href: personalInfo.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
            { href: personalInfo.github, label: 'GitHub', Icon: FaGithub },
            { href: `mailto:${personalInfo.email}`, label: 'Email', Icon: HiOutlineEnvelope },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-50"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </a>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            aria-label="Back to top"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-50"
          >
            <HiArrowUp className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  )
}
