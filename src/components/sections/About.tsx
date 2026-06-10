import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa'
import { personalInfo } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/utils/animations'

const highlights = [
  {
    icon: FaBriefcase,
    title: '4+ Years',
    subtitle: 'Professional Experience',
    color: 'text-accent-light',
  },
  {
    icon: FaCode,
    title: 'Full Stack',
    subtitle: '.NET & React Specialist',
    color: 'text-cyan-accent',
  },
  {
    icon: FaRocket,
    title: personalInfo.company,
    subtitle: 'Current Company',
    color: 'text-emerald-400',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Noida',
    subtitle: 'Uttar Pradesh, India',
    color: 'text-orange-400',
  },
]

const strengths = [
  'Enterprise Application Development',
  'Third-Party API Integrations',
  'CKYC & Insurance Domain Expertise',
  'Scalable Backend Architecture',
  'Performance Optimization',
  'Authentication & Security Systems',
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer building enterprise-grade solutions"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard className="p-8 md:p-10" hover={false}>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {personalInfo.about.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.08]">
                <h3 className="text-white font-semibold mb-4">Key Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {strengths.map((strength) => (
                    <div key={strength} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {strength}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <GlassCard className="p-6 text-center h-full">
                  <item.icon className={`text-3xl mx-auto mb-3 ${item.color}`} />
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
