import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BackgroundEffects } from '@/components/layout/BackgroundEffects'
import { LoadingScreen } from '@/components/ui/LoadingScreen'
import { Hero, About, Impact, Stack, Experience, Projects, Certifications, Contact } from '@/components/sections'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { scrollToSection } from '@/utils/scrollTo'

function App() {
  const [loading, setLoading] = useState(true)
  useSmoothScroll()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => setLoading(false), reduce ? 0 : 1100)
    return () => clearTimeout(t)
  }, [])

  // Honour deep links like /#projects once the loader is gone
  useEffect(() => {
    if (!loading && window.location.hash.length > 1) {
      const hash = window.location.hash
      requestAnimationFrame(() => scrollToSection(hash))
    }
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-zinc-50 focus:px-4 focus:py-2 focus:text-sm focus:text-ink-950"
      >
        Skip to content
      </a>

      <AnimatePresence>{loading && <LoadingScreen key="loader" />}</AnimatePresence>

      <BackgroundEffects />
      <Navbar />

      <main id="main" className="overflow-x-clip">
        <Hero ready={!loading} />
        <About />
        <Impact />
        <Stack />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}

export default App
