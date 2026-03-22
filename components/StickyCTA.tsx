'use client'

import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 80% of viewport height (hero)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-5 pb-6 pt-3 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none transition-all duration-400 ease-snap ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <a
        href="#contact"
        className={`pointer-events-auto flex items-center justify-center gap-2 w-full bg-coral text-cream font-body font-medium text-sm py-4 rounded-full hover:bg-[#e04a2a] active:scale-[0.98] transition-all duration-[180ms] shadow-lg shadow-navy/30`}
      >
        Work With Karmy ↗
      </a>
    </div>
  )
}
