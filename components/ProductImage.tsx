"use client";
// components/ProductImage.tsx
// Imagem única com fallback para emoji caso o arquivo não exista.

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  fallbackEmoji?: string;
  aspectClass?: string;
}

export default function ProductImage({ src, alt, fallbackEmoji = "🎂", aspectClass = "aspect-[4/3]" }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`w-full ${aspectClass} bg-rose-50 flex items-center justify-center text-6xl`} aria-label={alt}>
        {fallbackEmoji}
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectClass} bg-rose-50 overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setError(true)}
      />
    </div>
  );
}
