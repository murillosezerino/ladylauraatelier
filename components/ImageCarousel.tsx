"use client";
// components/ImageCarousel.tsx
import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  alt: string;
  aspectClass?: string;
}

export default function ImageCarousel({ images, alt, aspectClass = "aspect-[4/3]" }: Props) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className={`relative w-full ${aspectClass} bg-rose-50 overflow-hidden group`}>
      <Image
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        fill
        className="object-contain transition-opacity duration-300"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-500 rounded-full w-8 h-8 flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-rose-500 rounded-full w-8 h-8 flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity text-lg leading-none"
          >
            ›
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Foto ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === current ? "bg-rose-400" : "bg-rose-200"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
