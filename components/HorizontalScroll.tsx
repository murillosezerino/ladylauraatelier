'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function HorizontalScroll({ children, className = '' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const sync = () => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 2)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }

  useEffect(() => {
    sync()
    const el = trackRef.current
    if (!el) return
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const scrollBy = (dir: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const amount = Math.min(300, el.clientWidth * 0.75)
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
    setTimeout(sync, 450)
  }

  return (
    <div className="relative group/scroll">
      {/* Seta esquerda */}
      <button
        onClick={() => scrollBy('left')}
        aria-label="Anterior"
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 hover:shadow-lg transition-all text-xl leading-none
          ${canLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        ‹
      </button>

      {/* Seta direita */}
      <button
        onClick={() => scrollBy('right')}
        aria-label="Próximo"
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 hover:shadow-lg transition-all text-xl leading-none
          ${canRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        ›
      </button>

      {/* Track — scroll 100% nativo, sem pointer capture */}
      <div
        ref={trackRef}
        onScroll={sync}
        className={`flex gap-5 overflow-x-auto pb-4 ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>
    </div>
  )
}
