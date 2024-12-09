export type ZodErrorIssues = {
  formErrors: string[]
  fieldErrors: Record<string, string[]>
}

export interface ErrorMessage {
  status: number | undefined
  message: string
  issues?: ZodErrorIssues
}
