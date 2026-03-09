'use client'

import { useRef, useState, useCallback, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function HorizontalScroll({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const velocity = useRef(0)
  const lastX = useRef(0)
  const lastTime = useRef(0)
  const animFrame = useRef<number>(0)

  const updateArrows = useCallback(() => {
    const el = ref.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(animFrame.current)
    setIsDragging(true)
    startX.current = e.pageX - el.offsetLeft
    scrollLeft.current = el.scrollLeft
    lastX.current = e.pageX
    lastTime.current = Date.now()
    velocity.current = 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const el = ref.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX.current) * 1
    el.scrollLeft = scrollLeft.current - walk

    const now = Date.now()
    const dt = now - lastTime.current
    if (dt > 0) {
      velocity.current = (e.pageX - lastX.current) / dt
    }
    lastX.current = e.pageX
    lastTime.current = now
    updateArrows()
  }

  const onMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    applyMomentum()
  }

  const applyMomentum = () => {
    const el = ref.current
    if (!el) return
    let v = velocity.current * 12

    const step = () => {
      if (Math.abs(v) < 0.5) return
      el.scrollLeft -= v
      v *= 0.93
      updateArrows()
      animFrame.current = requestAnimationFrame(step)
    }
    animFrame.current = requestAnimationFrame(step)
  }

  const scrollBy = (dir: 'left' | 'right') => {
    const el = ref.current
    if (!el) return
    const amount = el.clientWidth * 0.75
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
    setTimeout(updateArrows, 400)
  }

  return (
    <div className="relative group">
      {/* Seta esquerda */}
      {canScrollLeft && (
        <button
          onClick={() => scrollBy('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      {/* Seta direita */}
      {canScrollRight && (
        <button
          onClick={() => scrollBy('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-rose-100 flex items-center justify-center text-rose-400 hover:text-rose-600 hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
          aria-label="Próximo"
        >
          ›
        </button>
      )}

      {/* Track */}
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onScroll={updateArrows}
        className={`flex gap-5 overflow-x-auto pb-4 select-none ${className}`}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}
