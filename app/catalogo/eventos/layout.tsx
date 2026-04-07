import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos & Celebrações',
  description:
    'Mesas de doces para casamentos, aniversários e celebrações. Do brunch íntimo ao evento grandioso, com decoração floral e menu exclusivo Lady Laura Atelier.',
}

export default function EventosLayout({ children }: { children: React.ReactNode }) {
  return children
}
