import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Boas-vindas',
}

export default function Home() {
  return (
    <div className="flex h-screen p-4">
      <header className="h-full w-full">
        <Image
          src="/assets/home.png"
          alt="Image de capa do book wise"
          width={598}
          height={912}
          className="h-full w-full max-w-[589px] object-contain"
        />
      </header>
      <main>
        <div>Hello</div>
      </main>
    </div>
  )
}
