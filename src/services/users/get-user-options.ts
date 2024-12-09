import { queryOptions } from '@tanstack/react-query'

import { queryFnWrapper } from '@/utils/error/query-fn-wrapper'

import { getUser, type GetUserParams } from './get-user'

export function getUserOptions({ userId }: GetUserParams) {
  return queryOptions({
    queryKey: ['user', userId],
    queryFn: async () => queryFnWrapper(getUser, { userId }),
  })
}
