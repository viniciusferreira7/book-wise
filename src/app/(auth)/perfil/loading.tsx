import { Search, User } from 'lucide-react'

import * as Input from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'

import { SkeletonMetrics } from './components/skeletons/skeleton-metrics'
import { SkeletonYourBooks } from './components/skeletons/skeleton-your-books'

export default function LoadingProfile() {
  return (
    <main className="h-full w-full pt-[4.5rem]">
      <div className="flex h-full flex-col gap-10">
        <h1 className="flex items-end gap-3 text-xl font-bold text-foreground">
          <User size={24} className="size-7 text-emerald-700" /> Perfil
        </h1>
        <div className="flex flex-col items-start justify-between gap-20 pr-24 md:flex-row">
          <div className="w-full">
            <Input.Root className="mb-8 w-full border-blue-950 px-5 py-3 font-medium text-gray-400">
              <Input.Control disabled placeholder="Buscar livro avaliado" />
              <Search size={20} className="size-5 text-blue-950" />
            </Input.Root>
            <SkeletonYourBooks />
          </div>
          <div className="flex w-full max-w-80 flex-col items-center gap-8 border-l border-gray-900">
            <div className="flex flex-col items-center gap-5">
              <Skeleton className="size-16" />

              <div className="space-y-2">
                <Skeleton className="h-7 w-28" />
                <Skeleton className="h-6 w-28" />
              </div>
            </div>
            <div className="h-2 w-8 rounded-lg bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />
            <SkeletonMetrics />
          </div>
        </div>
      </div>
    </main>
  )
}
