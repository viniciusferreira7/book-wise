import { cn } from '@/lib/utils'

interface CategoryProps {
  name: string
  isActive: boolean
  onChangeCategory: (name: string) => void
}

export function Category({ name, isActive, onChangeCategory }: CategoryProps) {
  return (
    <button
      name={name}
      className={cn(
        'text-semibold text-md rounded-full border border-violet-700 bg-transparent px-4 py-[0.25rem] text-violet-700',
        isActive && 'border-transparent bg-violet-700 text-white',
      )}
      onClick={() => onChangeCategory(name)}
    >
      {name}
    </button>
  )
}
