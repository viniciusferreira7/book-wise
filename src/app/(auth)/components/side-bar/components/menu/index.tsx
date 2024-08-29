import { House } from 'lucide-react'

import { NavLink } from './components/nav-link'

export function Menu() {
  return (
    <nav className="flex flex-col items-center gap-4">
      <NavLink href="/">
        <House size={24} className="size-5" /> Início
      </NavLink>
    </nav>
  )
}
