import NextAuth from "next-auth";
import authConfig from "./auth.config";
import providersUser from "./models/providers";
import { mongoDbConnection } from "./lib/mongoose";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ profile, account }) {
      if (account.provider === "github" || account.provider === "google") {
        console.log(profile, "PROFILE!!");
        await mongoDbConnection();
        const user = await providersUser.findOne({ name: profile?.name });

        if (!user) {
          const profilePicture = profile.picture
            ? profile.picture
            : profile.avatar_url;

          await providersUser.create({
            name: profile?.name,
            avatar: profilePicture,
          });
        }
      }
      return true;
    },
  },
  ...authConfig,
});
