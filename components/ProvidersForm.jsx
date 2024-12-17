"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export function Github() {
  return (
    <Button
      onClick={() => signIn("github")}
      variant="outline"
      className="w-full flex gap-3 rounded-full hover:bg-indigo-200 transition-all duration-300 ease-in-out hover:text-slate-950"
      type="submit"
    >
      Sign in with <FaGithub className="text-xl" />
    </Button>
  );
}

export function Google() {
  return (
    <Button
      onClick={() => signIn("google")}
      variant="outline"
      className="w-full flex gap-3 rounded-full hover:bg-indigo-200 transition-all duration-300 ease-in-out hover:text-slate-950"
      type="submit"
    >
      Sign in with <FaGoogle className="text-xl" />
    </Button>
  );
}
