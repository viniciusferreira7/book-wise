import Image from 'next/image'

import { Menu } from './components/menu'

export function Sidebar() {
  return (
    <aside className="hidden h-screen p-5 lg:fixed lg:block">
      <div className="flex h-full w-56 flex-col items-start rounded-xl bg-[url('/assets/svg/side-bar-background.svg')] px-6 pb-6 pt-10">
        <div className="mb-16 flex items-center justify-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="Logo do Book wise"
            width={24}
            height={24}
            priority={true}
          />
          <h1 className="bg-gradient-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-xl font-bold text-transparent">
            BookWise
          </h1>
        </div>
        <Menu />
      </div>
    </aside>
  )
}
