'use client'

import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.15) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const targets = section.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return sectionRef
}
