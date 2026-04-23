import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buquês de Noiva',
  description:
    'Buquês de noiva exclusivos e personalizados — design floral assinado Lady Laura Atelier para o dia mais especial da sua vida.',
}

export default function BuquesNoivaLayout({ children }: { children: React.ReactNode }) {
  return children
}
