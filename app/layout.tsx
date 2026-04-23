import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/data'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'confeitaria São José dos Campos',
    'bolos personalizados SJC',
    'confeitaria Jacareí',
    'bolo de casamento SJC',
    'macarons artesanais',
    'doces finos SJC',
    'brigadeiros gourmet',
    'eventos SJC',
    'Le Cordon Bleu',
    'pâtisserie artesanal',
    'Lady Laura Atelier',
    'confeitaria francesa',
    'mesa de doces casamento',
    'flores SJC',
  ],
  authors: [{ name: 'Lady Laura Atelier' }],
  creator: 'Lady Laura Atelier',
  metadataBase: new URL('https://ladylaura.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ladylaura.com.br',
    title: 'Lady Laura Atelier • Pâtisserie & Flores',
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lady Laura Atelier • Pâtisserie & Flores',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Schoolbell&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-base text-primary antialiased">{children}</body>
    </html>
  )
}
