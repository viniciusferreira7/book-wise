import { Book } from './ui/book'

export function YourBooks() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-sm text-gray-200">Há 2 dias</h2>
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  )
}
