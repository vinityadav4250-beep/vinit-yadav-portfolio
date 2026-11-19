import type Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function registerLenis(instance: Lenis | null) {
  lenisInstance = instance
}

const NAV_OFFSET = -80

/** Smoothly scroll to an in-page anchor like "#projects". Uses Lenis when active. */
export function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const element = id === 'home' ? document.body : document.getElementById(id)
  if (!element) return

  if (lenisInstance) {
    lenisInstance.scrollTo(id === 'home' ? 0 : element, { offset: NAV_OFFSET, duration: 1.2 })
  } else {
    const top = id === 'home' ? 0 : element.getBoundingClientRect().top + window.scrollY + NAV_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }

  if (history.replaceState) history.replaceState(null, '', id === 'home' ? ' ' : `#${id}`)
}
