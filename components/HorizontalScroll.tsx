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

  // drag state
  const dragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const velX = useRef(0)
  const lastX = useRef(0)
  const lastT = useRef(0)
  const raf = useRef(0)

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

  // Pointer events — works on mouse AND touch-emulation
  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current
    if (!el) return
    el.setPointerCapture(e.pointerId)
    dragging.current = true
    startX.current = e.clientX
    startScroll.current = el.scrollLeft
    velX.current = 0
    lastX.current = e.clientX
    lastT.current = Date.now()
    cancelAnimationFrame(raf.current)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    const el = trackRef.current
    if (!el) return
    const dx = e.clientX - startX.current
    el.scrollLeft = startScroll.current - dx

    const now = Date.now()
    const dt = now - lastT.current
    if (dt > 0) velX.current = (e.clientX - lastX.current) / dt
    lastX.current = e.clientX
    lastT.current = now
    sync()
  }

  const onPointerUp = () => {
    if (!dragging.current) return
    dragging.current = false
    const el = trackRef.current
    if (!el) return

    let v = velX.current * 15
    const coast = () => {
      if (Math.abs(v) < 0.3) { sync(); return }
      el.scrollLeft -= v
      v *= 0.92
      sync()
      raf.current = requestAnimationFrame(coast)
    }
    raf.current = requestAnimationFrame(coast)
  }

  const scrollBy = (dir: 'left' | 'right') => {
    const el = trackRef.current
    if (!el) return
    const amount = Math.min(320, el.clientWidth * 0.8)
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
    setTimeout(sync, 450)
  }

  return (
    <div className="relative">
      {/* Seta esquerda */}
      <button
        onClick={() => scrollBy('left')}
        aria-label="Anterior"
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 hover:shadow-lg transition-all text-xl leading-none
          ${canLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        ‹
      </button>

      {/* Seta direita */}
      <button
        onClick={() => scrollBy('right')}
        aria-label="Próximo"
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md border border-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 hover:shadow-lg transition-all text-xl leading-none
          ${canRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        ›
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onScroll={sync}
        className={`flex gap-5 overflow-x-auto pb-4 ${className}`}
        style={{
          cursor: dragging.current ? 'grabbing' : 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          userSelect: 'none',
        }}
      >
        {children}
      </div>
    </div>
  )
}
