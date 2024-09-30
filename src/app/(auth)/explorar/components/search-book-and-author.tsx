import { Search } from 'lucide-react'

import * as Input from '@/components/ui/input'

export function SearchBookAndAuthor() {
  return (
    <Input.Root className="w-full border-blue-950 px-5 py-3 font-medium text-gray-400 md:w-1/3">
      <Input.Control placeholder="Buscar livro ou autor" />
      <Search size={20} className="size-5 text-blue-950" />
    </Input.Root>
  )
}
