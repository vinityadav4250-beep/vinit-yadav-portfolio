import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { personalInfo } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { fadeInLeft, fadeInRight } from '@/utils/animations'

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: 'hover:text-blue-400' },
  { icon: FaGithub, label: 'GitHub', href: personalInfo.github, color: 'hover:text-white' },
  { icon: FaEnvelope, label: 'Email', href: `mailto:${personalInfo.email}`, color: 'hover:text-accent-light' },
]

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${formState.email}`
    window.location.href = mailtoLink
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to new opportunities, collaborations, and interesting projects"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard className="p-8 md:p-10 h-full" hover={false}>
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I&apos;m always interested in hearing about new opportunities, whether it&apos;s a
                full-time role, freelance project, or just a chat about technology. Feel free to
                reach out!
              </p>

              <div className="space-y-4 mb-8">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-300 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] ${link.color}`}
                    whileHover={{ x: 4 }}
                  >
                    <link.icon className="text-xl" />
                    <div>
                      <span className="block text-sm text-gray-500">{link.label}</span>
                      <span className="font-medium">{link.href.replace('https://', '').replace('mailto:', '')}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <p className="text-sm text-gray-400">
                  <span className="text-accent-light font-semibold">Location:</span>{' '}
                  {personalInfo.location}
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard className="p-8 md:p-10" hover={false}>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <FaPaperPlane size={16} />
                  {isSubmitted ? 'Opening Email Client...' : 'Send Message'}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
