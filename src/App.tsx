import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BackgroundEffects } from '@/components/layout/BackgroundEffects'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Certifications } from '@/components/sections/Certifications'
import { Resume } from '@/components/sections/Resume'
import { Achievements } from '@/components/sections/Achievements'
import { GitHubStats } from '@/components/sections/GitHubStats'
import { Contact } from '@/components/sections/Contact'
import { pageTransition } from '@/utils/animations'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        className="relative min-h-screen"
      >
        <BackgroundEffects />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Resume />
          <Achievements />
          <GitHubStats />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  )
}

export default App
