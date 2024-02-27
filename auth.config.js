import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import User from "@/models/user";
import { mongoDbConnection } from "./lib/mongoose";

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
        await mongoDbConnection();
        console.log("CREDENTIALS!", credentials);
        const parsedCredentials = z
          .object({ username: z.string().min(6), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await User.findOne({ username });

          if (!user) return null;

          const bcrypt = require("bcrypt");

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
};
