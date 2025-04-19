import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/lib/provider'
import { BeerProvider } from '@/context/BeerContext'

export const metadata: Metadata = {
  title: 'My Beer Collection',
  description: 'A simple beer collection app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <BeerProvider>{children}</BeerProvider>
        </Providers>
      </body>
    </html>
  )
}
