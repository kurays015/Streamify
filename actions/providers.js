"use server";
import { signIn } from "@/auth";

export async function gitHub() {
  await signIn("github");
}
export async function google() {
  await signIn("google");
}

export async function credentials(formData) {
  await signIn("credentials", formData);
}
