'use client'

import type { CheckedState } from '@radix-ui/react-checkbox'
import { useQueryState } from 'nuqs'

import { Category } from './ui/category'

export function Categories() {
  const [categories, setCategories] = useQueryState('categories')

  function handleChangeCategories(name: string, checkedState: CheckedState) {
    setCategories((previousCategories) => {
      if (previousCategories) {
        const values = previousCategories.split(',')

        if (!checkedState) {
          const filteredValues = values.filter((item) => item !== name)

          return filteredValues.join(',')
        } else {
          values.push(name)
        }

        return values.join(',')
      } else {
        return name
      }
    })
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Category
        name="Ação"
        isActive={!!categories?.includes('Ação')}
        onChangeCategory={handleChangeCategories}
      />
      <Category
        name="Terror"
        isActive={!!categories?.includes('Terror')}
        onChangeCategory={handleChangeCategories}
      />
      <Category
        name="Computação"
        isActive={!!categories?.includes('Computação')}
        onChangeCategory={handleChangeCategories}
      />
      <Category
        name="Ficção científica"
        isActive={!!categories?.includes('Ficção científica')}
        onChangeCategory={handleChangeCategories}
      />
      <Category
        name="Fantasia"
        isActive={!!categories?.includes('Fantasia')}
        onChangeCategory={handleChangeCategories}
      />
      <Category
        name="Suspense"
        isActive={!!categories?.includes('Suspense')}
        onChangeCategory={handleChangeCategories}
      />
    </div>
  )
}
