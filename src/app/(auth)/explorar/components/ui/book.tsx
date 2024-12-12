import { RatingStars } from '@/app/(auth)/components/rating-stars'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Book() {
  return (
    <Card className="flex flex-wrap gap-5 rounded-lg border-transparent bg-gray-900 p-6 px-5">
      <CardHeader className="p-0 md:flex-row md:gap-6">
        <div className="h-36 w-24 rounded-sm bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]" />
      </CardHeader>
      <CardContent className="flex flex-col justify-between p-0">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-0.5">
            <CardTitle className="text-2xl font-bold text-gray-100">
              Entendendo Algoritmos
            </CardTitle>
            <h4 className="text-lg text-gray-400">Aditya Bhargava</h4>
          </div>
          <RatingStars numberOfStars={4} />
        </div>
      </CardContent>
    </Card>
  )
}
