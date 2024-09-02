import { Binoculars, House, LogIn } from 'lucide-react'

import { NavLink } from './components/nav-link'

export function Menu() {
  return (
    <nav className="flex h-full flex-col justify-between">
      <div className="flex flex-col items-start gap-4">
        <NavLink href="/">
          <House size={24} className="size-5" /> Início
        </NavLink>
        <NavLink href="/explorar">
          <Binoculars size={24} className="size-5" /> Explorar
        </NavLink>
      </div>
      <NavLink href="/sign-in" className="font-bold text-primary">
        Fazer login
        <LogIn size={24} className="size-5 text-emerald-500" />
      </NavLink>
    </nav>
  )
}
