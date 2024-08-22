'use client'

import { signIn, useSession } from 'next-auth/react'

import { Button } from '@/components/ui/button'

import { GoogleSVG } from '../../../../components/svg/google-svg'

export function SignInGoogle() {
  const session = useSession()

  console.log(session)

  return (
    <Button
      className="w-full justify-start gap-5 rounded-lg bg-gray-800 px-6 py-5 text-lg font-semibold text-white hover:dark:bg-primary/50"
      size="auto"
      onClick={() => signIn('google', { callbackUrl: '/' })}
    >
      <GoogleSVG width={32} height={32} />
      <span>Entrar com Google</span>
    </Button>
  )
}
