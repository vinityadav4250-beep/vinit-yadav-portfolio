import { motion } from 'framer-motion'
import { achievements } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { staggerContainer, staggerItem } from '@/utils/animations'

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and impact in my professional journey"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.label} variants={staggerItem}>
              <GlassCard className="p-8 text-center h-full">
                <motion.span
                  className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-light to-cyan-accent bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  {achievement.value}
                </motion.span>
                <h3 className="text-white font-semibold text-lg mb-2">{achievement.label}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
