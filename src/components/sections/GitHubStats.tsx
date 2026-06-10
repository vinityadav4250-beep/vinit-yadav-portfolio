import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa'
import { githubStats, personalInfo } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations'

const stats = [
  { icon: FaStar, label: 'Repositories', value: '15+' },
  { icon: FaCodeBranch, label: 'Contributions', value: '500+' },
  { icon: FaUsers, label: 'Followers', value: '50+' },
]

export function GitHubStats() {
  return (
    <section id="github" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open source contributions and coding activity"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard className="p-6 md:p-8 h-full" hover={false}>
              <div className="flex items-center gap-3 mb-6">
                <FaGithub className="text-2xl text-white" />
                <div>
                  <h3 className="text-white font-bold">Contribution Graph</h3>
                  <p className="text-gray-500 text-sm">@{githubStats.username}</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-dark-800/50 p-4">
                <img
                  src={`https://ghchart.rshah.org/${githubStats.username}`}
                  alt="GitHub Contribution Chart"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-accent-light hover:text-white transition-colors"
                whileHover={{ x: 4 }}
              >
                View GitHub Profile →
              </motion.a>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-6"
          >
            <motion.div variants={staggerItem}>
              <GlassCard className="p-6 md:p-8" hover={false}>
                <h3 className="text-white font-bold mb-6">GitHub Stats</h3>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon className="text-xl text-accent-light mx-auto mb-2" />
                      <span className="block text-2xl font-bold text-white">{stat.value}</span>
                      <span className="text-xs text-gray-500">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={staggerItem}>
              <GlassCard className="p-6 md:p-8" hover={false}>
                <h3 className="text-white font-bold mb-6">Most Used Languages</h3>
                <div className="space-y-4">
                  {githubStats.languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-medium">{lang.name}</span>
                        <span className="text-gray-500">{lang.percentage}%</span>
                      </div>
                      <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: lang.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
