import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: {
    template: '%s | Book Wise',
    absolute: 'Book Wise',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.variable} font-nunito bg-background text-muted-foreground`}
      >
        {children}
      </body>
    </html>
  )
}
