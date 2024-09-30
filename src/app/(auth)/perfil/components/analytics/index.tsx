import type { Session } from 'next-auth'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Metrics } from './metrics'

interface AnalyticsProps {
  session: Session | null
}

export function Analytics({ session }: AnalyticsProps) {
  const avatarUrl = session?.user?.image ?? 'https://github.com/shadcn.png'

  const fullName = session?.user?.name ? session?.user?.name?.split(' ') : []
  const fallback = `${fullName[0][0]}${fullName[fullName.length - 1][0]}`

  const shortName = `${fullName[0]} ${fullName[fullName.length - 1]}`

  return (
    <div className="flex w-full max-w-80 flex-col items-center gap-8 border-l border-gray-900">
      <div className="flex flex-col items-center gap-5">
        <Avatar className="size-16 bg-gradient-to-b from-[#7FD1CC] to-[#9694F5] p-[0.094rem]">
          <AvatarImage src={avatarUrl} alt="@shadcn" className="rounded-full" />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-bold text-muted-foreground">
            {shortName}
          </h2>
          <h3 className="text-gray-400">membro desde ontem</h3>
        </div>
      </div>
      <div className="h-2 w-8 rounded-lg bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />
      <Metrics />
    </div>
  )
}
