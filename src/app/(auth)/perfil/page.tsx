import { User } from 'lucide-react'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth-options'
import { getQueryClient } from '@/lib/get-query-client'
import { getUserOptions } from '@/services/users/get-user-options'

import { Analytics } from './components/analytics'
import { SearchBook } from './components/search-book'
import { YourBooks } from './components/your-books'

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerSession(authOptions)

  const username = session?.user.name

  return {
    title: `${username} | Perfile`,
  }
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  const queryClient = getQueryClient()

  const [userData] = await Promise.all([
    queryClient.fetchQuery(getUserOptions({ userId: session?.user.id })),
  ])

  return (
    <main className="h-full w-full pt-[4.5rem]">
      <div className="flex h-full flex-col gap-10">
        <h1 className="flex items-end gap-3 text-xl font-bold text-foreground">
          <User size={24} className="size-7 text-emerald-700" /> Perfil
        </h1>
        <div className="flex flex-col items-start justify-between gap-20 pr-24 md:flex-row">
          <div className="w-full">
            <SearchBook />
            <YourBooks />
          </div>
          <Analytics session={session} userData={userData} />
        </div>
      </div>
    </main>
  )
}
