'use client'

import type { CheckedState } from '@radix-ui/react-checkbox'
import { useQueryState } from 'nuqs'

import { Category } from './ui/category'

export function Categories() {
  const [categories, setCategories] = useQueryState('categories')

  function handleChangeCategories(name: string, checkedState: CheckedState) {
    console.log({ name })

    setCategories((old) => {
      if (checkedState === true && !old) return name
      if (checkedState === true && old) {
        const categoriesInArray = old.split(',')

        const categoryByNameIndex = categoriesInArray.findIndex(
          (category) => category === name,
        )

        if (categoryByNameIndex >= 0) return old

        if (categoryByNameIndex === -1) {
          categoriesInArray.push(name)

          return categoriesInArray.join(',')
        }
      }

      if (checkedState === false && old) {
        const categoriesInArray = old.split(',')

        const categoryByNameIndex = categoriesInArray.findIndex(
          (category) => category === name,
        )

        if (categoryByNameIndex >= 0) {
          return categoriesInArray.splice(categoryByNameIndex, 1).join(',')
        }
      }

      return old
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
