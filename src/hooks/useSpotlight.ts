import { useCallback } from 'react'
import type { MouseEvent } from 'react'

/** Sets --x / --y CSS vars on the hovered element so `.spotlight` can follow the cursor. */
export function useSpotlight<T extends HTMLElement>() {
  return useCallback((e: MouseEvent<T>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }, [])
}
