import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

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
        console.log(credentials);
        // const validatedFields = LoginSchema.safeParse(credentials);
        // console.log(validatedFields, "validatedFields");
        // console.log(credentials);
        // if(validatedFields.success) {
        //   const res = await fetch("http://localhost:3000/api/logi", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       username: validatedFields.data.username,
        //       password: validatedFields.data.password,
        //     }),
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   });
        //   console.log(res, "RES!");
        // }

        return null;
      },
    }),
  ],
};
