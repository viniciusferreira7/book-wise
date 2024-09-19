import { RatingStars } from '@/app/(auth)/components/rating-stars'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function BookReview() {
  return (
    <Card className="w-full space-y-8 border-transparent bg-gray-900 p-6">
      <CardHeader className="flex-row justify-between p-0">
        <div className="flex items-center gap-4">
          <Avatar className="bg-gradient-to-b from-[#7FD1CC] to-[#9694F5] p-[0.094rem]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="rounded-full"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-muted dark:text-primary">John Doe</p>
            <p className="text-muted-foreground">Hoje</p>
          </div>
        </div>
        <RatingStars numberOfStars={4} />
      </CardHeader>
      <CardContent className="flex h-[9.5rem] w-full items-start gap-5 p-0">
        <div className="h-full w-1/6 rounded-sm bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />

        <div className="h-full w-full">
          <h3 className="text-base font-semibold text-muted dark:text-primary">
            O Hobbit
          </h3>
          <p className="text-sm text-gray-400">J.R.R. Tolkien</p>
          <div>
            <p className="line-clamp-4 text-sm font-light text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              sit, debitis tempore nemo harum ea dolorum omnis magnam! Odio, non
              sit, debitis tempore nemo harum ea dolorum omnis magnam! Odio, non
              sit, debitis tempore nemo harum ea dolorum omnis magnam! Odio, non
              sit, debitis tempore nemo harum ea dolorum omnis magnam! Odio, non
              sit, debitis tempore nemo harum ea dolorum omnis magnam! Odio, non
              sit, debitis tempore nemo harum ea dolorum omnis magnam! Odio, non
              sit, debitis tempore nemo harum ea dolorum omnis magnam! Odio, non
              temporibus ipsum totam suscipit ut sed quam eum error obcaecati?
            </p>
            <Button
              variant="ghost"
              size="auto"
              className="text-sm text-purple-300"
            >
              ver mais
            </Button>
          </div>
        </div>
        {/* <Image src=""/> */}
      </CardContent>
    </Card>
  )
}
