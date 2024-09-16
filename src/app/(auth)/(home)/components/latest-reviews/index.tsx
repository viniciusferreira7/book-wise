import { BookReview } from './components/book-review'

export function LatestReviews() {
  return (
    <div className="h-full w-full">
      <h2 className="mb-4 text-sm text-foreground">Avaliações mais recentes</h2>
      <div className="h-[37.5rem] w-full space-y-3 overflow-y-auto scrollbar scrollbar-track-muted-foreground scrollbar-thumb-background dark:scrollbar-track-secondary">
        <BookReview />
        <BookReview />
        <BookReview />
      </div>
    </div>
  )
}
