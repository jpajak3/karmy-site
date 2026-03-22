'use client'

import { useRef, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const PILLARS = [
  {
    id: 'product-testing',
    label: '01',
    title: 'PRODUCT\nTESTING',
    description: 'You brief it, i use it. Real reactions — no script, no retakes, no polish. That\'s the point.',
    // SWAP: replace with actual Karmy product testing clip
    video: '/videos/product-testing.mp4',
    poster: '/posters/product-testing.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'adventure',
    label: '02',
    title: 'ADVENTURE\nCONTENT',
    description: 'Coastal. Off-trail. Wide open. Wherever your product belongs, i\'ll take it there.',
    // SWAP: replace with actual adventure clip
    video: '/videos/adventure.mp4',
    poster: '/posters/adventure.jpg',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'object-interaction',
    label: '03',
    title: 'OBJECT\nINTERACTION',
    description: 'The frisbee. The coconut. The combo. Native UGC that stops the scroll.',
    // SWAP: replace with actual object interaction clip
    video: '/videos/object.mp4',
    poster: '/posters/object.jpg',
    aspect: 'aspect-[1/1]',
  },
]

function PillarCard({
  pillar,
}: {
  pillar: (typeof PILLARS)[0]
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handleEnter = () => {
    videoRef.current?.play()
    setPlaying(true)
  }

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setPlaying(false)
  }

  return (
    <div
      data-reveal
      className="group flex flex-col gap-5"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
    >
      {/* Video container */}
      <div className={`relative overflow-hidden rounded-md bg-navy/10 ${pillar.aspect}`}>
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
          src={pillar.video}
          poster={pillar.poster}
        />

        {/* Poster / placeholder */}
        <div
          className={`absolute inset-0 bg-navy/5 transition-opacity duration-200 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url(${pillar.poster})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Play hint */}
        <div
          className={`absolute bottom-4 right-4 transition-opacity duration-200 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M0 0L10 6L0 12V0Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="font-body text-[10px] text-stone tracking-[0.2em] uppercase mb-2">
          {pillar.label}
        </p>
        <h3 className="font-display text-display-sm text-navy leading-none mb-3 whitespace-pre-line">
          {pillar.title}
        </h3>
        <p className="font-body text-stone text-sm leading-relaxed max-w-[220px]">
          {pillar.description}
        </p>
      </div>
    </div>
  )
}

export default function WhatKarmyDoes() {
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-sand py-20 md:py-32"
    >
      <div className="max-w-site mx-auto px-5 md:px-10">
        <p
          data-reveal
          className="font-display text-display-sm text-navy/30 mb-16 md:mb-20"
        >
          here&apos;s what i bring
        </p>

        {/* Asymmetric 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1.3fr_1fr] gap-8 md:gap-10 items-start">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.id}
              data-reveal
              data-reveal-delay={`${i + 1}`}
              style={{ marginTop: i === 1 ? '3rem' : i === 2 ? '6rem' : '0' }}
            >
              <PillarCard pillar={pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
