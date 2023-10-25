import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@server/lib/mongodb"

export const authOptions   = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session:{
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.SECRET_JWT
  },
  callbacks:{
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      session.user.id = token.id
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(user ,profile);
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
      }
      return token
    },
  },

  adapter: MongoDBAdapter(clientPromise),
}

export default NextAuth(authOptions)