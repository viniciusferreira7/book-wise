'use client'

import { Binoculars, House, LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { ModeToggle } from '@/app/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { deleteCookie } from '@/utils/cookie/delete-cookie'

import { NavLink } from './components/nav-link'

export function Menu() {
  const router = useRouter()

  async function handleSign() {
    await deleteCookie('is-visitor')

    router.replace('/')
  }

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
      <div className="flex items-center justify-end gap-2">
        <ModeToggle />
        <Button
          className="gap-4 font-bold text-primary-foreground dark:text-primary"
          variant="ghost"
          onClick={handleSign}
        >
          Fazer login
          <LogIn size={24} className="size-5 text-emerald-500" />
        </Button>
      </div>
    </nav>
  )
}
