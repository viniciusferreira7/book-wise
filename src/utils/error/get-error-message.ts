import { isAxiosError } from 'axios'

import type { ErrorMessage } from '@/app/models/error-message'

export function getErrorMessage(error: unknown): ErrorMessage {
  if (isAxiosError(error)) {
    return { status: error.status, message: error.message }
  }

  return { status: 500, message: 'Internal server error' }
}
