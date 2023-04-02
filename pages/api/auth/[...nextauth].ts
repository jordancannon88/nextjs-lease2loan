import NextAuth, { NextAuthOptions } from 'next-auth'
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID as string,
      clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
      issuer: process.env.COGNITO_ISSUER,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     const isAllowedToSignIn = true
  //     if (isAllowedToSignIn) {
  //       return true
  //     } else {
  //       // Return false to display a default error message
  //       return false
  //       // Or you can return a URL to redirect to:
  //       // return '/unauthorized'
  //     }
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return '/dashboard'
  //   },
  // },
  debug: true
}

export default NextAuth(authOptions)