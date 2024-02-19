"use client";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        username: form.get("username"),
        password: form.get("password"),
        redirect: false,
      });
      if (res.ok) {
        router.push("/");
        router.replace("/signin");
      } else {
        throw new Error("Invalid Credentials");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-white"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            disabled={loading}
            placeholder="enter your username"
            id="username"
            name="username"
            type="text"
            className="block outline-none w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 bg-[#1c1c1c] focus:ring-2"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-white"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-blue-500 hover:text-blue-300"
              onClick={() => alert("not yet working...")}
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            disabled={loading}
            placeholder="enter your password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block outline-none w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 bg-[#1c1c1c] focus:ring-2"
          />
          <p className="text-xs text-red-500 my-1">{error}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-200 text-xs mb-2">
          Don&apos;t have an account?
          <Link href="/register" className="text-blue-500 font-medium ml-1">
            Register
          </Link>
        </p>
        <button
          disabled={loading}
          type="submit"
          className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Signing in...</span>
            </span>
          ) : (
            "Sign in"
          )}
        </button>
      </div>
    </form>
  );
}
