'use client'

import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '@/hooks/useCountUp'

const STATS = [
  { value: 19.5, suffix: '%', label: 'instagram engagement', decimals: 1 },
  { value: 5, suffix: '%', label: 'tiktok engagement', decimals: 0 },
  { value: 76, suffix: '%', label: 'audience aged 25–44', decimals: 0 },
  { value: 64, suffix: '%', label: 'US + Canada audience', decimals: 0 },
]

const AUDIENCE = [
  { label: 'Top locations', value: 'US 32.9% · Canada 31.2% · UK 8.2% · AU 4.3%' },
  { label: 'Primary age', value: '35–44 (40%)' },
  { label: 'Platforms', value: 'Instagram · TikTok' },
  { label: 'Active partners', value: 'KohlKrew · TinyPaws' },
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
  const scale = decimals > 0 ? Math.pow(10, decimals) : 1
  const rawCount = useCountUp(Math.round(value * scale), 1400, isActive)
  const display = decimals > 0 ? (rawCount / scale).toFixed(decimals) : rawCount.toString()

  return (
    <div
      style={{
        transitionDelay: isActive ? `${delay}ms` : '0ms',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)',
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
          className="font-display text-display-sm text-stone/40 mb-16 md:mb-20"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          yeah, the numbers hit
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16 md:mb-20">
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              isActive={isActive}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Audience breakdown */}
        <div
          className="border-t border-stone/20 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1) 400ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 400ms',
          }}
        >
          {AUDIENCE.map((item) => (
            <div key={item.label}>
              <p className="font-body text-[10px] text-stone/40 tracking-[0.18em] uppercase mb-1.5">
                {item.label}
              </p>
              <p className="font-body text-sand text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
