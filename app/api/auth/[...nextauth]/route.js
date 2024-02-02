import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import User from "../../../../models/user";
import githubUser from "../../../../models/github";
import { compare } from "bcrypt";
import { mongoDbConnection } from "@/lib/mongoose";

export const authOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          await mongoDbConnection();

          const { username, password } = credentials;

          const user = await User.findOne({ username });

          if (!user) {
            throw new Error("User doesn't exist!");
          }

          if (!username || !password) {
            throw new Error("All fields are required.");
          }

          const isPasswordMatch = await compare(password, user.password);

          if (!isPasswordMatch) {
            throw new Error("Wrong password!");
          }

          return user;
        } catch (err) {
          console.log(err);
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile, account }) {
      if (account.provider === "github" || account.provider === "google") {
        await mongoDbConnection();
        try {
          const user = await githubUser.findOne({ username: profile?.login });

          if (user) {
            throw new Error("User already exist!");
          }

          await githubUser.create({
            username: profile?.login,
            avatar: profile?.avatar_url,
          });
        } catch (error) {
          console.log(error);
        }
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
