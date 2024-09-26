import { Search } from 'lucide-react'

import * as Input from '@/components/ui/input'

export function SearchBook() {
  return (
    <Input.Root className="mb-8 w-full border-blue-950 px-5 py-3 font-medium text-gray-400">
      <Input.Control placeholder="Buscar livro avaliado" />
      <Search size={20} className="size-5 text-blue-950" />
    </Input.Root>
  )
}
