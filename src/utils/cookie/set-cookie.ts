'use server'

import { cookies } from 'next/headers'

export async function setCookie(key: string, value: string) {
  const cookie = cookies()

  cookie.set(key, value)
}
