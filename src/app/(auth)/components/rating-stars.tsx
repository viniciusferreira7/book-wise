import { Star } from 'lucide-react'

interface RatingStarsProps {
  numberOfStars: number
}

export function RatingStars({ numberOfStars }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        if (numberOfStars >= index + 1) {
          return (
            <Star key={index} fill="#9694F5" stroke="none" className="size-6" />
          )
        }

        return <Star key={index} stroke="#9694F5" className="size-6" />
      })}
    </div>
  )
}
