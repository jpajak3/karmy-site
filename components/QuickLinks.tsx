'use client'

const LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/itsmekarmy',
    external: true,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@itsmekarmy',
    external: true,
  },
  {
    label: 'UGC Packages',
    href: '#work',
    external: false,
  },
  {
    label: 'Work With Karmy',
    href: '#contact',
    external: false,
  },
]

export default function QuickLinks() {
  return (
    <div className="bg-sand border-b border-stone/20 py-4 overflow-x-auto">
      <div className="max-w-site mx-auto px-5 md:px-10">
        <div className="flex items-center gap-3 min-w-max md:min-w-0 md:flex-wrap">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 border border-stone/30 text-navy font-body text-xs tracking-wide px-4 py-2 rounded-full hover:border-coral hover:text-coral transition-colors duration-[180ms] whitespace-nowrap"
            >
              {link.label}
              {link.external && <span className="text-[10px] opacity-60">↗</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
