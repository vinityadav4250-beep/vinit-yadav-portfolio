import { useEffect } from 'react'
import Lenis from 'lenis'
import { registerLenis } from '@/utils/scrollTo'

/** Lenis smooth scrolling — disabled for reduced motion and touch-first devices. */
export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduce || coarse) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    registerLenis(lenis)

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      registerLenis(null)
      lenis.destroy()
    }
  }, [])
}
