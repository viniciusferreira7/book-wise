'use client'

import { signIn } from 'next-auth/react'

import { GitHubSVG } from '@/components/svg/github-svg'
import { Button } from '@/components/ui/button'

export function SignInGitHub() {
  return (
    <Button
      className="w-full justify-start gap-5 rounded-lg bg-gray-800 px-6 py-5 text-lg font-semibold text-white hover:dark:bg-primary/30"
      size="auto"
      onClick={() => signIn('github', { callbackUrl: '/' })}
    >
      <GitHubSVG width={32} height={32} />
      <span>Entrar com GitHub</span>
    </Button>
  )
}
