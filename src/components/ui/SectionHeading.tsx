import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-accent-light bg-accent/10 rounded-full border border-accent/20">
        {title.split(' ')[0]}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-400 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-20 bg-gradient-to-r from-accent to-cyan-accent rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
