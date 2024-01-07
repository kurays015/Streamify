import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import User from "../../../../models/user";
import githubUser from "../../../../models/github";
import { compare } from "bcrypt";

export const authOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;

          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User doesn't exist!");
          }

          if (!email || !password) {
            throw new Error("All fields are required.");
          }

          const isPasswordMatch = await compare(password, user.password);

          if (!isPasswordMatch) {
            throw new Error("Password doesn't match!");
          }

          return user;
        } catch (err) {
          console.log(err);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const { email, name } = user;

        const User = await githubUser.findOne({ email });

        if (!User) {
          await githubUser.create({ email, name });
        }
      } catch (err) {
        console.log(err);
      }

      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
