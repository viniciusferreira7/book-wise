'use server'

import type { Account, User } from '@prisma/client'

import type { ErrorMessage } from '@/app/models/error-message'
import { api } from '@/lib/axios'
import { getErrorMessage } from '@/utils/error/get-error-message'

export interface GetUserParams {
  userId?: string
}

export interface GetUserResponse extends User {
  accounts: Account[]
}

export async function getUser({
  userId,
}: GetUserParams): Promise<GetUserResponse | ErrorMessage> {
  try {
    const { data } = await api.get<GetUserResponse>(`/users/${userId}/`)
    return data
  } catch (err) {
    return getErrorMessage(err)
  }
}
