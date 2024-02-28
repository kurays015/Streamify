import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/models/LoginSchema";
import User from "@/models/user";
import { mongoDbConnection } from "./lib/mongoose";
import bcrypt from "bcryptjs";

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
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          await mongoDbConnection();
          const { username, password } = validatedFields.data;

          const user = await User.findOne({ username });

          if (!user || !user.password) return null;
          // const bcrypt = require("bcryptjs");

          console.log(user, "USER found!");
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
};
