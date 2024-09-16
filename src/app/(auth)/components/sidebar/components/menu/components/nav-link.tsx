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

  return (
    <Link
      data-current={isSamePathname}
      {...props}
      className={cn(
        'flex items-center gap-4 py-2 data-[current=true]:font-bold data-[current=true]:text-primary-foreground dark:data-[current=true]:text-foreground',
        className,
      )}
    >
      <div
        className={cn(
          'bg-transparent',
          isSamePathname &&
            'block h-full w-[0.25rem] rounded-md bg-gradient-to-b from-[#7FD1CC] to-[#9694F5]',
        )}
      />
      <div className="flex items-center gap-3">{children}</div>
    </Link>
  )
}
