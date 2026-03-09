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
    'flores de açúcar',
    'kits de presentes',
    'Le Cordon Bleu',
    'pâtisserie artesanal',
    'Lady Laura Atelier',
    'bolo personalizado',
    'confeitaria artesanal',
  ],
  authors: [{ name: 'Lady Laura Atelier' }],
  creator: 'Lady Laura Atelier',
  metadataBase: new URL('https://ladylaura.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ladylaura.com.br',
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
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
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Great+Vibes&family=Josefin+Sans:wght@300;400;600&family=Cinzel:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
