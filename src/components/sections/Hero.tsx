import { motion } from 'framer-motion'
import { HiDownload, HiMail, HiCode } from 'react-icons/hi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo, typingRoles } from '@/data/portfolio'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations'
import { scrollToSection } from '@/utils/scrollTo'

export function Hero() {
  const typedText = useTypingEffect(typingRoles)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-sm text-gray-400 font-medium">
              Available for opportunities
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-sm text-gray-400">
              <FaMapMarkerAlt className="text-accent-light" />
              {personalInfo.location}
            </span>
          </motion.div>

          <motion.p variants={staggerItem} className="text-accent-light font-mono text-sm md:text-base mb-4">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          >
            {personalInfo.name.split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-accent-light via-cyan-accent to-accent bg-clip-text text-transparent">
              {personalInfo.name.split(' ')[1]}
            </span>
          </motion.h1>

          <motion.div variants={staggerItem} className="h-10 md:h-12 mb-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
              <span className="text-white">{typedText}</span>
              <span className="animate-pulse text-accent-light">|</span>
            </p>
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
          >
            {personalInfo.headline}
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
          >
            {personalInfo.subheadline}
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
            <Button
              href={personalInfo.resumeUrl}
              downloadName={personalInfo.resumeFileName}
              variant="primary"
            >
              <HiDownload size={18} />
              Download Resume
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection('#contact')}>
              <HiMail size={18} />
              Contact Me
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('#projects')}>
              <HiCode size={18} />
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 flex items-center gap-8 text-sm text-gray-500"
          >
            <div>
              <span className="block text-2xl font-bold text-white">4+</span>
              Years Experience
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <span className="block text-2xl font-bold text-white">10+</span>
              Projects Delivered
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="hidden sm:block">
              <span className="block text-2xl font-bold text-white">500+</span>
              LinkedIn Network
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
