import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'ghost'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  className?: string
  /** pull strength of the magnetic effect, 0 disables it */
  magnetic?: number
  ariaLabel?: string
}

interface LinkProps extends BaseProps {
  href: string
  download?: string
  external?: boolean
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

interface ActionProps extends BaseProps {
  href?: undefined
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const styles: Record<Variant, string> = {
  primary:
    'text-ink-950 bg-zinc-50 hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_-6px_rgba(139,92,246,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_10px_40px_-6px_rgba(139,92,246,0.8)]',
  secondary:
    'text-zinc-100 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur',
  ghost: 'text-zinc-400 hover:text-zinc-100',
}

export function Button(props: LinkProps | ActionProps) {
  const { children, variant = 'primary', className = '', magnetic = 0.25, ariaLabel } = props
  const ref = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = (e: MouseEvent) => {
    if (reduce || !magnetic || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * magnetic)
    y.set((e.clientY - (r.top + r.height / 2)) * magnetic)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const cls = `group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[background,box-shadow,border-color,color] duration-300 disabled:opacity-60 ${styles[variant]} ${className}`

  if (props.href !== undefined) {
    const external = props.external ?? props.href.startsWith('http')
    return (
      <motion.a
        ref={(el) => (ref.current = el)}
        href={props.href}
        download={props.download}
        onClick={props.onClick}
        aria-label={ariaLabel}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ x, y }}
        whileTap={{ scale: 0.97 }}
        className={cls}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={(el) => (ref.current = el)}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={ariaLabel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={cls}
    >
      {children}
    </motion.button>
  )
}
