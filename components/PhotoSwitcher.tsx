'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  alt: string
}

export default function PhotoSwitcher({ images, alt }: Props) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrent((i) => (i + 1) % images.length)

  return (
    <div className="relative aspect-[4/3] bg-rose-50 overflow-hidden rounded-t-2xl group">
      <Image
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="320px"
      />

      {/* Setas — visíveis no hover */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-rose-500 flex items-center justify-center text-lg shadow opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        aria-label="Foto anterior"
      >
        ‹
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 text-rose-500 flex items-center justify-center text-lg shadow opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        aria-label="Próxima foto"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-3' : 'bg-white/50'}`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
