import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/models/LoginSchema";
import { mongoDbConnection } from "./lib/mongoose";
import User from "@/models/user";

export default {
  pages: {
    signIn: "/signin",
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        console.log(credentials, "credentials");
        const validatedFields = LoginSchema.safeParse(credentials);
        console.log(validatedFields, "validatedFields");

        return null;
      },
    }),
  ],
};
