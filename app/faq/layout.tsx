import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description:
    'Dúvidas sobre encomendas, prazos, pagamento, retirada e transporte. Tudo o que você precisa saber para encomendar na Lady Laura Atelier.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
