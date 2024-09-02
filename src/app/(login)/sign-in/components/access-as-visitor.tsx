'use client'

import { useRouter } from 'next/navigation'

import { RocketSVG } from '@/components/svg/rocket-svg'
import { Button } from '@/components/ui/button'
import { setCookie } from '@/utils/cookie/set-cookie'

export function AccessAsVisitor() {
  const router = useRouter()

  async function handleAccessAsVisitor() {
    await setCookie('is-visitor', 'true')

    router.push('/')
  }

  return (
    <Button
      className="w-full justify-start gap-5 rounded-lg bg-gray-800 px-6 py-5 text-lg font-semibold text-white hover:dark:bg-primary/30"
      size="auto"
      onClick={handleAccessAsVisitor}
    >
      <RocketSVG width={32} height={32} />
      <span>Acessar como visitante</span>
    </Button>
  )
}
