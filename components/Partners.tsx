'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

const PARTNERS = [
  {
    name: 'KohlKrew',
    description: 'handmade dog toys',
    href: 'https://www.instagram.com/kohlkrewco/',
    logo: null, // drop kohlkrew.png into /public/logos/ when available
  },
  {
    name: 'TinyPaws',
    description: 'premium pet wellness',
    href: 'https://thetinypaws.com',
    logo: '/logos/tinypaws.webp',
  },
]

export default function Partners() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-sand py-14 md:py-20 border-t border-stone/20"
    >
      <div className="max-w-site mx-auto px-5 md:px-10">
        <p
          data-reveal
          className="font-body text-[10px] text-stone tracking-[0.2em] uppercase mb-8"
        >
          brands i run with
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="group flex items-center gap-4 border border-stone/25 rounded-md px-6 py-5 hover:border-coral transition-colors duration-[180ms]"
            >
              <div className="w-12 h-12 flex-none flex items-center justify-center">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-stone/15 flex items-center justify-center group-hover:bg-coral/10 transition-colors duration-[180ms]">
                    <span className="font-display text-sm text-navy">
                      {partner.name[0]}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-display text-navy text-xl leading-none">
                  {partner.name}
                </p>
                <p className="font-body text-stone text-[11px] tracking-wide mt-0.5">
                  {partner.description}
                </p>
              </div>
              <span className="ml-auto text-stone/30 group-hover:text-coral text-xs transition-colors duration-[180ms]">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
