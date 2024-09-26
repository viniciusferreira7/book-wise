import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

import { ModeToggle } from '@/app/components/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function Profile() {
  const { data: session } = useSession()

  const avatarUrl = session?.user?.image ?? 'https://github.com/shadcn.png'

  const fullName = session?.user?.name ? session?.user?.name?.split(' ') : []
  const fallback = `${fullName[0][0]}${fullName[fullName.length - 1][0]}`

  const shortName = `${fullName[0]} ${fullName[fullName.length - 1]}`

  function handleLogOut() {
    signOut()
  }

  return (
    <div className="space-y-4 p-2">
      <div className="flex items-center gap-4">
        <Avatar className="bg-gradient-to-b from-[#7FD1CC] to-[#9694F5] p-[0.094rem]">
          <AvatarImage src={avatarUrl} alt="@shadcn" className="rounded-full" />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <p className="text-sm text-muted dark:text-primary">{shortName}</p>
        <Button
          variant="ghost"
          size="icon"
          className="text-rose-700"
          onClick={handleLogOut}
        >
          <LogOut size={20} />
        </Button>
      </div>
      <div className="flex justify-center">
        <ModeToggle />
      </div>
    </div>
  )
}
