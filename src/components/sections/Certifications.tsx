import { motion } from 'framer-motion'
import { FaCertificate, FaClock, FaCheckCircle } from 'react-icons/fa'
import { certifications } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { staggerContainer, staggerItem } from '@/utils/animations'

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={staggerItem}>
              <GlassCard className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <FaCertificate className="text-2xl text-accent-light" />
                  </div>
                  {cert.status === 'completed' ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                      <FaCheckCircle className="text-[10px]" />
                      Completed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20">
                      <FaClock className="text-[10px]" />
                      Planned
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-accent-light text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{cert.description}</p>
                <p className="text-gray-500 text-xs mt-4 font-mono">{cert.year}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
