"use client";
import SignInForm from "@/components/SignInForm";
import ProvidersButtons from "./ProvidersButtons";

export default function LoginPage() {
  return (
    <div className="h-[80vh] flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignInForm />
        <div className="flex items-center justify-between my-5">
          <hr className="w-full border-gray-300 border-1" />
          <span className="text-sm text-gray-400 px-4">or</span>
          <hr className="w-full border-gray-300 border-1" />
        </div>
        <ProvidersButtons />
      </div>
    </div>
  );
}
