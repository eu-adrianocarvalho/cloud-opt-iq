import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CloudOptIQ - Transforme Cloud Costs em Vantagem Competitiva',
  description: 'Plataforma FinOps com IA que garante 40% de redução em custos cloud. Implementação em 2 semanas, ROI em 3 meses. Captação Série Seed $2M.',
  keywords: 'FinOps, Cloud Optimization, Cost Management, AWS, Azure, Google Cloud, AI, Machine Learning',
  openGraph: {
    title: 'CloudOptIQ - A Revolução FinOps com IA',
    description: 'Reduza 40% dos custos cloud com nossa plataforma proprietária. Série Seed $2M - ROI 18x em 5 anos.',
    url: 'https://cloudoptiq.com',
    siteName: 'CloudOptIQ',
    images: [
      {
        url: '/CloudOptIQ_01_blue.svg',
        width: 1200,
        height: 630,
        alt: 'CloudOptIQ - FinOps Platform',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudOptIQ - A Revolução FinOps com IA',
    description: 'Reduza 40% dos custos cloud com nossa plataforma proprietária.',
    images: ['/CloudOptIQ_01_blue.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
        <link rel="icon" href="/CloudOptIQ_02_symbol_blue.svg" />
        <link rel="canonical" href="https://cloudoptiq.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
