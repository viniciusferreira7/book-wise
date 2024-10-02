import type { CheckedState } from '@radix-ui/react-checkbox'

import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface CategoryProps {
  name: string
  isActive: boolean
  onChangeCategory: (name: string, checkedState: CheckedState) => void
}

export function Category({ name, isActive, onChangeCategory }: CategoryProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={name}
        className="hidden"
        onCheckedChange={(checkedState) => onChangeCategory(name, checkedState)}
      />
      <label
        htmlFor={name}
        className={cn(
          'text-semibold text-md cursor-pointer rounded-full border border-violet-700 bg-transparent px-4 py-[0.25rem] text-violet-700',
          isActive && 'border-transparent bg-violet-700 text-white',
        )}
      >
        {name}
      </label>
    </div>
  )
}
