import { Book } from './ui/book'

export function Books() {
  return (
    <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}
