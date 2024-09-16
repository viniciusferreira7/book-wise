import Link from 'next/link'

import { PopularBook } from './components/popular-book'

export function PopularBooks() {
  return (
    <div className="w-1/3">
      <div className="flex items-start justify-between">
        <h2 className="mb-4 text-sm text-foreground">Livros populares</h2>
        <Link href="/explorar" className="text-sm text-purple-300">
          Ver todos
        </Link>
      </div>
      <div className="space-y-3">
        <PopularBook />
        <PopularBook />
        <PopularBook />
        <PopularBook />
      </div>
    </div>
  )
}
