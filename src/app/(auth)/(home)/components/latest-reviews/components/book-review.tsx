import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export function BookReview() {
  return (
    <Card className="h-full w-full space-y-10 border-transparent bg-gray-900">
      <CardHeader className="flex-row justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="bg-gradient-to-b from-[#7FD1CC] to-[#9694F5] p-[1.5px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="rounded-full"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-primary">John Doe</p>
            <p className="text-muted-foreground">Hoje</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-full w-full">
        <div className="h-full w-full rounded-sm bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />
        <div>
          <h3>O Hobbit</h3>
        </div>
        {/* <Image src=""/> */}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
