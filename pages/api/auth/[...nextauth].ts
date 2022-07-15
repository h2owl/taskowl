import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from '../../../lib/prisma';

const findUserByCredentials = async (credentials:any) => {
  console.log("credentials:")
  console.log(credentials)
  const user = await prisma.user.findFirst({
    where: {
      email: credentials.username,
      password: credentials.password,
    }
  });
  return user
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // adapter: PrismaAdapter(prisma),

  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" },
        option: { label: "hoge", type: "text"}
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = findUserByCredentials(credentials)
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      console.log('サインイン')
      console.log(user)
      console.log(account)
      if (account.provider != "credentials") {
        console.log(profile)
        console.log(email)
      }
      console.log(credentials)
      return true;
    },
    async session({session, token, user}: any) {
      console.log("session:")
      console.log(session)
      console.log(token)
      console.log(user)
      return session;
    },
  },
}
export default NextAuth(authOptions)