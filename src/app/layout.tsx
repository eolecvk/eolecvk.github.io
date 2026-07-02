import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://eolecvk.com'),
  title: 'Eole Cervenka',
  description: 'AI/ML Engineer - Projects and Resume',
  authors: [{ name: 'Eole Cervenka' }],
  creator: 'Eole Cervenka',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Eole Cervenka',
    description: 'ML engineer building production systems for LLM and generative AI applications',
    type: 'website',
    url: 'https://eolecvk.com',
    siteName: 'Eole Cervenka',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Eole Cervenka' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eole Cervenka',
    description: 'ML engineer building production systems for LLM and generative AI applications',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-3 focus:bg-gray-900 focus:text-white focus:font-semibold">
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
