'use server'

import { cookies } from 'next/headers'

export async function deleteCookie(key: string) {
  const cookie = cookies()

  cookie.delete(key)
}
