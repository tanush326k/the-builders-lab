import { useEffect, useReducer } from 'react'

/**
 * Detects the active section as the user scrolls.
 * Returns the id of the section currently in view.
 */
export function useScrollSpy(ids: string[], offset = 80): string {
  const [activeId, setActiveId] = useReducer(
    (_: string, next: string) => next,
    ids[0] ?? ''
  )

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        {
          rootMargin: `-${offset}px 0px -55% 0px`,
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids, offset])

  return activeId
}

