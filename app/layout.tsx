import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rawabi-seven.vercel.app'),
  title: 'روى | مياهك المفضلة، واصلة لبابك',
  description: 'اطلب مياه الشرب من أشهر الماركات مع توصيل مجاني داخل جدة. اختر الحي ونوع المياه لطلبك بسهولة عبر واتساب.',
  generator: 'v0.app',
  icons: { icon: '/icon.svg' },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://rawabi-seven.vercel.app',
    siteName: 'روى',
    title: 'روى | مياهك المفضلة، واصلة لبابك',
    description: 'اطلب مياه الشرب من أشهر الماركات مع توصيل مجاني داخل جدة.',
    images: [
      {
        url: '/rowa-logo.jpg',
        width: 599,
        height: 775,
        alt: 'شعار روى للمياه',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'روى | مياهك المفضلة، واصلة لبابك',
    description: 'اطلب مياه الشرب من أشهر الماركات مع توصيل مجاني داخل جدة.',
    images: ['/rowa-logo.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f8f7',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
