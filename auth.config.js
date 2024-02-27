import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

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
  ],
};
