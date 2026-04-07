import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kits & Presentes',
  description:
    'Kits presenteáveis com flores, chocolates belgas, macarons e espumantes. Box café da manhã, latinhas, barras recheadas e linha home com velas aromáticas e difusores.',
}

export default function KitsLayout({ children }: { children: React.ReactNode }) {
  return children
}
