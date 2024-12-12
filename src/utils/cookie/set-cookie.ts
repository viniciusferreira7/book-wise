'use server'

import { cookies } from 'next/headers'

export async function setCookie(key: string, value: string) {
  const cookie = cookies()

  const maxAge = 60 * 60 * 3 // 3 days

  cookie.set(key, value, { maxAge })
}
