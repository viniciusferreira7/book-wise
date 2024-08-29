'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface NavLinkProps extends LinkProps {
  children: ReactNode
  className?: HTMLElement['className']
}

export function NavLink({ children, className, ...props }: NavLinkProps) {
  const pathname = usePathname()

  const isSamePathname = pathname === props.href

  console.log({ isSamePathname })

  return (
    <Link
      data-current={isSamePathname}
      {...props}
      className={cn(
        'flex items-center gap-4 data-[current=true]:font-bold data-[current=true]:text-foreground',
        className,
      )}
    >
      {isSamePathname && <div className={'block h-full w-4 bg-red-700'} />}
      <div className="flex items-center gap-3">{children}</div>
    </Link>
  )
}
