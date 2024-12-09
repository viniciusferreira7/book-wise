import { isServer } from '@tanstack/react-query'

import type { ErrorMessage } from '@/app/models/error-message'

export const queryFnWrapper = async <Fn, Args>(
  fn: (args: Args) => Promise<Fn | ErrorMessage>,
  args: Args,
): Promise<Fn | null> => {
  const data = await fn(args)

  const isObject = data && typeof data === 'object'
  const isErrorMessage = isObject && 'status' in data && 'message' in data

  if (isObject && isErrorMessage) {
    if (!isServer) {
      throw new Error(data.message)
    }
  } else {
    return data
  }

  return null
}
