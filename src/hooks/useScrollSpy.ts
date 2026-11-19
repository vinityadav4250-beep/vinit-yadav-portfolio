import { useEffect, useState } from 'react'

/** Returns the id of the section currently occupying the upper-middle of the viewport. */
export function useScrollSpy(sectionIds: string[]) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    const hero = document.getElementById('home')
    if (hero) observer.observe(hero)

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
