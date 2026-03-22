'use client'

import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const sectionRef = useReveal()
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    brand: '',
    email: '',
    message: '',
  })

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-navy py-20 md:py-32"
    >
      <div className="max-w-site mx-auto px-5 md:px-10">
        <p
          data-reveal
          className="font-display text-display-sm text-stone/40 mb-4"
        >
          slide into my dms
        </p>
        <p
          data-reveal
          data-reveal-delay="1"
          className="font-body text-stone text-sm mb-16"
        >
          UGC briefs, partnership pitches, ambassador interest. all of it.
        </p>

        <div className="max-w-form">
          {state === 'success' ? (
            <div
              data-reveal
              className="py-12 border-t border-stone/20"
            >
              <p className="font-display text-display-sm text-sand leading-none mb-3">
                GOT IT.
              </p>
              <p className="font-body text-stone text-sm">
                i&apos;ll sniff it out and get back to you.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Row: Name + Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] text-stone tracking-[0.15em] uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your name"
                    className="bg-cream/5 border border-stone/20 text-sand font-body text-sm px-4 py-3 rounded-sm placeholder:text-stone/30 focus:outline-none focus:border-coral transition-colors duration-[180ms]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] text-stone tracking-[0.15em] uppercase">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={form.brand}
                    onChange={set('brand')}
                    placeholder="Brand name"
                    className="bg-cream/5 border border-stone/20 text-sand font-body text-sm px-4 py-3 rounded-sm placeholder:text-stone/30 focus:outline-none focus:border-coral transition-colors duration-[180ms]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-[10px] text-stone tracking-[0.15em] uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@brand.com"
                  className="bg-cream/5 border border-stone/20 text-sand font-body text-sm px-4 py-3 rounded-sm placeholder:text-stone/30 focus:outline-none focus:border-coral transition-colors duration-[180ms]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-[10px] text-stone tracking-[0.15em] uppercase">
                  Message{' '}
                  <span className="text-stone/40 normal-case tracking-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Brief, timeline, what you have in mind..."
                  rows={4}
                  className="bg-cream/5 border border-stone/20 text-sand font-body text-sm px-4 py-3 rounded-sm placeholder:text-stone/30 focus:outline-none focus:border-coral transition-colors duration-[180ms] resize-none"
                />
              </div>

              {state === 'error' && (
                <p className="font-body text-coral text-xs">
                  Something went wrong — try emailing directly below.
                </p>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="inline-flex items-center gap-2 bg-coral text-cream font-body font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#e04a2a] transition-colors duration-[180ms] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? 'Sending...' : 'Send It ↗'}
                </button>

                <span className="font-body text-[11px] text-stone/40 tracking-wide">
                  or{' '}
                  <a
                    href="mailto:hello@itsmekarmy.com"
                    className="text-stone hover:text-coral transition-colors duration-[180ms] underline underline-offset-2"
                  >
                    email direct
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
