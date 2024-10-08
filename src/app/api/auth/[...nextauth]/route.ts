import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'

import { authOptions } from '@/lib/auth-options'

type CombineRequest = Request & NextApiRequest
type CombineResponse = Response & NextApiResponse

const handler = async (req: CombineRequest, res: CombineResponse) => {
  return await NextAuth(req, res, authOptions)
}

export { handler as GET, handler as POST }
