import type { NextRequest } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

interface Params {
  params: {
    id: string
  }
}

const getUserSchemaParams = z.object({
  id: z.string().cuid(),
})

export async function GET(_request: NextRequest, { params }: Params) {
  const schema = getUserSchemaParams.safeParse(params)

  if (!schema.success) {
    return new Response(
      JSON.stringify({
        message: schema.error.message,
        issues: schema.error.flatten(),
      }),
      {
        status: 400,
      },
    )
  }

  const { id: userId } = schema.data

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      accounts: true,
    },
  })

  if (!user) {
    return new Response(null, {
      status: 404,
    })
  }

  return new Response(JSON.stringify(user), {
    status: 200,
  })
}
