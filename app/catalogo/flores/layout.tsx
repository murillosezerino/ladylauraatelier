import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flores & Presentes',
  description:
    'Arranjos florais frescos, rosas nobres, flores secas, vasos de cristal e composições exclusivas. Curadoria floral diária por Renata Chagas em São José dos Campos e Jacareí.',
}

export default function FloresLayout({ children }: { children: React.ReactNode }) {
  return children
}
