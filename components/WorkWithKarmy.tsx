'use client'

import { useReveal } from '@/hooks/useReveal'

const OFFERS = [
  {
    id: 'ugc',
    index: '01',
    title: 'UGC\nPACKAGES',
    description:
      'You send the brief, i send the footage. Raw files, no watermarks — your team takes it from there.',
    detail: '3–10 clips per package. 9:16 + 16:9 cuts. Selects + rejects included.',
  },
  {
    id: 'sponsored',
    index: '02',
    title: 'SPONSORED\nPOSTS',
    description:
      'Your product shows up the way everything else does on my feed — naturally. Real audience, no ad energy.',
    detail: 'IG post + story set + optional Reel. Performance report included.',
  },
  {
    id: 'ambassador',
    index: '03',
    title: 'BRAND\nAMBASSADOR',
    description:
      'More than a post. Karmy in your world for a season or more — recurring content, arcs, the whole thing.',
    detail: 'Minimum 3 months. Custom scope built around your calendar.',
  },
]

export default function WorkWithKarmy() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-sand py-20 md:py-32 border-t border-stone/20"
    >
      <div className="max-w-site mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <p
            data-reveal
            className="font-display text-display-sm text-navy/30"
          >
            wanna collab?
          </p>
          <a
            data-reveal
            data-reveal-delay="1"
            href="#contact"
            className="inline-flex items-center gap-2 bg-coral text-cream font-body font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#e04a2a] transition-colors duration-[180ms] self-start md:self-auto"
          >
            Start a conversation ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone/20">
          {OFFERS.map((offer, i) => (
            <div
              key={offer.id}
              data-reveal
              data-reveal-delay={`${i + 1}`}
              className="bg-sand p-8 md:p-10 flex flex-col gap-6 group hover:bg-cream transition-colors duration-[180ms]"
            >
              <p className="font-body text-[10px] text-stone tracking-[0.2em] uppercase">
                {offer.index}
              </p>

              <h3 className="font-display text-display-sm text-navy leading-none whitespace-pre-line">
                {offer.title}
              </h3>

              <p className="font-body text-stone text-sm leading-relaxed flex-1">
                {offer.description}
              </p>

              <div className="border-t border-stone/20 pt-5">
                <p className="font-body text-[11px] text-stone/60 leading-relaxed">
                  {offer.detail}
                </p>
              </div>

              <a
                href="#contact"
                className="font-body text-xs text-coral tracking-widest uppercase hover:gap-2 flex items-center gap-1.5 transition-all duration-[180ms]"
              >
                Inquire
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
