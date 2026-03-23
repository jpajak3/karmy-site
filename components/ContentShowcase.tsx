'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

// SWAP: replace src/poster/thumb with actual Karmy content
// type: 'video' → needs src (.mp4) + thumb (.jpg)
// type: 'photo' → needs src (.jpg/.png), thumb can be same as src
const CONTENT = [
  {
    id: 'c1',
    type: 'video' as const,
    src: '/videos/showcase-1.mp4',
    thumb: '/thumbs/showcase-1.jpg',
    aspect: 'aspect-[9/16]',
    colSpan: 'col-span-1',
  },
  {
    id: 'c2',
    type: 'photo' as const,
    src: '/photos/showcase-1.jpg',
    thumb: '/photos/showcase-1.jpg',
    aspect: 'aspect-[16/9]',
    colSpan: 'col-span-2',
  },
  {
    id: 'c3',
    type: 'video' as const,
    src: '/videos/showcase-2.mp4',
    thumb: '/thumbs/showcase-2.jpg',
    aspect: 'aspect-[4/5]',
    colSpan: 'col-span-1',
  },
  {
    id: 'c4',
    type: 'photo' as const,
    src: '/photos/showcase-2.jpg',
    thumb: '/photos/showcase-2.jpg',
    aspect: 'aspect-[4/5]',
    colSpan: 'col-span-1',
  },
  {
    id: 'c5',
    type: 'video' as const,
    src: '/videos/showcase-3.mp4',
    thumb: '/thumbs/showcase-3.jpg',
    aspect: 'aspect-[4/5]',
    colSpan: 'col-span-1',
  },
]

function LightboxModal({
  item,
  onClose,
}: {
  item: { src: string; type: 'video' | 'photo' }
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-navy/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            autoPlay
            controls
            playsInline
            className="w-full h-full max-h-[85vh] object-contain rounded-md"
            src={item.src}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt="Karmy content"
            className="w-full h-full max-h-[85vh] object-contain rounded-md"
          />
        )}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-cream/60 hover:text-cream font-body text-sm tracking-widest uppercase transition-colors"
        >
          close ×
        </button>
      </div>
    </div>
  )
}

function ContentCard({
  item,
  onOpen,
}: {
  item: (typeof CONTENT)[0]
  onOpen: (src: string, type: 'video' | 'photo') => void
}) {
  return (
    <div
      data-reveal
      className={`${item.colSpan} cursor-pointer group relative overflow-hidden rounded-md bg-navy/10 ${item.aspect}`}
      onClick={() => onOpen(item.src, item.type)}
    >
      {/* Thumbnail */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-snap group-hover:scale-[1.03]"
        style={{ backgroundImage: `url(${item.thumb})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />

      {/* Play button — only for video */}
      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-12 h-12 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center border border-cream/30">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M0 0L14 8L0 16V0Z" fill="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ContentShowcase() {
  const [activeItem, setActiveItem] = useState<{ src: string; type: 'video' | 'photo' } | null>(null)
  const sectionRef = useReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-cream py-20 md:py-32"
    >
      <div className="max-w-site mx-auto px-5 md:px-10">
        <p
          data-reveal
          className="font-display text-display-sm text-navy/30 mb-12 md:mb-16"
        >
          the actual work
        </p>

        {/* Desktop: asymmetric editorial grid */}
        <div className="hidden md:grid grid-cols-3 gap-4 auto-rows-auto">
          {CONTENT.map((item) => (
            <ContentCard key={item.id} item={item} onOpen={(src, type) => setActiveItem({ src, type })} />
          ))}
        </div>

        {/* Mobile: horizontal scroll strip */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory">
          {CONTENT.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[70vw] snap-start cursor-pointer relative overflow-hidden rounded-md bg-navy/10 aspect-[9/16]"
              onClick={() => setActiveItem({ src: item.src, type: item.type })}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${item.thumb})` }}
              />
              <div className="absolute inset-0 flex items-end p-4">
                {item.type === 'video' && (
                  <div className="w-9 h-9 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M0 0L10 6L0 12V0Z" fill="white" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeItem && (
        <LightboxModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </section>
  )
}
