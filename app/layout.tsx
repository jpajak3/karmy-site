import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karmy — Coastal D1 Pawthlete',
  description: 'UGC content creator. Product testing. Adventure content. Object interaction. Work with Karmy.',
  openGraph: {
    title: 'Karmy — Coastal D1 Pawthlete',
    description: 'coconut. frisbee. combine.',
    url: 'https://www.itsmekarmy.com',
    siteName: 'itsmekarmy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karmy — Coastal D1 Pawthlete',
    description: 'coconut. frisbee. combine.',
    site: '@itsmekarmy',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
