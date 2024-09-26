import { Bookmark, BookOpen, LibraryBig, User } from 'lucide-react'

export function Metrics() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-3 grid-rows-2 items-center gap-x-5">
        <BookOpen className="col-span-1 row-span-2 size-8 text-emerald-700" />
        <h4 className="text-md col-span-2 row-span-1 font-bold text-gray-800 dark:text-gray-200">
          3853
        </h4>
        <h5 className="text-md col-span-2 row-span-1">Páginas lidas</h5>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 items-center gap-x-5">
        <LibraryBig className="col-span-1 row-span-2 size-8 text-emerald-700" />
        <h4 className="text-md col-span-2 row-span-1 font-bold text-gray-800 dark:text-gray-200">
          10
        </h4>
        <h5 className="text-md col-span-2 row-span-1">Livros avaliados</h5>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 items-center gap-x-5">
        <User className="col-span-1 row-span-2 size-8 text-emerald-700" />
        <h4 className="text-md col-span-2 row-span-1 font-bold text-gray-800 dark:text-gray-200">
          8
        </h4>
        <h5 className="text-md col-span-2 row-span-1">Autores lidos</h5>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 items-center gap-x-5">
        <Bookmark className="col-span-1 row-span-2 size-8 text-emerald-700" />
        <h4 className="text-md col-span-2 row-span-1 font-bold text-gray-800 dark:text-gray-200">
          Computação
        </h4>
        <h5 className="text-md col-span-2 row-span-1">Categoria mais lida</h5>
      </div>
    </div>
  )
}
