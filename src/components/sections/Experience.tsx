import { motion } from 'framer-motion'
import { FaBuilding } from 'react-icons/fa'
import { experiences } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations'

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey in enterprise software development"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div key={exp.company} variants={staggerItem} className="relative mb-8 last:mb-0">
              <div className="absolute left-6 w-4 h-4 rounded-full bg-accent border-4 border-dark-900 hidden md:block z-10" />

              <GlassCard className="md:ml-16 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                      <FaBuilding className="text-accent-light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-accent-light font-medium">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                      {exp.period}
                    </span>
                    <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {index === 0 && (
                  <div className="mt-6 pt-6 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-2">
                      {['Insurance Domain', 'CKYC', 'REST APIs', 'SQL Server', 'Authentication'].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/[0.05] rounded-full border border-white/[0.08]"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
