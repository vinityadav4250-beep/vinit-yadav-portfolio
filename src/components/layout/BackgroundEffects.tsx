import { useEffect, useRef } from 'react'

/**
 * Fixed page backdrop: faint grid, two soft aurora glows, film grain,
 * and a cursor-following glow (fine pointers only, disabled for reduced motion).
 */
export function BackgroundEffects() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = glowRef.current
    if (!fine || reduce || !el) return

    let frame = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 3
    let cx = tx
    let cy = ty

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const tick = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`
      frame = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(tick) : 0
    }

    el.style.opacity = '1'
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_80%)]" />
      <div className="absolute -top-[30%] left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.20),transparent)] blur-2xl" />
      <div className="absolute -right-[15%] top-[35%] h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.07),transparent)] blur-2xl" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700 will-change-transform"
        style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.10), transparent)' }}
      />
    </div>
  )
}
