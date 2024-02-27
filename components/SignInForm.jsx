"use client";
import CredentialSigninButton from "./CredentialSigninButton";
import ForgotPassword from "./ForgotPassword";

export default function SigninForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-white"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            disabled={true}
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
          <ForgotPassword />
        </div>
        <div className="mt-2">
          <input
            disabled={true}
            placeholder="enter your password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block outline-none w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 px-2 bg-[#1c1c1c] focus:ring-2"
          />
        </div>
      </div>
      <div>
        {/* <p className="text-gray-200 text-xs mb-2">
          Don&apos;t have an account?
          <Link href="/register" className="text-blue-500 font-medium ml-1">
            Register
          </Link>
        </p> */}
        <CredentialSigninButton />
        <p className="text-xs text-slate-300 mt-2">
          Credentials sign in is temporary disabled, use google or github
          instead.
        </p>
      </div>
    </form>
  );
}
