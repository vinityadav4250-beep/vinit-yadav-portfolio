import { motion } from 'framer-motion'
import { HiDownload, HiDocumentText, HiEye } from 'react-icons/hi'
import { personalInfo } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations'

const highlights = [
  '4+ Years of .NET Development Experience',
  'ASP.NET Core, React.js & SQL Server',
  'Enterprise Insurance & CKYC Integrations',
  'REST APIs & Authentication Systems',
]

export function Resume() {
  return (
    <section id="resume" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resume"
          subtitle="Download my resume for recruiters and hiring managers"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          <motion.div variants={staggerItem}>
            <GlassCard className="p-8 md:p-10 h-full" hover={false}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20">
                  <HiDocumentText className="text-3xl text-accent-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-accent-light font-medium">{personalInfo.title}</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {personalInfo.resumeTitle}. Includes experience at {personalInfo.company},
                technical skills, projects, and contact details.
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={personalInfo.resumeUrl}
                  downloadName={personalInfo.resumeFileName}
                  variant="primary"
                  className="flex-1"
                >
                  <HiDownload size={18} />
                  Download Resume (PDF)
                </Button>
                <Button
                  href={personalInfo.resumeUrl}
                  variant="outline"
                  target="_blank"
                  className="flex-1"
                >
                  <HiEye size={18} />
                  View in Browser
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4 font-mono">
                File: {personalInfo.resumeFileName}
              </p>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassCard className="overflow-hidden" hover={false}>
              <div className="p-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                <span className="text-sm text-gray-400 font-medium">Resume Preview</span>
                <span className="text-xs text-gray-500 font-mono">PDF</span>
              </div>
              <div className="relative bg-dark-800/50 min-h-[480px] md:min-h-[560px]">
                <iframe
                  src={`${personalInfo.resumeUrl}#toolbar=0`}
                  title={personalInfo.resumeTitle}
                  className="w-full h-[480px] md:h-[560px] border-0"
                />
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
