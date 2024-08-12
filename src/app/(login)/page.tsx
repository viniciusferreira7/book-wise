import { Metadata } from 'next'
import Image from 'next/image'

import { AccessAsVisitor } from './components/access-as-visitor'
import { SignInGitHub } from './components/sign-in-github'
import { SignInGoogle } from './components/sign-in-google'

export const metadata: Metadata = {
  title: 'Boas-vindas',
}

export default function Home() {
  return (
    <div className="flex h-screen p-4">
      <header className="h-full w-full max-w-[589px]">
        <Image
          src="/assets/home.png"
          alt="Image de capa do book wise"
          width={598}
          height={912}
          className="h-full w-full max-w-[589px] object-contain"
        />
      </header>
      <main className="grid w-full place-items-center">
        <div className="w-full max-w-[372px]">
          <h1 className="mb-0.5 text-2xl font-semibold">Boas vindas!</h1>
          <h2 className="mb-10 text-lg font-medium">
            Faça seu login ou acesse como visitante.
          </h2>
          <div className="space-y-4">
            <SignInGoogle />
            <SignInGitHub />
            <AccessAsVisitor />
          </div>
        </div>
      </main>
    </div>
  )
}
