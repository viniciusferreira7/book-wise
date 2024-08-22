import { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'

import { env } from '@/env'

import PrismaAdapter from './auth/prisma-adapter'

export const authOptions = {
  adapter: PrismaAdapter(),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    // async signIn({ account }) {
    //   if (
    //     !account?.scope?.includes('https://www.googleapis.com/auth/calendar')
    //   ) {
    //     return '/error/?error=permissions'
    //   }

    //   return true
    // },
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...user,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      }
    },
  },
} satisfies AuthOptions
