'use client'

import Image from 'next/image'
import { editorial } from '@/lib/data'
import { useEffect, useState } from 'react'

function AnimatedNumber({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let frame: number
    const start = performance.now()
    const duration = 2000
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, target])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    const el = document.getElementById(`counter-${label}`)
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [label])

  return (
    <div id={`counter-${label}`} className="text-center">
      <p className="font-serif text-5xl lg:text-6xl text-white font-light mb-1">{count}+</p>
      <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50 font-sans">{label}</p>
    </div>
  )
}

export default function Editorial() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed editorial layout */}
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Image side */}
        <div className="relative min-h-[400px] lg:min-h-0 reveal-left img-ken-burns">
          <Image
            src={editorial.image}
            alt="Chef Thay Chagas montando sobremesas"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 lg:to-base/20" />
        </div>

        {/* Text side */}
        <div className="bg-white px-8 lg:px-20 py-20 lg:py-28 flex flex-col justify-center">
          <div className="max-w-lg">
            <p className="reveal text-[0.6rem] tracking-[0.5em] uppercase text-rose-dark font-sans font-medium mb-6">
              Notre Essence
            </p>

            <h2 className="reveal font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary mb-8 leading-[1.1]">
              {editorial.title}
            </h2>

            <div className="reveal w-20 h-px bg-gradient-to-r from-rose-dark to-rose mb-8" />

            <p className="reveal text-ink-2 text-base lg:text-[1.05rem] leading-[2] mb-12 font-sans">
              {editorial.text}
            </p>

            {/* French quote */}
            <blockquote className="reveal relative pl-8 border-l-2 border-rose-dark/30">
              <p className="font-serif text-xl lg:text-2xl italic text-rose-dark/70 leading-relaxed">
                {editorial.quote}
              </p>
            </blockquote>

            {/* Credentials badges */}
            <div className="reveal mt-12 flex flex-wrap gap-3">
              <div className="flex items-center gap-3 bg-rose-pale/60 rounded-full px-5 py-2.5">
                <div className="w-10 h-10 rounded-full border border-rose/30 flex items-center justify-center">
                  <span className="font-serif text-sm text-rose-dark">13</span>
                </div>
                <div>
                  <p className="font-sans text-xs font-medium text-primary">Anos de amor</p>
                  <p className="text-[0.55rem] tracking-[0.15em] uppercase text-ink-3 font-sans">Depuis 2013</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gold-pale/60 rounded-full px-5 py-2.5">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold">LCB</span>
                </div>
                <div>
                  <p className="font-sans text-xs font-medium text-primary">Le Cordon Bleu</p>
                  <p className="text-[0.55rem] tracking-[0.15em] uppercase text-ink-3 font-sans">Paris · 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-gradient-to-r from-rose-deep via-rose-dark to-rose-deep py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedNumber target={13} label="anos" />
          <AnimatedNumber target={44} label="mil seguidores" />
          <AnimatedNumber target={15} label="cidades europeias" />
          <AnimatedNumber target={2} label="unidades" />
        </div>
      </div>
    </section>
  )
}
