'use client'

import { siteConfig } from '@/lib/data'
import Image from 'next/image'
import { useState } from 'react'

export default function NossasCasas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const hasHover = hoveredCard !== null

  return (
    <section id="nossas-casas" className="py-24 px-6 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: hasHover ? 'transparent' : '#ffffff' }}>
      {/* Background images that appear on card hover */}
      {siteConfig.addresses.map((addr, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{ opacity: hoveredCard === i ? 1 : 0 }}
        >
          <Image
            src={addr.photo}
            alt={addr.city}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-rose-pale/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className={`text-[0.6rem] tracking-[0.5em] uppercase font-sans font-medium mb-4 transition-colors duration-500 ${hasHover ? 'text-rose-soft' : 'text-rose-dark'}`}>
            Nos Maisons
          </p>
          <h2 className={`font-serif text-3xl md:text-5xl mb-6 transition-colors duration-500 ${hasHover ? 'text-white' : 'text-primary'}`}>
            Nossas Casas
          </h2>
          <div className="ornament mb-6">
            <svg className={`w-3 h-3 transition-colors duration-500 ${hasHover ? 'text-white/40' : 'text-rose-dark/50'}`} viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
          </div>
          <div className={`max-w-2xl mx-auto space-y-4 font-sans text-[0.95rem] leading-relaxed transition-colors duration-500 ${hasHover ? 'text-white/75' : 'text-ink-2'}`}>
            <p>Nossos bistrôs são extensões daquilo que acreditamos: boa comida, tempo de qualidade e experiências que ficam na memória.</p>
            <p>Em cada unidade, você encontra um ambiente acolhedor, com um menu cuidadosamente elaborado que reúne diversas opções para o seu brunch, doces autorais e carta de vinhos especiais.</p>
            <p>Um convite para desfrutar com calma, seja em encontros, celebrações ou momentos só seus.</p>
            <p className={`font-medium text-sm italic transition-colors duration-500 ${hasHover ? 'text-rose-soft' : 'text-rose-dark'}`}>Consulte horários de funcionamento</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.addresses.map((addr, i) => (
            <div
              key={i}
              className={`reveal card-lift rounded-[1.75rem] overflow-hidden border transition-all duration-500 ${
                hasHover
                  ? 'bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40'
                  : 'bg-base border-rose/10 hover:border-rose/25'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Map */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                <iframe
                  src={addr.embedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${addr.city}`}
                />
              </div>

              {/* Info */}
              <div className="p-7 sm:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-500 ${
                    hasHover ? 'bg-white/15' : 'bg-rose-pale/50'
                  }`}>
                    <svg className={`w-4.5 h-4.5 transition-colors duration-500 ${hasHover ? 'text-white' : 'text-rose-dark'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-serif text-2xl mb-1 transition-colors duration-500 ${hasHover ? 'text-white' : 'text-primary'}`}>{addr.city}</h3>
                    <p className={`text-sm font-sans transition-colors duration-500 ${hasHover ? 'text-white/70' : 'text-ink-2'}`}>{addr.street}</p>
                    <p className={`text-xs font-sans mt-0.5 transition-colors duration-500 ${hasHover ? 'text-white/50' : 'text-ink-4'}`}>{addr.neighborhood}</p>
                  </div>
                </div>

                <a
                  href={addr.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase font-sans font-medium hover:gap-3 transition-all duration-400 ${
                    hasHover ? 'text-rose-soft hover:text-white' : 'text-rose-dark'
                  }`}
                >
                  Como chegar
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
