'use client'

import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '@/hooks/useCountUp'

const STATS = [
  { value: 2.4, suffix: 'M', label: 'eyes on content', decimals: 1 },
  { value: 8.3, suffix: '%', label: 'avg engagement rate', decimals: 1 },
  { value: 34, suffix: '+', label: 'brands on the roster', decimals: 0 },
  { value: 200, suffix: '+', label: 'clips delivered', decimals: 0 },
]

function StatItem({
  value,
  suffix,
  label,
  decimals,
  isActive,
  delay,
}: {
  value: number
  suffix: string
  label: string
  decimals: number
  isActive: boolean
  delay: number
}) {
  // For decimal values, scale up so countup works with integers
  const scale = decimals > 0 ? Math.pow(10, decimals) : 1
  const rawCount = useCountUp(Math.round(value * scale), 1400, isActive)
  const display = decimals > 0 ? (rawCount / scale).toFixed(decimals) : rawCount.toString()

  return (
    <div
      className="opacity-0 translate-y-5 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDelay: isActive ? `${delay}ms` : '0ms',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <div className="font-display text-stat text-sand leading-none tabular-nums">
        {display}
        <span className="text-coral">{suffix}</span>
      </div>
      <p className="font-body text-stone text-[11px] tracking-[0.15em] uppercase mt-3">
        {label}
      </p>
    </div>
  )
}

export default function ByTheNumbers() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-navy py-20 md:py-32">
      <div className="max-w-narrow mx-auto px-5 md:px-10">
        <p
          className="font-display text-display-sm text-stone/40 mb-16 md:mb-20 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          yeah, the numbers hit
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              isActive={isActive}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
