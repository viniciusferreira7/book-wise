import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

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
        className={`${nunito.variable} bg-background font-nunito text-muted-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="book-wise-theme"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
