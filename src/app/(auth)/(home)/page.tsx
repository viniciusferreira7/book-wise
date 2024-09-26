import { House } from 'lucide-react'
import { Metadata } from 'next'

import { LatestReviews } from './components/latest-reviews'
import { PopularBooks } from './components/popular-books'

export const metadata: Metadata = {
  title: 'Início',
}

export default function HomePage() {
  return (
    <main className="w-full pt-[4.5rem]">
      <div className="flex h-full flex-col gap-10">
        <h1 className="flex items-end gap-3 text-xl font-bold text-foreground">
          <House size={24} className="size-7 text-emerald-700" /> Início
        </h1>
        <div className="flex flex-col items-start justify-between gap-20 pr-24 md:flex-row">
          <LatestReviews />
          <PopularBooks />
        </div>
      </div>
    </main>
  )
}
