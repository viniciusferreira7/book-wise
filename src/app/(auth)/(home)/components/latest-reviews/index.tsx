import { BookReview } from './components/book-review'

export function LatestReviews() {
  return (
    <div className="h-full w-full overflow-y-auto scrollbar scrollbar-track-muted-foreground scrollbar-thumb-background dark:scrollbar-track-secondary">
      <h2 className="mb-4 text-sm text-foreground">Avaliações mais recentes</h2>
      <div className="flex max-h-[902px] w-full flex-col gap-3">
        <BookReview />
        <BookReview />
        <BookReview />
      </div>
    </div>
  )
}
