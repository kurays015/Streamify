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
      console.log(profile, account);
      // await mongoDbConnection();

      // const user = await providersUser.findOne({ name: profile?.name });

      // const picture = profile?.picture ? profile?.picture : avatar_url;

      // if (!user) return false;

      // await providersUser.create({
      //   name: profile?.name,
      //   avatar: picture,
      // });

      return true;
    },
  },
});
