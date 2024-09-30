'use client'

import { useQueryState } from 'nuqs'

import { Category } from './ui/category'

export function Categories() {
  const [categories, setCategories] = useQueryState('categories')

  function handleChangeCategories(name: string){
    setCategories((old) => )
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Category name="Ação" isActive onChangeCategory={handleChangeCategories}/>
      <Category name="Terror" isActive onChangeCategory={handleChangeCategories}/>
      <Category name="Computação" isActive onChangeCategory={handleChangeCategories}/>
      <Category name="Ficção científica" isActive onChangeCategory={handleChangeCategories}/>
      <Category name="Fantasia" isActive onChangeCategory={handleChangeCategories}/>
      <Category name="Suspense" isActive onChangeCategory={handleChangeCategories}/>
    </div>
  )
}
