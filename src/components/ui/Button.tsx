import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  download?: boolean
  className?: string
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent to-accent-dark text-white shadow-glow hover:shadow-[0_0_50px_rgba(99,102,241,0.5)]',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30',
  outline:
    'bg-transparent text-accent-light border border-accent/50 hover:bg-accent/10 hover:border-accent',
  ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
}

export function Button({
  children,
  variant = 'primary',
  href,
  download,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-xl font-medium text-sm
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark-900
    ${variants[variant]}
    ${className}
  `

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        className={baseClasses}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button className={baseClasses} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} {...props}>
      {children}
    </motion.button>
  )
}
