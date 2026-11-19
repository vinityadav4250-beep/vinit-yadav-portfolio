import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { EASE } from '@/utils/animations'

interface SplitTextProps {
  text: string
  /** words (exact match) that receive the gradient treatment */
  highlight?: string[]
  className?: string
  delay?: number
  /** animate on mount instead of on scroll into view */
  immediate?: boolean
  /** with `immediate`, hold the hidden state until true */
  play?: boolean
}

const word: Variants = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: EASE } },
}

/** Word-by-word masked reveal. Screen readers get the plain sentence. */
export function SplitText({ text, highlight = [], className = '', delay = 0, immediate = false, play = true }: SplitTextProps) {
  const words = text.split(' ')
  const trigger = immediate
    ? { initial: 'hidden', animate: play ? 'visible' : 'hidden' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-60px' } }

  return (
    <motion.span className={className} {...trigger} transition={{ staggerChildren: 0.055, delayChildren: delay }}>
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top -mb-[0.12em]">
          <motion.span variants={word} className={`inline-block ${highlight.includes(w) ? 'text-gradient' : ''}`}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
