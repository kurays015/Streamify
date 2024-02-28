"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function gitHub() {
  await signIn("github");
}
export async function google() {
  await signIn("google");
}

export async function credentials(formData) {
  // try {
  await signIn("credentials", formData);
  // } catch (error) {
  //   if (error instanceof AuthError) {
  //     switch (error.type) {
  //       case "CredentialsSignin":
  //         return { error: "Invalid credentials!" };
  //       default:
  //         return { error: "Something went wrong!" };
  //     }
  //   }

  //   throw error;
  // }
}
