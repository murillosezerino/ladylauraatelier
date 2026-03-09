'use client'

import { useState, useRef, useEffect } from 'react'

interface Props {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  // Touch swipe
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev()
    }
  }

  // Mouse drag
  const mouseStartX = useRef(0)
  const isDragging = useRef(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    mouseStartX.current = e.clientX
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    isDragging.current = false
    const diff = mouseStartX.current - e.clientX
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev()
    }
  }

  const handleMouseLeave = () => {
    isDragging.current = false
  }

  if (images.length === 0) return null

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ aspectRatio: '4/3', cursor: 'grab', background: '#FAF0F4' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} ${i + 1}`}
            className="w-full h-full flex-none object-contain"
            draggable={false}
          />
        ))}
      </div>

      {/* Setas — só aparecem no hover do container */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow flex items-center justify-center text-stone-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow flex items-center justify-center text-stone-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Próximo"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? 'bg-rose-400 w-3' : 'bg-white/60'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
