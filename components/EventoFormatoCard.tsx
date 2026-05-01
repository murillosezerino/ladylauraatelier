'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type EventoInfo = { label: string; value: string }

type EventoFormato = {
  nome: string
  subtitulo: string
  capacidade: string
  itens: string[]
  infos: EventoInfo[]
  fotos: string[]
  nota?: string
  cta: string
  wppMsg: string
  accent: 'rose' | 'olive' | 'gold'
}

function DiamondBullet({ accent }: { accent: 'rose' | 'olive' | 'gold' }) {
  const colors = {
    rose: 'text-rose-dark/55',
    olive: 'text-olive/70',
    gold: 'text-gold-warm/65',
  }
  return (
    <span className={`mt-1.5 shrink-0 text-[0.5rem] ${colors[accent]}`}>&#9670;</span>
  )
}

export default function EventoFormatoCard({
  formato,
  wppBase,
  delay = 0,
}: {
  formato: EventoFormato
  wppBase: string
  delay?: number
}) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    if (formato.fotos.length <= 1) return
    const id = setInterval(() => {
      setActive((c) => (c + 1) % formato.fotos.length)
    }, 5500)
    return () => clearInterval(id)
  }, [formato.fotos.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) setActive((c) => (c + 1) % formato.fotos.length)
      else setActive((c) => (c === 0 ? formato.fotos.length - 1 : c - 1))
    }
  }

  const isGold = formato.accent === 'gold'
  const isOlive = formato.accent === 'olive'

  const accentColor = isGold ? 'text-gold-warm' : isOlive ? 'text-olive' : 'text-rose-dark'
  const accentBg = isGold ? 'bg-gold-warm' : 'bg-rose-dark'
  const accentHoverBg = isGold ? 'hover:bg-gold-light' : 'hover:bg-rose-deep'
  const cardBg = isGold ? 'bg-primary' : 'bg-white'
  const cardBorder = isGold ? 'border-gold-warm/15' : 'border-rose/10'
  const headerText = isGold ? 'text-gold-warm' : 'text-primary'
  const subtitleText = isGold ? 'text-gold-warm/60' : `${accentColor}/65`
  const capacityText = isGold ? 'text-white/45' : 'text-ink-3'
  const incluidoText = isGold ? 'text-gold-warm/55' : 'text-ink-3'
  const itemText = isGold ? 'text-white/65' : 'text-ink-2'
  const notaText = isGold ? 'text-white/35' : 'text-ink-4'
  const dividerBorder = isGold ? 'border-white/10' : 'border-rose/8'
  const infoLabel = isGold ? 'text-gold-warm/45' : 'text-ink-3'
  const infoValue = isGold ? 'text-white/75' : 'text-primary'
  const ctaText = isGold ? 'text-primary font-semibold' : 'text-white font-medium'

  return (
    <div
      className={`reveal card-lift rounded-[2rem] overflow-hidden border ${cardBorder} ${cardBg} flex flex-col shadow-sm shadow-rose/8 hover:shadow-2xl hover:shadow-rose/15 transition-all duration-500 group`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Photo carousel */}
      <div
        className="relative aspect-[4/3] overflow-hidden bg-rose-pale"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {formato.fotos.map((src, i) => (
            <div key={i} className="relative w-full flex-none h-full">
              <Image
                src={src}
                alt={`${formato.nome} ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Capacity badge — top right */}
        <div className="absolute top-5 right-5 backdrop-blur-md bg-white/85 border border-white/40 rounded-full px-4 py-2 shadow-lg shadow-black/10 flex items-center gap-2">
          <svg className={`w-3.5 h-3.5 ${accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
          <p className="text-[0.6rem] tracking-[0.15em] uppercase font-sans font-semibold text-primary leading-tight">
            {formato.capacidade}
          </p>
        </div>

        {/* Subtitle pill — bottom left */}
        <div className="absolute bottom-5 left-5">
          <p className={`text-[0.55rem] tracking-[0.35em] uppercase text-white/85 font-sans font-medium drop-shadow-md`}>
            {formato.subtitulo}
          </p>
          <p className="font-serif text-3xl text-white drop-shadow-md mt-1">
            {formato.nome}
          </p>
        </div>

        {/* Dot indicators — bottom right */}
        {formato.fotos.length > 1 && (
          <div className="absolute bottom-5 right-5 flex gap-1.5">
            {formato.fotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Foto ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? 'bg-white w-6' : 'bg-white/50 w-1.5 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Items */}
      <div className="px-7 pt-7 pb-6 flex-1">
        <p className={`text-[0.55rem] tracking-[0.3em] uppercase ${incluidoText} font-sans font-semibold mb-4`}>Incluso</p>
        <ul className={`space-y-2.5 ${itemText} text-[0.875rem] font-sans leading-relaxed`}>
          {formato.itens.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <DiamondBullet accent={formato.accent} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {formato.nota && (
          <p className={`mt-5 text-xs italic font-sans leading-relaxed ${notaText} border-t ${dividerBorder} pt-4`}>
            {formato.nota}
          </p>
        )}
      </div>

      {/* Info row */}
      <div className="px-7 pb-6">
        <div className={`grid grid-cols-3 gap-2 pt-5 border-t ${dividerBorder}`}>
          {formato.infos.map((info) => (
            <div key={info.label} className="flex flex-col gap-1 min-w-0">
              <span className={`text-[0.5rem] tracking-[0.18em] uppercase ${infoLabel} font-sans font-medium`}>
                {info.label}
              </span>
              <span className={`text-xs font-sans font-medium ${infoValue} truncate`} title={info.value}>
                {info.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={`${wppBase}${encodeURIComponent(formato.wppMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-shine block text-center ${accentBg} ${ctaText} font-sans text-[0.7rem] tracking-[0.14em] uppercase px-6 py-4 mx-7 mb-7 rounded-full ${accentHoverBg} transition-all hover:scale-[1.02] shadow-lg ${isGold ? 'shadow-gold-warm/20' : 'shadow-rose-dark/15'}`}
      >
        {formato.cta}
      </a>
    </div>
  )
}

export type { EventoFormato }
