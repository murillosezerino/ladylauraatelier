import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bolos Festivos & Buttercream',
  description:
    'Bolos festivos sob encomenda, buttercream artístico personalizado, macarons e doces para eventos. Confeitaria artesanal com técnica Le Cordon Bleu Paris em São José dos Campos.',
}

export default function BolosLayout({ children }: { children: React.ReactNode }) {
  return children
}
