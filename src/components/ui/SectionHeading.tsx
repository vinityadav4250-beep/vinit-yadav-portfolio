import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, stagger, viewportOnce } from '@/utils/animations'
import { SplitText } from './SplitText'

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ index, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const center = align === 'center'
  return (
    <motion.header
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`mb-14 md:mb-20 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}`}
    >
      <motion.p variants={fadeUp} className="eyebrow mb-5">
        <span className="text-violet-400">{index}</span>
        <span className="h-px w-6 bg-white/15" aria-hidden />
        {eyebrow}
      </motion.p>
      <h2 className="text-[2.1rem] font-semibold leading-[1.08] tracking-tightest sm:text-5xl md:text-[3.4rem]">
        <SplitText text={title} />
      </h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-relaxed text-zinc-400 md:text-lg ${center ? 'mx-auto' : ''} max-w-2xl`}
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  )
}
