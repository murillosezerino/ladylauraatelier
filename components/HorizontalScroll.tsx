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
    const amount = Math.min(420, el.clientWidth * 0.75)
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
    setTimeout(sync, 450)
  }

  return (
    <div className="relative group/scroll">
      {/* Left arrow */}
      <button
        onClick={() => scrollBy('left')}
        aria-label="Anterior"
        className={`absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm shadow-xl shadow-rose/15 border border-rose/15 flex items-center justify-center text-rose-dark hover:bg-rose-dark hover:text-white hover:border-rose-dark hover:shadow-rose-dark/20 transition-all duration-300
          ${canLeft ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-75'}`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scrollBy('right')}
        aria-label="Próximo"
        className={`absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm shadow-xl shadow-rose/15 border border-rose/15 flex items-center justify-center text-rose-dark hover:bg-rose-dark hover:text-white hover:border-rose-dark hover:shadow-rose-dark/20 transition-all duration-300
          ${canRight ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-75'}`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Fade edges */}
      <div className={`absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-base to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canLeft ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-base to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canRight ? 'opacity-100' : 'opacity-0'}`} />

      {/* Track */}
      <div
        ref={trackRef}
        onScroll={sync}
        className={`flex gap-6 overflow-x-auto pb-4 ${className}`}
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
