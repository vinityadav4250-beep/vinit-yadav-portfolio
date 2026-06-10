import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { personalInfo } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.08] bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-1.5">
            Designed and Developed by{' '}
            <span className="text-white font-semibold">{personalInfo.name}</span>
            <FaHeart className="text-red-500 text-xs animate-pulse" />
          </p>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
