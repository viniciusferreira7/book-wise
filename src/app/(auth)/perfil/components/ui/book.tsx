import { RatingStars } from '@/app/(auth)/components/rating-stars'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Book() {
  return (
    <Card className="space-y-6 rounded-lg border-transparent bg-gray-900 p-6 px-5">
      <CardHeader className="p-0 md:flex-row md:gap-6">
        <div className="h-36 w-24 rounded-sm bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />
        <div className="flex flex-col justify-between">
          <div className="space-y-0.5">
            <CardTitle className="text-2xl font-bold text-gray-100">
              Entendendo Algoritmos
            </CardTitle>
            <h4 className="text-lg text-gray-400">Aditya Bhargava</h4>
          </div>
          <RatingStars numberOfStars={4} />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <CardDescription className="text-md font-light text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, culpa
          porro, nostrum magni repudiandae amet dicta omnis exercitationem
          voluptatum eveniet consequatur, placeat officia? Temporibus
          distinctio, repellendus cumque vero placeat vitae.
        </CardDescription>
      </CardContent>
    </Card>
  )
}
