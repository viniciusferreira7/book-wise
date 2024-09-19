import { RatingStars } from '@/app/(auth)/components/rating-stars'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function PopularBook() {
  return (
    <Card className="grid h-[8.5rem] grid-cols-3 grid-rows-3 gap-x-5 rounded-lg border-transparent bg-gray-900 px-5 py-[1.125rem]">
      <CardHeader className="row-span-3 p-0">
        <div className="h-full w-full rounded-sm bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />
      </CardHeader>
      <CardContent className="col-span-2 row-span-2 p-0">
        <CardTitle className="text-sm text-muted dark:text-primary">
          CardTitle
        </CardTitle>
        <CardDescription className="text-xs">Card Content</CardDescription>
      </CardContent>
      <CardFooter className="col-span-2 p-0">
        <RatingStars numberOfStars={4} />
      </CardFooter>
    </Card>
  )
}
