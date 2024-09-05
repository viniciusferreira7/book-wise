import { House } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Início',
}

export default function HomePage() {
  return (
    <main className="w-full pt-[4.5rem]">
      <div className="flex h-full flex-col gap-10">
        <h1 className="flex items-center gap-3 text-xl font-bold text-foreground">
          <House size={24} className="size-8 text-emerald-600" /> Início
        </h1>
        <div className="scrollbar scrollbar-track-muted-foreground dark:scrollbar-track-secondary scrollbar-thumb-background h-[902px] w-full overflow-y-auto">
          <h2 className="mb-4 text-sm text-foreground">Avaliações mais recentes</h2>
          <div className="h-[902px] bg-sky-800"></div>
        </div>
      </div>
    </main>
  )
}
