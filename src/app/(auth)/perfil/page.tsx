import { User } from 'lucide-react'
import type { Metadata } from 'next'

import { SearchBook } from './components/search-book'
import { YourBooks } from './components/your-books'

export const metadata: Metadata = {
  title: 'Perfil',
}

export default function ProfilePage() {
  return (
    <main className="w-full pt-[4.5rem]">
      <div className="flex h-full flex-col gap-10">
        <h1 className="flex items-end gap-3 text-xl font-bold text-foreground">
          <User size={24} className="size-7 text-emerald-700" /> Perfil
        </h1>
        <div className="flex items-start justify-between gap-20 pr-24">
          <div className="w-full">
            <SearchBook />
            <YourBooks />
          </div>
          <div>Teste</div>
        </div>
      </div>
    </main>
  )
}
