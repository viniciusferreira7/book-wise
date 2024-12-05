import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const hasToken = request.cookies.has('next-auth.session-token')
  const isVisitor = request.cookies.has('is-visitor')
  if (hasToken || isVisitor) {
    return NextResponse.next()
  }

  if (request.url === '/perfil' && !hasToken) {
    NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.redirect(new URL('/sign-in', request.url))
}

export const config = {
  matcher: ['/'],
}
