'use client'

import { useState } from 'react'
import { faq } from '@/lib/data'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6" style={{ background: '#FBF6F0' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-3xl text-rose mb-2 reveal"
            style={{ fontFamily: 'var(--font-sacramento)' }}
          >
            Questions fréquentes
          </p>
          <h2
            className="text-4xl sm:text-5xl font-semibold text-ink tracking-tight reveal"
            style={{ fontFamily: 'var(--font-cinzel)' }}
          >
            Dúvidas Frequentes
          </h2>
          <div className="separator mt-6 reveal">✦</div>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="reveal bg-white rounded-xl border border-rose-soft/20 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-rose-pale/30 transition-colors"
              >
                <span
                  className="text-sm font-semibold text-ink pr-4"
                  style={{ fontFamily: 'var(--font-josefin)' }}
                >
                  {item.q}
                </span>
                <span
                  className={`text-rose text-xl transition-transform flex-shrink-0 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-ink-2 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
