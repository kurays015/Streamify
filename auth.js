import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { mongoDbConnection } from "./lib/mongoose";
import providersUser from "@/models/providers";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ profile, account }) {
      await mongoDbConnection();

      const user = await providersUser.findOne({ name: profile?.name });

      if (!user) {
        const picture = profile?.picture
          ? profile?.picture
          : profile?.avatar_url;

        await providersUser.create({
          name: profile?.name,
          avatar: picture,
        });
      }
      return true;
    },
  },
});
