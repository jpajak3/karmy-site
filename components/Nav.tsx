'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-snap ${
        scrolled
          ? 'bg-sand/95 backdrop-blur-sm border-b border-stone/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <span
          className={`font-display text-2xl tracking-wide transition-colors duration-400 ${
            scrolled ? 'text-navy' : 'text-cream'
          }`}
        >
          KARMY
        </span>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/itsmekarmy"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body text-xs tracking-widest uppercase transition-colors duration-400 hover:text-coral ${
              scrolled ? 'text-stone' : 'text-cream/70'
            }`}
          >
            @itsmekarmy
          </a>

          {/* Desktop CTA — appears after scrolling past hero */}
          <a
            href="#contact"
            className={`hidden md:inline-flex items-center gap-1.5 bg-coral text-cream font-body font-medium text-xs px-5 py-2.5 rounded-full hover:bg-[#e04a2a] transition-all duration-[180ms] ${
              scrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            Work With Karmy
          </a>
        </div>
      </div>
    </header>
  )
}
