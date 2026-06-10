import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaImage } from 'react-icons/fa'
import { projects } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { staggerContainer, staggerItem } from '@/utils/animations'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Enterprise applications and integrations I've built and contributed to"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <GlassCard className="h-full flex flex-col overflow-hidden group">
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-white/[0.08]`}
                >
                  <div className="absolute inset-0 bg-dark-900/40" />
                  <FaImage className="text-4xl text-white/20 group-hover:text-white/40 transition-colors duration-300" />
                  <span className="absolute bottom-3 right-3 text-xs text-gray-500 font-mono">
                    Screenshot Placeholder
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Features
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-accent-light bg-accent/10 rounded-md border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-white/[0.05] rounded-lg border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-white/[0.05] rounded-lg border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
