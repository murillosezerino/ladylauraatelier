'use client'

import { testimonials } from '@/lib/data'
import { useState } from 'react'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section id="avaliacoes" className="py-20 lg:py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-pale/30 rounded-full blur-3xl pointer-events-none blob-pulse" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16 reveal">
          <p className="text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-5">
            Témoignages
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-8">
            O que dizem sobre nós
          </h2>
          <div className="ornament">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/40" />
          </div>
        </div>

        {/* Large single testimonial */}
        <div className="reveal text-center">
          {/* Large quote mark */}
          <span className="quote-mark block mb-4 select-none">&ldquo;</span>

          {/* Quote text with transition */}
          <p className="font-serif text-2xl md:text-3xl lg:text-[2rem] text-primary leading-[1.5] mb-10 transition-opacity duration-500 max-w-2xl mx-auto italic">
            {t.text}
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose to-rose-blush flex items-center justify-center text-rose-dark font-serif font-medium text-lg">
              {t.name[0]}
            </div>
            <div className="text-left">
              <p className="font-sans font-medium text-primary">{t.name}</p>
              <p className="text-xs text-ink-3 font-sans">{t.city}</p>
            </div>
          </div>

          {/* Dots navigator */}
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-400 ${
                  active === i
                    ? 'w-8 h-2 bg-rose-dark'
                    : 'w-2 h-2 bg-rose/40 hover:bg-rose-dark/50'
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>

          {/* Star rating */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: t.stars }).map((_, j) => (
              <svg key={j} className="w-4 h-4 text-rose-dark/60" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
