import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import '@/styles/tailwind.css'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: './fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata = {
  title: 'Perfect Card - AI-Powered Credit Card Aggregator',
  description:
    'PerfectCard.AI is auser-centric website that simplifies the process of finding the perfect credit card.',
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
    >
      <body
        className="flex min-h-full flex-col bg-white dark:bg-gray-950"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
