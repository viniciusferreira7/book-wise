import { z } from 'zod'

export const envSchema = z
  .object({
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    DATABASE_USERNAME: z.string().optional(),
    DATABASE_PASSWORD: z.string().optional(),
    DATABASE_NAME: z.string().optional(),
    DATABASE_URL: z.string().url().optional(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    NEXTAUTH_URL: z.string(),
    NEXTAUTH_SECRET: z.string(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
  })
  .superRefine((data, ctx) => {
    if (process.env.CI === 'true') {
      return
    }

    if (!data.DATABASE_USERNAME) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'DATABASE_USERNAME is required',
        path: ['DATABASE_USERNAME'],
      })
    }

    if (!data.DATABASE_PASSWORD) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'DATABASE_PASSWORD is required',
        path: ['DATABASE_PASSWORD'],
      })
    }

    if (!data.DATABASE_NAME) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'DATABASE_NAME is required',
        path: ['DATABASE_NAME'],
      })
    }

    if (!data.DATABASE_URL) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'DATABASE_URL is required',
        path: ['DATABASE_URL'],
      })
    }
  })

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data
