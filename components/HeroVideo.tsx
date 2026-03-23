'use client'

import { useRef } from 'react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-navy">
      {/*
        SWAP IN: Replace the src below with Karmy's actual video.
        Recommended: upload to Cloudflare Stream or Mux for fast global delivery.
        Aspect: 16:9 or 9:16 vertical crop works well here.
      */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        src="/hero.mp4"
        poster="/hero-poster.jpg"
      />

      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-12 md:px-10 md:pb-16">
        <p className="font-body text-stone text-[10px] tracking-[0.2em] uppercase mb-5">
          @itsmekarmy
        </p>

        <h1 className="font-display text-display-xl text-cream mb-3 leading-none">
          WHATSUP DOGGOS,
          <br />
          IT&apos;S ME KARMY.
        </h1>

        <p className="font-body text-coral text-sm md:text-base tracking-wide mb-8">
          want to work together?
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-coral text-cream font-body font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#e04a2a] transition-colors duration-[180ms]"
        >
          Work With Karmy
          <span className="text-xs">↗</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 md:right-10 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-cream origin-top animate-[line-in_1.2s_ease-out_1s_both]" />
      </div>
    </section>
  )
}
