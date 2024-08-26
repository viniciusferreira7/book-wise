import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const hasTokenGoogle = request.cookies.has('next-auth.session-token')
  const isVisitor = request.cookies.has('is-visitor')
  if (hasTokenGoogle || isVisitor) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/sign-in', request.url))
}

export const config = {
  matcher: ['/'],
}
