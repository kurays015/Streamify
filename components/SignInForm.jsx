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
            placeholder="enter your username"
            id="username"
            name="username"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
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
              className="font-semibold text-indigo-400 hover:text-indigo-300"
              onClick={() => alert("not yet working...")}
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            placeholder="enter your password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
          />
          <p className="text-xs text-red-500 my-1">{error}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-200 text-xs mb-2">
          Don&apos;t have an account?
          <Link href="/register" className="text-indigo-400 font-medium ml-1">
            Register
          </Link>
        </p>
        <button
          disabled={loading}
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
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
