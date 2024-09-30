import { Binoculars } from 'lucide-react'
import type { Metadata } from 'next'

import { Categories } from './components/categories'
import { SearchBookAndAuthor } from './components/search-book-and-author'

export const metadata: Metadata = {
  title: 'Explorar',
}

export default function ExplorePage() {
  return (
    <main className="h-full w-full pr-6 pt-[4.5rem] md:pr-24">
      <div className="flex h-full flex-col gap-10">
        <div className="flex items-center justify-center gap-2 md:justify-between">
          <h1 className="flex items-end gap-3 text-xl font-bold text-foreground">
            <Binoculars size={24} className="size-7 text-emerald-700" />
            Explorar
          </h1>
          <SearchBookAndAuthor />
        </div>
        <Categories />
      </div>
    </main>
  )
}
